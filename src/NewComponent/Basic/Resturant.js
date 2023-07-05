import React, { useState } from 'react'
import Menucard from './Menucard'
import './style.css'
import Menu from './MenuApi'
import Navbar from './Navbar'

import LoginButton from './LoginButton';
import LogoutButton from './Logout';



export default function Resturant() {
const uniqueList =[
    ...new Set(
      Menu.map((curElem)=>{
        return curElem.category;
      })
    ),
    "All",
  ];
  console.log(uniqueList);

const [menuData, setMenuData] = useState(Menu);
const[menuList, setMenuList] = useState(uniqueList);
const filterItem=(category)=>{
  if(category=== "All"){
    setMenuData(Menu)
    return;
  }
  const updatedList=Menu.filter((curElem)=>{
    return curElem.category===category;
  });
  setMenuData(updatedList);
};
  return (
    
    <>
     {/* <main className='column'>
          <h1>Auth0</h1>
          <LoginButton/>
          <LogoutButton/>

         </main> */}
         <center>

      <Navbar filterItem={filterItem} menuList={menuList}/>
         </center>
   
      <Menucard  menuData={menuData} />
   
   
    </>
    

  );
};
 