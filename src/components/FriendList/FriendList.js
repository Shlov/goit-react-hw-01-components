import {List, Item, Status, Avatar, Name} from './FriendList.style';

export const Friends = ({friends}) => (
<List>
  {friends.map(friend  => (
    <Item key={friend.id}>
      <Status>{friend.isOnline}</Status>
      <Avatar src={friend.avatar} alt="User avatar" width="48"/>
      <Name>{friend.name}</Name>
    </Item>
  ))}
</List>
);