import React from "react";
import { useDispatch } from "react-redux";
import { setActiveUser } from "../../Store/Slices/activeChatUser";
const ApiList = ({ users }) => {
  const dispatch = useDispatch;
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
        <p>Hi</p>
      </div>
    </div>
  );
};
export default ApiList;
