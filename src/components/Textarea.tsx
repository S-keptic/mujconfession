import React from "react";
import './Textarea.css'

const textContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
  };
  
  const areaStyle: React.CSSProperties = {
    padding: 0,
    width: '80vh',
    height: '50vh',
    backgroundColor: 'black',
    border: '4px solid orange',
    borderRadius: '8px',
    color: 'rgb(244, 244, 244)',
    fontSize: 'large',
    fontFamily: "'Raleway', sans-serif",
  };
  
const Textarea = ()=>{
return(
    
    
    <>
    <div className="text-container" style={textContainerStyle}>
        <textarea className="area" style={areaStyle}>hidada</textarea>
    </div>
    </>
)


}

export default Textarea