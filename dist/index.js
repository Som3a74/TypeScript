"use strict";
// ///////////////////////Types
// let x =10;
// let num2      :number                        =11;
// let str       :string                        ='Ahmed';
// let bool      :boolean                       =true;
// let arr_Num   :number[]                      =[1,2,3];
// let arr_Str   :string[]                      =['1','2','3'];
// let arr_Tuple :[number ,string]              =[1,'Ahmed'];
// let arr_Origin:(string | number | boolean)[] =[1,'Ahmed',true];
// let num3      :(number | string)             = 1;
// ////////////////////////////////////function
// function fun_x (x:number , y:string) : string {
//     return y ;
// }
// fun_x(3,'ahmed')
// const fun_x = (x:number , y:string) : number =>  {
//     return x ;
// }
// fun_x(3,'ahmed')
// ///////////////////Interface
// interface Person {
//     name : string;
//     age? : number;
//     year : number | string; 
// };
// interface Person2 {
//     work : boolean;
// };
// let x : Person2 & Person ; 
// x = { 
//     name:'ahmed',
//     age : 22,
//     year:'2002',
//     work : true
// } 
// ////////////////////////Type
// type User = {
//     name: string;
//     age?: number;
//     year: number | string;
// };
// let x: User;
// x = {
//     name: 'ahmed',
//     age: 22,
//     year: '2002'
// } 
// /////////////////////Class
// class Car {
//     name: string;
//     year: number;
//     constructor( name: string , year: number) {
//         this.name = name;
//         this.year = year;
//     }
//     getSalary(): number {
//         return 10000;
//     }
// }
// const car1 = new Car('BMW' , 2002)
// /////////////////////Generics
// function fun_sum<Generics>(num1:Generics) :Generics {
//     return num1
// }
// console.log(fun_sum(100))
// console.log(fun_sum<number>(100))
// console.log(fun_sum('Ahmed'))
// class User<T , U> { // you can add multiple Generics
//     name: T;
//     age: U;
//     constructor(name: T , age : U) {
//         this.name = name
//         this.age = age
//     }
// }
// let user1 = new User('Ahmed' , 20) // look you can switch values but it is not always go 
// let user2 = new User(20 , 'Ahmed')
// console.log(user1)
// console.log(user2)
// /////////////////////////// Utility Types
// interface Person {
//     name: string;
//     age: number;
//     location?: string;
// }
/////////////Omit
// // const User: Omit<Person, 'age' | 'location'> = {
// //     name: 'Ahmed'    // بتحدد ايه الحجات اللي مش عايز تورثها 
// //     // `Omit` has removed age and location from the type and they can't be use here
// // };
//////////////Pick
// // const User: Pick<Person, 'name'> = { //
// //     name: 'Ahmed'
// //     // بتحدد ايه الحجات اللي عايز تورثها 
// //     // `Pick` has only kept name, so age and location were removed from the type and they can't be use here
// // };
/////////////Partial
// // let User: Partial<Person> = { 
// //     name: 'Ahmed',
// //     age: 22 ,
// //     // كل حاجه بقت موجوده في ال انتيرفيس بقت اخياريىتستخدمها
// //     // `Partial` allows name and age and location to be optional
// // };
//////////////Required
// // let User: Required<Person> = {
// //     name: 'Ahmed',
// //     age: 22,
// //     location: "Hehia",
// // };
// console.log(User);
///////////////////////////Promise
// const myfunc = () => {
//     return new Promise<number>((resolve , reject)=>{
//         resolve(1)
//     })
// }
// (async function() {
//     let x = await myfunc()
//     return console.log(x);
// }())
