import styles from './App.module.css';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>

      <div className={styles.section}>
        <Statistics title="Upload stats" stats={data} />
      </div>

      <div className={styles.section}>
        <FriendList friends={friends} />
      </div>

      <div className={styles.section}>
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};
