import styles from '../styles/Header.module.css';
import Person2Icon from '@mui/icons-material/Person2';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

export default function Header() {
  return (
    <div className={styles.header}>
      <IconButton>
        <Person2Icon fontSize="large" className={styles.header__icon} />
      </IconButton>
      <img
        className={styles.header__logo}
        src="https://i.pinimg.com/originals/d4/d8/82/d4d882dccd11187b7980ada01a465d48.png"
        alt=""
      />

      <IconButton>
        <ForumIcon fontSize="large" className={styles.header__icon} />
      </IconButton>
    </div>
  );
}
