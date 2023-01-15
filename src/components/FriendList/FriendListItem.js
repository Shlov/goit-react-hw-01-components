import PropTypes from 'prop-types';
import {Item, Status, Avatar, Name} from './FriendListItem.style';

export const Friend = ({isOnline, avatar, name}) => (
  <Item>
    <Status isOnline={isOnline}></Status>
    <Avatar src={avatar} alt="User avatar" width="48"/>
    <Name>{name}</Name>
  </Item>
);

Friend.propType = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
