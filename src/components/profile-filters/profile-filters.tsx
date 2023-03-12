import styles from './profile-filters.module.scss';
import classNames from 'classnames';

export interface ProfileFiltersProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-profile-filterss-and-templates
 */
export const ProfileFilters = ({ className }: ProfileFiltersProps) => {
    return (
        <ul className={classNames(styles.profileFilter, className)}>
                <li className={styles.link}>Daily</li>
                <li className={styles.activeLink}>Weekly</li>
                <li className={styles.link}>Monthly</li>
            </ul>

    );
};
