import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fatchUsers } from "../../Store/Slices/userSlice";
import ApiList from "../ApiComponent/ApiList";
const List = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    dispatch(fatchUsers());
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
      {users.map((user) => {
        return <ApiList key={user.uid} {...user} />;
      })}
    </div>
  );
};

export default List;
