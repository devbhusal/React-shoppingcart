import React from 'react';

const AwesomeButton=(props)=>{

    return (
<>

    <button style={{color:props.color}}>{props.children}</button>
</>

    );
}

export default AwesomeButton;