import Logout from './Logout';
import UserName from './UserName';
import './UserInfo.css';
const UserInfo = () => {
  return (
    <div className="user-info">
      <UserName />
      <Logout />
    </div>
  );
};
export default UserInfo;
