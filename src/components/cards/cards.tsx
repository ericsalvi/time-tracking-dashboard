import { useEffect, useState } from 'react';
import styles from './cards.module.scss';
import classNames from 'classnames';
import { Card } from '../card/card';

export interface CardsProps {
    className?: string;
    title?: string;
    thisWeek?: number;
    lastWeek?: number;
    getDurationType?: any;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cardss-and-templates
 * Using guide for JSON: https://www.pluralsight.com/guides/fetch-data-from-a-json-file-in-a-react-app
 * Passing state from Parent to Child / Child to Parent https://www.freecodecamp.org/news/pass-data-between-components-in-react/
 */
export const Cards = ({ getDurationType, title, className, thisWeek, lastWeek }: CardsProps) => {
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
          <Card key={i} title={item['title']} className={'cardHours'} thisWeek={item['timeframes'][getDurationType]['current']} lastWeek={item['timeframes'][getDurationType]['previous']} />
        )}
      </div>
    );
};