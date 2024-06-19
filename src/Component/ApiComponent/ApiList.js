const ApiList = ({ user }) => {
  return (
    <div className="add_user d-flex align-items-center">
      <img src="./user.png" alt="user" />
      <div className="text d-flex">
        <span>{user.fName + "" + user.lName}</span>
        <p>Hi</p>
      </div>
    </div>
  );
};
export default ApiList;
