import { Profile } from './Profile/Profile';
import user from './Profile/user.json';

export const App = () => {
  return (
    <>
      <Profile user = {user}/>
    </>
  );
};
