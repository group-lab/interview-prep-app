import profile from '../../assets/profile.png';
import PropTypes from 'prop-types';

const ProfileImg = ({profileSize}) => {
  return (
    <img className={profileSize} src={profile} alt="placeholder profile" />
  )
}

ProfileImg.propTypes = {
  profileSize: PropTypes.string.isRequired,
}

export default ProfileImg;