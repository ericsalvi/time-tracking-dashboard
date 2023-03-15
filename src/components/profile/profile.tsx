import styles from './profile.module.scss';
import classNames from 'classnames';
import { ProfileDetails } from '../profile-details/profile-details';
import { useState } from 'react';

export interface ProfileProps {
    className?: string;
    setDurationType?: any;
}

const menuItems = ["Daily", "Weekly", "Monthly"];

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-profiles-and-templates
 */
export const Profile = ({ className, setDurationType }: ProfileProps) => {
    const [selectedMI, setSelectedMI] = useState(menuItems[1]);
    return (
        <div className={classNames(styles.root, className, styles.profile)}>
            <ProfileDetails />
            <div className={classNames(className, styles.profileFilter)}>
            {menuItems.map((menuItem) => (
                <a
                className={selectedMI === menuItem ? "active" : ""}
                onClick={() => {setSelectedMI(menuItem); setDurationType(menuItem.toLowerCase())}} 
                >
                {menuItem}
                </a>
                ))}
            </div>
        </div>
    );
};
