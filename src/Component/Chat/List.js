import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fatchUsers } from "../../Store/Slices/userSlice";
import ApiList from "../ApiComponent/ApiList";
import { getAuth } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
const List = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);
  // const currentUser = useSelector((state) => state.currentUser.data);
  // const currStatus = useSelector((state) => state.currentUser.status);
  // const currError = useSelector((state) => state.currentUser.error);

  // try new
  const auth = getAuth();
  const db = getFirestore();
  const [currUserDet, setCurrUserDet] = useState(null);

  const fatchCurrData = async () => {
    auth.onAuthStateChanged(async (user) => {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists) {
        setCurrUserDet(docSnap.data());
      } else {
        console.log("no data found");
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fatchUsers()).unwrap();
        await fatchCurrData();
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [dispatch]);

  // if (currStatus === "loading") {
  //   return;
  //   <div>
  //     <p>Loading....</p>
  //   </div>;
  // }
  // if (currStatus === "failed") {
  //   return <div>{currError}</div>;
  // }

  return (
    <div className="list">
      {currUserDet ? (
        <div className="d-flex justify-content-between mb-5">
          <div className="">
            <span className="user_logo">
              <img src="./user.png" alt="user" />
            </span>
          </div>
          <div>
            <span className="">
              <p>{currUserDet.email}</p>
            </span>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-between mb-5">
          <div className="">
            <span className="user_logo">
              <img src="./user.png" alt="user" />
            </span>
          </div>
          <div>
            <span className="">
              <p>User Name</p>
            </span>
          </div>
        </div>
      )}

      {users.map((user) => {
        return <ApiList key={user.uid} users={user} />;
      })}
    </div>
  );
};

export default List;
