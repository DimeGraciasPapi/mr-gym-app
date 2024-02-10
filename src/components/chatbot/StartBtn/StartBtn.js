import React from "react";


function StartBtn(props){
    const initialAction = () =>{
        props.actions.initialAction();
    }
    return(
        <div>
            <button className="start-btn" onClick={()=> initialAction()}><div>
  <p>🚀 ¿Estás listo para el cambio? (¡Toca aquí!)</p>
</div>
</button>
        </div>
    )
}
export default StartBtn;