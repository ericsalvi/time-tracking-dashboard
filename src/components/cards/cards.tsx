import styles from './cards.module.scss';
import classNames from 'classnames';
import { Card } from '../card/card';

export interface CardsProps {
    className?: string;
    title?: string;
    thisWeek?: number;
    lastWeek?: number;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cardss-and-templates
 */
export const Cards = ({ title, className, thisWeek, lastWeek }: CardsProps) => {
    return (
        <div className={classNames(className, styles.cardContainer)}>
            <Card title="Work" className={'work'} thisWeek={32} lastWeek={36} />
            <Card title="Play" className={'play'} thisWeek={10} lastWeek={8} />
            <Card title="Study" className={'study'} thisWeek={4} lastWeek={7} />
            <Card title="Exercise" className={'exercise'} thisWeek={4} lastWeek={5} />
            <Card title="Social" className={'social'} thisWeek={5} lastWeek={10} />
            <Card title="Self Care" className={'selfCare'} thisWeek={2} lastWeek={2} />
        </div>
    );
};
