import React from "react";

function plansBtn(props){
    const planSmart = ()=>{
        props.actions.planSmart();
    }
    const planBlack = () =>{
        props.actions.planBlack();
    }
    return(
        <div>
            <button className="start-btn" onClick={()=> planSmart()}>PLAN SMART</button>
            <button className="start-btn" onClick={()=> planBlack()}>PLAN BLACK</button>
        </div>
    )
}
export default plansBtn;