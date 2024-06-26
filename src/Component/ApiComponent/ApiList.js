import { fatchUsers } from "../../Store/Slices/userSlice";
const ApiList = ({ users }) => {
  return (
    <div className="add_user d-flex align-items-center">
      <img src="./user.png" alt="user" />
      <div className="text d-flex">
        <span>{`${users.fName} ${users.lName}`}</span>
        <p>Hi</p>
      </div>
    </div>
  );
};
export default ApiList;
