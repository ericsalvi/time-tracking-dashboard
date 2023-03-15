import { useState } from 'react';
import styles from './App.module.scss';
import { Profile } from './components/profile/profile';
import { Cards } from './components/cards/cards';

function App() {
    const [duration, setDuration] = useState('weekly');
    const setDurationType = (childdata: any) => {
        setDuration(childdata);
    }
    const getDurationType = () => {
        setDuration(duration);
    }

    return (
        <div className={styles.App}>
            <Profile setDurationType={setDurationType}/>
            <Cards getDurationType={duration}/>
        </div>
    );
}

export default App;