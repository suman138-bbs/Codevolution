/**
 * Basics
 */

// let username:string = "Suman Bhandari"
// console.log(username)

// let a:number = 12
// let b: string | number;
// let c: number = 2
// b=2
// console.log(a/b)


// let stringArr:string[] = ['one', 'two', 'three']

// let giutars=['start',3565]

// let mixedData = ['EVH', true]

// stringArr.push('hey')


// Tuple

// let myTuple: [string, number, boolean] = ["suman", 22, true]


// interface Guitarist  {
//     name: string,
//     active?: boolean,
//     albums:(string | number)[]
// }

// let evh: Guitarist = {
//     name: 'Eddle',
//     active: false,
//     albums:[2]
// }

// Type
// type stringorNum = string | number;

// type stringornumarr = (string | number)[]

// interface Guitarist  {
//     name?: string,
//     active: boolean,
//     albums:stringornumarr
// }

// let ob: Guitarist = {
//     name: "Suman",
//     active: true,
//     albums:[1,2,3,"Five"]
// }

// console.log(ob.active)


// let username: 'Dave' | 'John' | 'Any'

// username = 'Any'


// Functions

const add = (a: number, b: number):number=>{
    return a + b;
}

const logmsg = (message: any): void => {
    console.log(message)
}

console.log(add(2,3)) 
logmsg("Suman Bhandari")