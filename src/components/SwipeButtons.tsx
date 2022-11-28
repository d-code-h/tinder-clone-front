import styles from '../styles/SwipeButtons.module.css';
import ReplayIcon from '@mui/icons-material/Replay';
import ClearIcon from '@mui/icons-material/Clear';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';

import IconButton from '@mui/material/IconButton';
export default function SwipeButtons() {
  return (
    <div className={styles.swipeButtons}>
      <IconButton className={styles.swipeButtons__repeat}>
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className={styles.swipeButtons__left}>
        <ClearIcon fontSize="large" />
      </IconButton>
      <IconButton className={styles.swipeButtons__star}>
        <StarRateIcon fontSize="large"></StarRateIcon>
      </IconButton>
      <IconButton className={styles.swipeButtons__right}>
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className={styles.swipeButtons__lightning}>
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
