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
        <div className={classNames(styles.profileFilter, className)}>
            <a href="/">Daily</a>
            <a href="/" className={classNames(styles.active, className)}>Weekly</a>
            <a href="/">Monthly</a>
        </div>
    );
};
