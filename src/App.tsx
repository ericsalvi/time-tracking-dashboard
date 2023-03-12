import styles from './App.module.scss';
import { Profile } from './components/profile/profile';

function App() {
    return (
        <div className={styles.App}>
            <Profile />
        </div>
    );
}

export default App;
