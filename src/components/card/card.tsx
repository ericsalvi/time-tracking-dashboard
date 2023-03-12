import styles from './card.module.scss';
import classNames from 'classnames';
import Ellipsis from '../../images/icon-ellipsis.svg';

export interface CardProps {
    className?: string;
    title?: string;
    thisWeek?: number;
    lastWeek?: number;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cards-and-templates
 */
export const Card = ({ className, title, thisWeek, lastWeek }: CardProps) => {
    return (
        <div className={classNames(className, styles.card)}>
            <div className={styles.cardContainer}>
                <div className={styles.cardTopContainer}>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <img src={Ellipsis} />
                </div>
                <div className={styles.cardBottomContainer}>
                    <h2 className={styles.cardHours}>{thisWeek}hrs</h2>
                    <p className={styles.cardPastHours}>Last Week - {lastWeek}hrs</p>
                </div>
            </div>
        </div>
    );
};
