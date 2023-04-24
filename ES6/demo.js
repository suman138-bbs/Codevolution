// Any var declaration going to the top of the Function

// let have no hoisting and block scope

//////////////////////////////////
// for (var i = 0; i < 5; i++){
//     setTimeout(function () {
//         console.log(i)
//     },1000)
// }

//////////////////////////////////////

// const ob1 = {
//     name:"Suman"
// }

// ob1.name = "Bhandari in India"
// console.log(ob1.name)

//////////////////////////////////////////////////

const ob1 = [{
    id: 1,
    name:"Suman"
      
},
{
    id: 2,
    name:"Bhandari"
      
},{
    id: 1,
    name:"chhatri"
      
}]


// const ob=ob1.map((o)=>o.id==1?{...o,id:2}:o)

// console.log(ob)


const ob=ob1.filter((o)=>o.id!==1)
console.log(ob)
