import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import EmojiPicker from "emoji-picker-react";
import {
  addDoc,
  collection,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
// import { sendData } from "../../Store/Slices/dataAuth";
const ChatBox = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [masseges, setMasseges] = useState([]);
  const activeChatUser = useSelector(
    (state) => state.activeChat.activeChatUser
  );
  const db = getFirestore();
  const auth = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (activeChatUser) {
      const massegesRef = collection(db, "masseges");
      const q = query(
        massegesRef,
        where("chatId", "==", getChatId(auth.uid, activeChatUser.uid)),
        orderBy("timeStamp", "asc")
      );

      const unSubscrib = onSnapshot(q, (querySnapshot) => {
        const fetchMasseges = [];
        querySnapshot.forEach((doc) => {
          fetchMasseges.push(doc.data());
        });
        console.log("Fetched Messages:", fetchMasseges); // Add this line
        setMasseges(fetchMasseges);
      });
      return () => unSubscrib();
    }
  }, [activeChatUser, db, auth]);

  const getChatId = (uid1, uid2) => {
    return uid1 < uid2 ? `${uid1}_${uid2}` : `${uid2}_${uid1}`;
  };

  const emojiHandeler = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  const submitChat = async (e) => {
    e.preventDefault();
    if (text.trim() && activeChatUser) {
      const massegesRef = collection(db, "masseges");
      await addDoc(massegesRef, {
        text,
        senderId: auth.uid,
        reciverId: activeChatUser.uid,
        chatId: getChatId(auth.uid, activeChatUser.uid),
        timeStamp: new Date(),
      });
      setText("");
    }
  };

  return (
    <div>
      <div className="chatHader">
        {activeChatUser && (
          <>
            <div className="user_icon col-sm-2">
              <img src="./user.png" alt="user" />
            </div>
            <div className="user_spec col-sm-6">
              <p className="mb-0">{`${activeChatUser.fName} ${activeChatUser.lName}`}</p>
              <p>{activeChatUser.email}</p>
            </div>
          </>
        )}
        <div className="chat_icons col-sm-3">
          <span>
            <img src="./call.png" alt="call" />
          </span>
          <span>
            <img src="./videocall.png" alt="videocall" />
          </span>
          <span>
            <img src="./about.png" alt="about" />
          </span>
        </div>
      </div>

      <div className="center">
        {masseges.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.senderId === auth.uid ? "sent" : "received"
            }`}
          >
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="lower_div">
        <div className="icons col-sm-3">
          <span>
            <img src="./gallery.png" alt="gallery" />
          </span>
          <span>
            <img src="./camera.png" alt="camera" />
          </span>
          <span>
            <img src="./microphone.png" alt="mic" />
          </span>
        </div>
        <div className="text_area col-sm-9">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <span>
            <img
              src="./emoji.png"
              alt="emoji"
              onClick={() => setOpen((prev) => !prev)}
            />
          </span>
          <div className="emoji_picker">
            <EmojiPicker open={open} onEmojiClick={emojiHandeler} />
          </div>
          <button className="btn btn-primary" onClick={submitChat}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
