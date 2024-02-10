import React from "react";

function StartSlow(props){
    const planS = () =>{
        props.actions.planS()
    }
    const horariosInfo = () =>{
        props.actions.horariosInfo()
    }
    const normasGym = () =>{
        window.open('https://drive.google.com/drive/folders/1qiagmCxkG2ykbfuCh8YRPvW138Yq2iPz?usp=sharing');
    }
    const ubication = () =>{
        window.open('https://maps.app.goo.gl/imnBc8vD3kvJ5xVt8');
    }
    const redesSociales = () =>{
        props.actions.redesSociales()
    }
    return(
        <div>
            <button className="start-btn" onClick={()=> planS()}>PLANES</button>
            <button className="start-btn" onClick={()=> horariosInfo()}>HORARIOS</button>
            <button className="start-btn" onClick={() => ubication()}>UBICACIÓN</button>
            <button className="start-btn" onClick={() => redesSociales()}>REDES SOCIALES</button>
            <button className="start-btn" onClick={() => normasGym()}>DESCARGAR APK</button>
        </div>
    )
}
export default StartSlow;