import React from 'react'
// import LoginButton from './LoginButton';
// import LogoutButton from './Logout';

const Navbar = ({filterItem,menuList}) => {


  console.log("Jiya More"+menuList)

  return (
    <>
    
    <nav className='navbar-old'>
        <div className='btn-group'>
         {
            menuList.map((curElem)=>{
              
                {/* <button
        className="btn-group__item"
        onClick={()=> filterItem(curElem)}>{curElem}</button>  */}
        return <button
        className="btn-group__item"
        onClick={()=> filterItem(curElem)}>{curElem}</button>
        
            })
            
        } 
        {/* <LoginButton/>
        <LogoutButton/> */}
        </div>
    </nav>
    

    </>
  )
}

export default Navbar



// import React from 'react'

// function navbar({filterItem,menuList}) {
//   return (
//         <>
//             <nav className='navbar'>
//          <div className='btn-group'>
//         {
//             menuList.map((curElem)=>{
//                 <button
//         className="btn-group__item"
//          onClick={()=> filterItem(curElem)}>{curElem}</button>
//             })
//        }
        
//         </div>     </nav>


//     </>
//   )
// }

// export default navbar