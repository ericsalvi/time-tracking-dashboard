import styles from './profile.module.scss';
import classNames from 'classnames';
import ProfileImage from '../../images/image-jeremy.png';

export interface ProfileProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-profiles-and-templates
 */
export const Profile = ({ className }: ProfileProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.profile}>
                <img className={styles.profileImage} alt="profile headshot of employee" src={ProfileImage} />
                <div>
                    <p className={styles.profileText}>Report for</p>
                    <h1 className={styles.profileName}>Jeremy Robson</h1>
                </div>
            </div>
        </div>
    );
};
