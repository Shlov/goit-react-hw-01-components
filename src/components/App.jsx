import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { Friends } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from './Profile/user.json';
import statistics from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <>
      <Profile user = {user}/>
      <Statistics statistics = {statistics}/>
      <Friends friends = {friends}/>
      <TransactionHistory transactions = {transactions}/>
    </>
  );
};
