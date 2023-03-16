import styles from './card.module.scss';
import classNames from 'classnames';

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
                    <h2 className={styles.cardTitle}>{title}</h2>
                    <svg
                        width="21"
                        height="5"
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles.cardEllipsis}
                    >
                        <path
                            d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                            fill="#BBC0FF"
                            fillRule="evenodd"
                        />
                    </svg>
                </div>
                <div className={styles.cardBottomContainer}>
                    <h3 className={styles.cardHours}>{thisWeek}hrs</h3>
                    <p className={styles.cardPastHours}>Last Week - {lastWeek}hrs</p>
                </div>
            </div>
        </div>
    );
};
