import styles from './App.module.scss';
import { Profile } from './components/profile/profile';
import { Cards } from './components/cards/cards';

function App() {
    return (
        <div className={styles.App}>
            <Profile />
            <Cards />
        </div>
    );
}

export default App;