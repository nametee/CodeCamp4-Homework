const numberSortAsc = (a, b) => a - b;
const numberSortDes = (a, b) => b - a;
const oddFilter = (ele) => (ele % 2)!==0;
const evenFilter = (ele) => (ele % 2)===0;

// No.1 จงสร้าง array ให้ได้แบบนี้ {0,1,2,3,4,5,6,7,8,9,10}, แล้วก็เอาเลขคู่ออกทั้งหมดจนเป็นแบบนี้ {1,3,5,7,9}
let listNumber1 = [0,1,2,3,4,5,6,7,8,9,10];  
console.log(listNumber1.filter(oddFilter));
//////////////////////////////////////////////////////////////

// No.2 จงสร้าง array {0,9,1,8,2,7,3,6,4,5} แล้ว sort จากน้อยไปมาก
let listNumber2 = [0,9,1,8,2,7,3,6,4,5];  
//console.log(listNumber2.sort(numberSortAsc));
const sortAsc = (array) =>{  
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < array.length; i++) { 
            if (array[i] > array[i + 1]) {
                let tmp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = tmp;
                swapped = true; 
            }
        }
    } while (swapped);
    return array;
}; 
console.log(sortAsc(listNumber2));
//////////////////////////////////////////////////////////////

// No.3 จงสร้าง array ให้ได้แบบนี้ {0,1,2,3,4,5,6,7,8,9,10} 
// แล้วก็เอาเลขคู่ออกทั้งหมดจนเป็นแบบนี้ {1,3,5,7,9} แต่รอบนี้ทำโดยการใช้ for loop หรือ while
let listNumber3 = [0,1,2,3,4,5,6,7,8,9,10];  
const oddNumber = (array) => {
    let odd =[];
    for (let i =0; i< array.length; i++){
        if (array[i] % 2 !==0){
            odd.push(array[i]);
        }
    }
    return odd;
};
console.log(oddNumber(listNumber3));
//////////////////////////////////////////////////////////////

// No.4 จงสร้าง map ที่เก็บชื่อคนเป็นkey และอายุเป็น value {{Adam:28},{Sophie:22},{Aorum,13}}แล้วลองเรียกkeyของแต่ละelement
let mapObj = new Map();
mapObj.set("Adam",38);
mapObj.set("Sophie",22);
mapObj.set("Aorum",13); 
console.log(mapObj.get("Adam"));
console.log(mapObj.get("Sophie"));
console.log(mapObj.get("Aorum"));
//////////////////////////////////////////////////////////////

// No.5 จงสร้าง array {0,9,1,8,2,7,3,6,4,5} แล้ว sort จากมากไปหาน้อย
let listNumber4 = [0,9,1,8,2,7,3,6,4,5];
const sortDes = (array) => {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < array.length; i++) { 
            if (array[i] < array[i + 1]) {
                let tmp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = tmp;
                swapped = true; 
            }
        }
    } while (swapped);
    return array;
};
console.log(sortDes(listNumber4));
//////////////////////////////////////////////////////////////

/*
1. ให้เขียน function ที่รับ Array ของตัวเลข และคืนค่าออกมาเป็น Array ของตัวเลข โดยที่เรียงเลขคู่จากน้อยไปมากก่อน แล้วตามด้วยเลขคี่จากมากไปน้อย
เช่น
------------------------------
Input - [ 1,8,4,7,2,6,9,7 ]
Output - [ 2,4,6,8,9,7,7,1]
------------------------------
Input - [ 9,8,7,6,5,4,3,2,1 ]
Output - [ 2,4,6,8,9,7,5,3,1 ]
------------------------------*/
let listNumber5 =[1,8,4,7,2,6,9,7];
const sortEvenAscOddDes = (array) =>{
    let even = array.sort(numberSortAsc).filter(evenFilter);
    let odd = array.sort(numberSortDes).filter(oddFilter); 
    return even.concat(odd);
};
console.log(sortEvenAscOddDes(listNumber5));

/*
2. ให้เขียน Function ที่รับ Array ของตัวเลข และคืนค่าออกมาเป็น มัธยฐาน(http://www.stvc.ac.th/elearning/stat/csu2.html)
เช่น
------------------------------
Input - [ 1,2,3,4,5,6,7,8,9 ]
Output - 5
------------------------------
Input - [ 1,2,3,4,5,6,7,8 ]
Output - 4.5
------------------------------
Input - [ 3,4,1,2,5,6,7,8,9 ]
Output - 5
------------------------------
Input - [ 1,4,7,5,8,2,6,3 ]
Output - 4.5
------------------------------*/
let listNumber6 = [1,2,3,4,5,6,7,8,9];
const median = (array)=>{
    let newArray = array.sort(numberSortAsc);
    let indexOfMedian = ((newArray.length +1) / 2) -1;  
    return Math.ceil(indexOfMedian) === Math.floor(indexOfMedian) ? newArray[indexOfMedian] : (newArray[Math.ceil(indexOfMedian)] + newArray[Math.floor(indexOfMedian)]) / 2;
};
console.log(median(listNumber6));

/*
3. ให้เขียนฟังก์ชันที่รับ Array ของตัวเลข และคืนค่าออกมาเป็น Array ที่เรียงลำดับความถี่จากน้อยไปมาก ถ้าความถี่เท่ากันให้เรียงจากมากไปน้อย
------------------------------
Input - [ 4,4,4,7,2,2,2,5,3,3 ]
Output - [ 7,5,3,4,2 ]
------------------------------
Input - [ 1,1,1,2,2,2,2,3,3,4,4,5,5 ]
Output - [ 5,4,3,1,2 ]
------------------------------
Input - [ 9,9,7,7,6,6,7,7,7,9,1,2,3 ]
Output - [ 3,2,1,6,9,7 ]
------------------------------
Input - [ 1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,3,3,3]
Output - [ 3,2,1 ]
------------------------------ (edited) */
let listNumber7 = [1,1,1,2,2,2,2,3,3,4,4,5,5];
const frequency = (array) => { 
    let listFrequency =array.reduce(function(allArray,item){
        allArray[item]=(item in allArray) ? allArray[item]+1 : 1; 
        return allArray;
    },{});  
    return  Object.keys(listFrequency).sort((a,b) =>  listFrequency[a]>listFrequency[b] ? 1 : listFrequency[a]<listFrequency[b] ? -1 :  a>b ? -1 : a<b ? 1 : 0 ).map(Number);
};
console.log(frequency(listNumber7)); 