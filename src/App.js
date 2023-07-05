
import Resturant from './NewComponent/Basic/Resturant';
import NavbarTopNew from './NewComponent/Basic/NavbarTop';
import logo from './logo.svg';
// import LoginButton from './NewComponent/Basic/LoginButton';
// import LogoutButton from './NewComponent/Basic/Logout';

                
function App() {
  return (
    
         <>
         <NavbarTopNew/>
         {/* <main className='column'>
          <h1>Auth0</h1>
          <LoginButton/>
          <LogoutButton/>

         </main> */}
          <Resturant/>
          
          
         </>
   
  );
}

export default App;
