const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '6vh',
  };
  
  const buttonStyle: React.CSSProperties = {
    color: 'rgb(22, 17, 16)',
    height: '6vh',
    width: '12vh',
    backgroundColor: 'orange',
    fontSize: 'larger',
    fontFamily: 'Raleway',
    fontWeight: 900,
    border: '4px solid black',
    borderRadius: '9px',
    cursor: 'pointer',
  };
  
  function Button() {
    return (
      <div className="button-container" style={buttonContainerStyle}>
        <button className="btn" style={buttonStyle}>Submit</button>
      </div>
    );
  }

  export default Button