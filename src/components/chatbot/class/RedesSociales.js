import React from "react";

function redesSociales(props){
    const whatssap = ()=>{
        window.open('https://wa.link/qmaaay')
    }
    const facebook = () =>{
        window.open('https://www.facebook.com/mistergymhuancayo')
    }
    return(
        <div>
            <button className="start-btn" onClick={()=> whatssap()}>Whatsaap</button>
            <button className="start-btn" onClick={()=> facebook()}>Facebook</button>
        </div>
    )
}
export default redesSociales;