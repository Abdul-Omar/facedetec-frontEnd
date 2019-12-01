import React from 'react';



const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (

        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signout')} className='f3 link dim black white underline pa3 pointer'>Sign Out</p>
        </nav>
      );
    } 
    else  {   

         return(
             <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
  
                 <p  onClick={() => onRouteChange('signin')} className= 'f4 dib black bg-animate hover-bg-white hover-black pointer white no-underline pv2 ph4 br-pill ba b--white-20'>Sign In</p>
                 <p p onClick={() => onRouteChange('register')} className= 'f4 dib black bg-animate hover-bg-white white hover-black pointer no-underline pv2 ph4 br-pill ba b--white-20'>Sign Up</p>
            </nav>
            );
    }
  }


export default Navigation;