import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
const ChatBox = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const emojiHandeler = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div>
      <div className="chatHader">
        <div className="user_icon col-sm-2">
          <img src="./user.png" alt="user" />
        </div>
        <div className="user_spec col-sm-6">
          <p className="mb-0">Name</p>
          <p>Lorem ipsum dolor.</p>
        </div>
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
      <div className="center"></div>
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
          <button className="btn btn-primary">Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
