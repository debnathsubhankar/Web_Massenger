const ChatBox = () => {
  return (
    <div>
      <div className="chatHader">
        <div className="user_icon">
          <img src="./user.png" alt="user" />
        </div>
        <div className="user_spec">
          <p>Name</p>
          <span>Lorem ipsum dolor.</span>
        </div>
        <div className="chat_icons">
          <span>
            <img src="./call.png" alt="call" />
          </span>
          <span>
            <img src="./videocall.png" alt="videocall" />
          </span>
          <span>
            <img src="./about.png" alt="about" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
