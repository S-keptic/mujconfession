import React from 'react';
import  './Body.css'

const myComponentStyle: React.CSSProperties = {
    textAlign: 'center',
    marginTop: '-20px',
    fontSize: 'x-large'
  };
  



const Body = ()=>{
return(<>
<div className='para-container' style={myComponentStyle}>
<p className='para' >Confess your sins in complete anonymity.</p>
</div>

</>)



}

export default Body


