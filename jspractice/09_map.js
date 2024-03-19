const map = new Map()
map.set('IN','India');
map.set('USA','United States of America');
map.set('Fr','France');
map.set('IN','India');

console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key,value] of map) {
    console.log(key,":::",value);
}

const myObj = {
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:'swift by apple'
}

for(const key in myObj){
    console.log(`${key} shortcut is for ${myObj[key]}`)
}

const coding = ["js","ruby","java","python","cpp"];

coding.forEach(function(val){
    console.log(val);
})
coding.forEach((val,index,arr)=>{
    console.log(val,index,arr);
})

function printMe(item){
    console.log(item);
}

coding.forEach(printMe);


const myNums = [1,2,3,4,5,6,7];

const newNums = myNums.map((num)=> num+10);
console.log(newNums);

const newNums2 = myNums
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num>=40)

console.log(newNums2);