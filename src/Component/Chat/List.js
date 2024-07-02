import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fatchUsers } from "../../Store/Slices/userSlice";
import ApiList from "../ApiComponent/ApiList";
const List = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);
  const currentUser = useSelector((state) => state.currentUser.data);
  const currStatus = useSelector((state) => state.currentUser.status);
  const currError = useSelector((state) => state.currentUser.error);

  useEffect(() => {
    dispatch(fatchUsers());
  }, [dispatch]);

  if (currStatus === "loading") {
    return;
    <div>
      <p>Loading....</p>
    </div>;
  }
  if (currStatus === "failed") {
    return <div>{currError}</div>;
  }

  return (
    <div className="list">
      {currentUser ? (
        <div className="d-flex justify-content-between mb-5">
          <div className="">
            <span className="user_logo">
              <img src="./user.png" alt="user" />
            </span>
          </div>
          <div>
            <span className="">
              <p>{currentUser.email}</p>
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
