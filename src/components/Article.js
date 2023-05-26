import React from "react";

function Article({title, date="January 1, 1970", preview, minutes}){
    let coffee = []
    let bento =[]
    if(minutes < 30){
        for(let i=0;i< Math.round(minutes/5);i++){
            coffee.push("☕️")
        }
        
    }else{
        for(let i=0;i< Math.round(minutes/10);i++){
            bento.push("🍱")
        }
    }
    // console.log(coffee)
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} • &nbsp;
            {
            minutes < 30 ? 
            // 
            coffee.map(item=>item)
            :
            bento.map(item=>item)
            }
            &nbsp;
            {minutes}
            &nbsp; min read
            </small>
            <p>{preview}</p>
        </article>
    )
}


export default Article