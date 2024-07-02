import React from "react";
import Detailes from "./Detailes";
import List from "./List";
import ChatBox from "./ChatBox";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "../../Store/Slices/currentUserSlice";
const Mainchat = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
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
  );
};

export default Mainchat;
