// function delay(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve()
//         },100)
//     })
// }

// async function syncTask(currentTime,time){
//     await delay()

//     var time1 = new Date().getTime() - currentTime

//     if(time1 > 4000 || time1 === 4000)return

//     return syncTask(currentTime,time)
// }
    
// console.log(1)

// syncTask(new Date().getTime(),4000)

// console.log(2)