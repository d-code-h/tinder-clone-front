import { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import styles from '../styles/TinderCard.module.css';
import axios from '../utils/axios';

interface Person {
  name: string;
  imgUrl: string;
}
export default function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/tinder/cards');
      setPeople(req.data);
    }
    fetchData();
  }, []);

  const swiped = (direction: string, nameToDelete: string) => {
    console.log('Removing ' + nameToDelete);
  };
  const outOfFrame = (name: string) => {
    console.log(name + ' left the screen!');
  };
  if (people.length === 0) {
    return <div className={styles.loading}>Loading...</div>;
  }
  return (
    <div className={styles.tinderCards}>
      <div className={styles.tinderCards__container}>
        {people.map((person: Person) => (
          <TinderCard
            className={styles.swipe}
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className={styles.card}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}
