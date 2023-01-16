import { Container } from './App.styled';

import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statictics';
import FriendsList from '../Friends/FriendList';
import TransHistory from '../Transactions/TransactionHistory';

import userData from 'data/user.json';
import statData from 'data/data.json';
import friendsData from 'data/friends.json';
import transData from 'data/transactions.json';

export const App = () => {
  return (
    <Container>
      <Profile data={userData} />
      <Statistics data={statData} />
      <FriendsList data={friendsData} />
      <TransHistory data={transData} />
    </Container>
  );
};
