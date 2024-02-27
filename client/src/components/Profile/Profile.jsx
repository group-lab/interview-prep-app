import profile from '../../assets/profile.png';
import PropTypes from 'prop-types';

const Profile = ({profileSize}) => {
  return (
    <img className={profileSize} src={profile} alt="placeholder profile" />
  )
}

Profile.propTypes = {
  profileSize: PropTypes.string.isRequired,
}

export default Profile;