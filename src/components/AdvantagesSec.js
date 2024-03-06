import React from 'react'
import './AdvantagesSec.css';
import { advantagesSection } from '../data/data'
import MainHeading from './MainHeading';

function AdvantagesSec() {
  return (
    <div className='container py-5 my-5  text-center text-md-start'>
    <MainHeading>Why buy from lap shop</MainHeading>
    <div className='advSec row mt-5'>
            {advantagesSection?.map((adv)=>
            <div  key={adv.title} className='col-12 col-md-6 col-lg-3 mb-2 flex-column flex-md-row'>
            <span>{<adv.icon/>}</span>
            <div className='details'>
                <h5>{adv.title}</h5>
                <p>{adv.desc}</p>
            </div>
            </div>
            )}
    </div>
    </div>
    
  )
}

export default AdvantagesSec
