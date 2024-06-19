import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fatchCurrentUser, fatchUsers } from "../../Store/Slices/userSlice";
import ApiList from "../ApiComponent/apiList";
const List = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const currentUser = useSelector((state) => state.user.currentUser);
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);
  useEffect(() => {
    dispatch(fatchCurrentUser()).then(() => {
      dispatch(fatchUsers());
    });
  }, [dispatch]);

  return (
    <div className="list">
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
      {users
        .filter((user) => user.uid !== currentUser?.uid)
        .map((user) => {
          return <ApiList key={user.uid} />;
        })}
      {/* <div className="add_user d-flex align-items-center">
        <img src="./user.png" alt="user" />
        <div className="text d-flex">
          <span>Suman Roy</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="add_user d-flex align-items-center">
        <img src="./user.png" alt="user" />
        <div className="text d-flex">
          <span>Suman Roy</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="add_user d-flex align-items-center">
        <img src="./user.png" alt="user" />
        <div className="text d-flex">
          <span>Suman Roy</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="add_user d-flex align-items-center">
        <img src="./user.png" alt="user" />
        <div className="text d-flex">
          <span>Suman Roy</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="add_user d-flex align-items-center">
        <img src="./user.png" alt="user" />
        <div className="text d-flex">
          <span>Suman Roy</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="add_user d-flex align-items-center">
        <img src="./user.png" alt="user" />
        <div className="text d-flex">
          <span>Suman Roy</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="add_user d-flex align-items-center">
        <img src="./user.png" alt="user" />
        <div className="text d-flex">
          <span>Suman Roy</span>
          <p>Hello</p>
        </div>
      </div> */}
    </div>
  );
};

export default List;
