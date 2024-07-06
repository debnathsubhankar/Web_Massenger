import React from "react";
import Detailes from "./Detailes";
import List from "./List";
import ChatBox from "./ChatBox";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchCurrentUser } from "../../Store/Slices/currentUserSlice";

const Mainchat = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const status = useSelector((state) => state.auth.status);
  // useEffect(() => {
  //   dispatch(fetchCurrentUser());
  // }, [dispatch]);
  const userLog = window.localStorage.getItem("userLog");

  return (
    <div>
      {status === "loading" && <p>Loading....</p>}
      {userLog ? (
        <div className="container mt-5 chat_box">
          <div className="row">
            <div className="col-sm-4 border-right">
              <List />
            </div>
            <div className="col-sm-5 border-right">
              <ChatBox />
            </div>
            <div className="col-sm-3">
              <Detailes />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p>please log in</p>
        </div>
      )}
    </div>
  );
};

export default Mainchat;
