import clsx from "clsx";
import styles from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className={styles.item} key={id}>
          <span
            className={clsx(
              styles.status,
              isOnline ? styles.online : styles.offline
            )}
          />
          <img
            className={styles.avatar}
            src={avatar}
            alt="User avatar"
            width="60"
          />
          <p className={styles.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};
