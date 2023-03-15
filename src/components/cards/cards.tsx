import { useEffect, useState } from 'react';
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
 * Using guide for JSON: https://www.pluralsight.com/guides/fetch-data-from-a-json-file-in-a-react-app
 */
export const Cards = ({ title, className, thisWeek, lastWeek }: CardsProps) => {

const [data,setData]=useState([]);
const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
    useEffect(()=>{
    getData()
  },[])

    return (
      <div className={classNames(className, styles.cardContainer)}>
        {data && data.length>0 && data.map((item, i)=>
          <Card key={i} title={item['title']} className={'cardHours'} thisWeek={item['timeframes']['weekly']['current']} lastWeek={item['timeframes']['weekly']['previous']} />
        )}
      </div>
    );
};
      // <div>{data && data.length>0 && data.map((item, i)=><p key={i}>{item['title']}</p>)}</div>
      // <Card title="Work" className={'work'} thisWeek={32} lastWeek={36} />
      // <Card title="Play" className={'play'} thisWeek={10} lastWeek={8} />
      // <Card title="Study" className={'study'} thisWeek={4} lastWeek={7} />
      // <Card title="Exercise" className={'exercise'} thisWeek={4} lastWeek={5} />
      // <Card title="Social" className={'social'} thisWeek={5} lastWeek={10} />
      // <Card title="Self Care" className={'selfCare'} thisWeek={2} lastWeek={2} />