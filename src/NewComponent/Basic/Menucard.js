import React from 'react'
import SampleImage from './Images/image3.jpg'

const Menucard = ({menuData}) => {

  return (
   <>
   <section className="main-card--cointainer">

   

   {menuData.map((curElem)=>{
    console.log(curElem.Image);
    const{id,name,category,Image,Description}=curElem;
    return(
      <>
      <div className='card-container'>
      <div className='card'>
        <div className='card-body'>
          <span className='card-number card-circle subtle'>{id}</span>
          <span className='card-author subtle'>{category}</span>
          <h2 className='card-title'>{name}</h2>
          <span className='card-description subtle'> 
          {Description}</span>
<div className='"card-read'>Read</div>
        </div>
        {<img src={SampleImage} alt="Imagibhaves" className='=card-media'/> }
        <span className='card-tag subtle'>ODER </span>
      </div>
    </div>
    </>
   );
   })}
   </section>
   </>
  );
};

export default Menucard