import profileImg from '../../../assets/증명사진.jpg';
import './UserImg.css';
const UserImg = () => {
  return (
    <div className="user-img">
      <img className="profile-img" src={profileImg}></img>
    </div>
  );
};
export default UserImg;
