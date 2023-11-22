import UserImg from './UserImg';
import UserInfo from './UserInfo';
import './UserProfile.css';
const UserProfile = () => {
  return (
    <div className="user-profile">
      <UserImg />
      <UserInfo />
    </div>
  );
};
export default UserProfile;
