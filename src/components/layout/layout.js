import { withCounter } from "../../hocs/with-counter";
import styles from "./layout.module.css";

export const Layout = withCounter(({ chats, messages, counter }) => {
  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <div className={styles.chats}>{chats}</div>
        <div className={styles.messages}>{messages}</div>
      </div>
    </div>
  );
});
