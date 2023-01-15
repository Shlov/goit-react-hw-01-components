import PropTypes from 'prop-types';
import {Friend} from '../FriendListItem/FriendListItem'
import {List} from './FriendList.style';

export const Friends = ({friends}) => (
<List>
  {friends.map(friend  => (
    <Friend 
      key={friend.id}
      isOnline = {friend.isOnline}
      avatar = {friend.avatar}
      name = {friend.name}
    />
  ))}
</List>
);

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
