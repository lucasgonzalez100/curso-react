import React, { useEffect, useState  } from "react";  
  

const Reandering = ()=>{
    const [espera, setEspera] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setEspera(false);
        },5000);
    });
  
    return (
   
        <div>
            {espera ? <h2>cargando ...</h2> : <h3>Cargado !!</h3> }
        </div>
    )

}

export default Reandering;