import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { Friends } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import {user, statistics, friends, transactions} from './data';

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
