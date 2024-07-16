import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveUser } from "../../Store/Slices/activeChatUser";
// import { getAuth } from "firebase/auth";
import {
  collection,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";

const ApiList = ({ users }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.user);
  const db = getFirestore();
  const [lastMassege, setLastMassege] = useState("");

  useEffect(() => {
    const fetchLastMassege = async () => {
      if (auth && users) {
        const massegeRef = collection(db, "masseges");
        const q = query(
          massegeRef,
          where("chatId", "==", getChatId(auth.uid, users.uid)),
          orderBy("timeStamp", "dsec"),
          limit(1)
        );
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const massegeData = querySnapshot.docs[0].data();
          setLastMassege(massegeData.text);
        } else {
          setLastMassege("");
        }
      }
    };
    fetchLastMassege();
  }, [db, users, auth]);

  const getChatId = (uid1, uid2) => {
    return uid1 < uid2 ? `${uid1}_${uid2}` : `${uid2}_${uid1}`;
  };

  const handleUserClick = () => {
    dispatch(setActiveUser(users));
    console.log(users);
  };

  return (
    <div
      className="add_user d-flex align-items-center"
      onClick={handleUserClick}
    >
      <img src="./user.png" alt="user" />
      <div className="text d-flex">
        <span>{`${users.fName} ${users.lName}`}</span>
        <p>{lastMassege || "no Massage yet"}</p>
      </div>
    </div>
  );
};
export default ApiList;
