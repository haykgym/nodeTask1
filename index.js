 //////1.

//  const number = +prompt("enter a number");

//  const interval1 = [3,4,5];
//  const interval2 = [8,9,10,11,12];

//  console.log((interval1.indexOf(number)=== -1 && interval2.indexOf(number) === -1)? 2 : 1);

/////2.

//  const numbers = [];

//  for(let i = 1; i < 4; i++){
//     let number = +prompt('Enter a number');
//     numbers.push(number);
//  };

// alert(`Max value is ${Math.max(...numbers)}`);

//////3.

//  const numbers = [];

//  for(let i = 1; i < 5; i++){
//     let number = +prompt('Enter a number');
//     numbers.push(number);
//  };

// alert(`Min value is ${Math.min(...numbers)}`);

/////4.

//  const numbers = [];

//  for(let i = 1; i < 5; i++){
//     let number = +prompt('Enter a number');
//     numbers.push(number);
//  };

// alert(`Max value is ${Math.max(...numbers)}`);

/////5.

// const a = +prompt("Enter 1st side");
// const b = +prompt("Enter 2nd side");
// const c = +prompt("Enter 3th side");

// if(a+b > c && a+c > b && b+c > a){
//     alert('yes');
// }else alert('no');


////6.

// const a = +prompt("Enter 1st side");
// const b = +prompt("Enter 2nd side");
// const c = +prompt("Enter 3th side");

// if(a===b || a===c  || b===c){
//     alert('yes');
// }else alert('no');


/////7.

// const point = [];

// point[0] = +prompt("Enter X");
// point[1] = +prompt("Enter Y");

// if(point[0] > 0 && point[1] > 0) ){
//     alert('yes');
// }else alert('no');


/////8.

// const point = [];

// point[0] = +prompt("Enter X");
// point[1] = +prompt("Enter Y");

// if(point[0] > 0 && point[1] > 0){
//     alert('1st quarter');
// }else if(point[0] > 0 && point[1] < 0){
//     alert('2nd quarter');
// }else if(point[0] < 0 && point[1] < 0){
//     alert('3nd quarter');
// }else if(point[0] < 0 && point[1] > 0){
//     alert('4th quarter');
// }else alert("Point is not at any quarter");

//////9.

// const numbers = [];

// for(let i =1; i < 4; i++){
//     numbers.push(+prompt("Enter a number"));
// }

// alert(numbers.indexOf(1) === -1 ? "0" : "1");
 

//////10.

// const numbers = [];

// for(let i =1; i < 4; i++){
//     numbers.push(+prompt("Enter a number"));
// }

// alert(numbers.filter(number => number < 0).length);

//////11.

// const numbers = [];

// for(let i =1; i < 4; i++){
//     numbers.push(+prompt("Enter a number"));
// }

// alert((numbers.filter(number => number === 2).length) === 2 ? 2: 0);

//////12.

// const numbers = [];

// for(let i =1; i < 4; i++){
//     numbers.push(+prompt("Enter a number"));
// }

// alert((numbers.filter(number => number % 2 === 0).length) > 0 ? "yes": "no");

//////13.

// const numbers = [];

// for(let i =1; i < 4; i++){
//     numbers.push(+prompt("Enter a number"));
// }

// numbers.sort((a,b) => a - b);

//////14.

// const numbers = [];

// for(let i =1; i < 4; i++){
//     numbers.push(+prompt("Enter a number"));
// }

// numbers.sort((a,b) => b - a);

//////15.

// const numbers = [];

// for(let i =1; i < 5; i++){
//     numbers.push(+prompt("Enter a number"));
// }

// numbers.sort((a,b) => a - b);


//////16.

// const numbers = [];

// for(let i =1; i < 5; i++){
//     numbers.push(+prompt("Enter a number"));
// }

// numbers.sort((a,b) => b - a);


//////17.

// const numbers = [];

// for(let i =1; i < 5; i++){
//     numbers.push(+prompt("Enter a number"));
// }

// alert((numbers.filter(number => number === 1).length) > 0 ? 1: 2);

//////18.

// const numbers = [];

// for(let i =1; i < 5; i++){
//     numbers.push(+prompt("Enter a number"));
// }

// alert((numbers.filter(number => number % 2 !== 0).length) > 0 ? 1: 2);

//////19.

// const numbers = [];

// for(let i =1; i < 5; i++){
//     numbers.push(+prompt("Enter a number"));
// }

// alert(numbers.filter(number => number > 0).length);


//////20.

// const number = prompt("Enter a number").split("");

// alert((+number[0] === +number[1] + +number[2]) ? "yes" : "no");


//////21.

// const number = prompt("Enter a number").split("");

// switch(number.length){
//     case 2: alert(2);
//         break;
    
//     case 3: alert(3);
//         break;
    
//     default: alert(0);
// }


//////22.

// const number = prompt("Enter a number");

// if((number[0] !== number[1]) && (number[0] !== number[2]) && (number[1] !== number[2])){
//     alert("no");
// }else alert("yes");

//////23.

// const number = String(+prompt("Enter a number")).split("");

// alert((number.reduce((aggr,val) => +aggr + +val)) % 2 === 0 ? 1 : 0);

//////24.

// const number = +prompt("Enter a number");

// if(number > 500){
//     const sum = String(number).split("").reduce((aggr,val) => +aggr + +val);
//     alert(number / Number(sum));
// }else{
//     alert((String(number)[0]) / number);
// }

//////25.

// const number = +prompt("Enter a number");

// const result = Math.max(...(String(number).split("")));

// alert(+result);

//////26.

// const number = +prompt("Enter a number");

// const result = Math.min(...(String(number).split("")));

// alert(+result);

//////27.

// const number = +prompt("Enter a number");

// if(+(String(number)[0]) > +(String(number)[1])){
//     const sum = String(number).split("").reduce((aggr,val) => +aggr + +val);
//     alert(sum / number);
// }else alert(number);

//////28.

// const number = +prompt("Enter a number");

// if(+(String(number)[0]) + +(String(number)[1]) === +(String(number)[2]) + +(String(number)[3]) ){
//     alert("yes")
// }else alert("no");


//////29.

// const number = +prompt("Enter a number");

// if(number < 5000){
//     const sum = +String(number)[0] + +String(number)[3];
//     alert(number / sum);
// }else alert(number);


//////30.

// const number = +prompt("Enter a number");

// alert(String(number).indexOf("1") !== -1 ? 1 : 0);

//////31.

// const number = +prompt("Enter a number");

// alert(+String(number)[0] + +String(number)[1] === 5 ? 'yes' : "no");

//////32.

// const number = +prompt("Enter a number");

// const sum = String(number).split("").reduce((aggr,val) => +aggr + +val);

// alert(number === Math.pow(sum,2) ? "yes": "no");

//////33.

// const number = +prompt("Enter a number");

// const sum = String(number).split("").reduce((aggr,val) => +aggr + +val);

// alert((sum >= 10 && sum <=20) ? "1" : "0");
