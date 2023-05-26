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
            {minutes}
             &nbsp; min read
            
            </small>
            <p>{preview}</p>
        </article>
    )
}

// function displayCoffee(item,minutes){
  
//         let coffee=[]
//         let total = Math.round(minutes/5)
//         let i =0
//         while(i < total){
//             coffee.push(item)
//         }
//         coffee.map((item)=>{return item})
// }

// function displayBento(item, minutes){
//     let bento = []
//     let total = Math.round(minutes/10)
//     let i = 0
//     while(i < total){
//         bento.push(item)
//     }
//     bento.map((item)=>{return item})
// }


export default Article