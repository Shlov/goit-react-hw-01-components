import { Profile } from './Profile/Profile';
import {Statistics} from './Statistics/Statistics';
import user from './Profile/user.json';
import statistics from './Statistics/data.json';

export const App = () => {
  return (
    <>
      <Profile user = {user}/>
      <Statistics statistics = {statistics}/>
    </>
  );
};
