import styles from './profile.module.scss';
import classNames from 'classnames';
import { ProfileDetails } from '../profile-details/profile-details';
import { ProfileFilters } from '../profile-filters/profile-filters';

export interface ProfileProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-profiles-and-templates
 */
export const Profile = ({ className }: ProfileProps) => {
    return (
        <div
            className={classNames(styles.root, className, styles.profile)}
        >
            <ProfileDetails />
            <ProfileFilters />
        </div>
    );
};
