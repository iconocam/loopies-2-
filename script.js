//Part 3: Feeling Loopy
// select more specific data 
let data = ['ID', 'Name', 'Occupation', 'Age'];
console.log(data)
// let nums= [data[2]]  select stuff
// console.log(nums)

// const  array1= [  
//     "42",  
//     'Bruce', 
//     'Knight', 
//     '41' 
// ];
// console.log(array1)

// const array2 = [
//     "57",  
//     'Bob', 
//     'Fry Cook', 
//     '19' 
// ];
// console.log(array2);

// const array3 = [
//     "63",  
//     'Blaine', 
//     'Quiz Master', 
//     '58' 
// ];
// console.log(array3);

// const array4 = [
//     "98",  
//     'Bill', 
//     'Doctors Assistant', 
//     '26' 
// ];
// console.log(array4);


// data.join();
// let completeArray= {ID}; {Name}; {Occupation}; {Age};
// console.log(data)
// console.log(completeArray);



// let a= [array1];
// let b= [array2];
// let c= a.concat(b);
// console.log(c);

let newString = "ID , NAME , OCCUPATION, AGE;\n42, Bruce, Knight, 41 \n57, Bob, Fry Cook, 19 \n63, Blaine, Quiz Master,58 \n98, Bill, Doctor's Assistant, 26"

let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";

let rows = newString.split("\n");

for (let i = 0; i < rows.length; i++){
    let cells = rows[i].split(",");
    console.log(newString);
}

// let whole = (newString);
// console.log(whole);

let newString2 = "Index, Mass (kg), Spring 1 (m), Spring 2 (m);\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

newString2[0]="Index";
console.log(newString2)
let cell5 = "";
let cell6 = "";
let cell7 = "";
let cell8 = "";

let rows2 = newString2.split("\n");

for (let i = 0; i < rows2.length; i++) {

    let cells = rows2[i].split(","); 
    cell1 += cells[5] + " "; 
    cell2 += cells[6] + " "; 
    cell3 += cells[7] + " ";
    cell4 += cells[8] + " ";
    console.log(cells);
}
let united= newString2.concat(',\n'+ newString);
console.log(united);

const parentArray = [
    newString ];
    

console.log(parentArray);


const parentArray2 = [
    newString2
];


console.log(parentArray2);

const joinedArray = [...parentArray, ...parentArray2];

console.log(joinedArray);


// console.log(united);

const object = {
    arrayA:"ID , NAME , OCCUPATION, AGE;\n42, Bruce, Knight, 41 \n57, Bob, Fry Cook, 19 \n63, Blaine, Quiz Master,58 \n98, Bill, Doctor's Assistant, 26",
    arrayB: "Index, Mass (kg), Spring 1 (m), Spring 2 (m);\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

    

};
console.log(object)
console.log(object.arrayB);
console.log(object.arrayA);

//key 1 and 2 for referencing the data

let arrayA ="ID , NAME , OCCUPATION, AGE;\n42, Bruce, Knight, 41 \n57, Bob, Fry Cook, 19 \n63, Blaine, Quiz Master,58 \n98, Bill, Doctor's Assistant, 26".toLowerCase();
console.log(arrayA);

let arrayB= "Index, Mass (kg), Spring 1 (m), Spring 2 (m);\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232".toLowerCase();
console.log(arrayB);

console.log('i did so much but it repo broke :|');

//put them to lowercase so far

//putting them back in array in original order

let arrayNew= [ arrayA , arrayB

]

console.log(arrayNew);

let Barry= {id: "48", name: "Barry", occupation: "Runner", Age: "25"};
arrayNew.splice(1,0,Barry);

console.log(arrayNew);

let bilbo=({id: "7", name: "Bilbo", occupation: "None", age: "111"});
arrayNew.push(bilbo);
console.log(arrayNew);

// i can't figure out how to put bilbo in array 1 at the end, he's in the wrong house and we cant kick him out. (0,1) is confusing to me still

//tried to push bilbo to end of first array
// arrayNew.push({id: "7", name: "Bilbo", occupation: "None", age: "111"} );
// console.log(arrayNew);

// // it says it removed 6? I'm so confused
// let removed= keyA.slice(-1);
// console.log(removed);

// it says it removed 6? I'm so confused
// let fruit = ['apple', 'orange', 'banana', 'tomato'];
// let popped = fruit.pop();

// console.log(popped); // "tomato"
// console.log(fruit); // ["apple", "orange", "banana"]

// using example from page because i couldnt get mine to work

let exArray= [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

console.log(exArray);


    function calculateSum(exArray){
        let sum=0
    
    for (let i=0; exArray.length; i++) {
        sum += exArray[i];
    }
    return sum / exArray.length;
    }
    const exArray2=[41, 25, 19, 58, 111];
    const result= calculateSum(exArray)
    console.log(result);