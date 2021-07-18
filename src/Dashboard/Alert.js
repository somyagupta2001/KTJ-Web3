import React, { useEffect } from 'react';

const Alert = ({classType, msg, removeAlert}) => {
    useEffect(()=>{
        const timeout = setTimeout(() => {
            removeAlert()
        }, 4000);
        return () => clearTimeout(timeout)
    },[])
    
    return ( 
        <p className={`msg ${classType}`}>{msg}</p>
     );
}
 
export default Alert;