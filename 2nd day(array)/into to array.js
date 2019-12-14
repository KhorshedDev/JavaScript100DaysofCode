//array is define by [] brackets ;

let exampleArray=[]

//Array hold a list of data that is valuate in javascript;

let shopingList = ['bag', 5,true,null,[1,2,3,4]] //it's a example of a array that hold all data type;


//Array can be hold object that is our next day topic;

let object = ['hello',13,3,4.5]


///you can use length mathod to know how many array items hold it;

let bojectLength= object.length;


//you can use get data  from a array using it's index;


let objectFirstItem = object[0] //array index start with zero index;


//arrry use some mathod;;

let newArray=[1,2,3,4,5,6];


newArray.push(7); //used for add a item in the end of a array;

newArray.pop(); //used for delete last item;

newArray.shift() ///used to delete first item;

newArray.unshift(0) ///used to add a item before array;

//you can reverse a array using reverse mathod;;

newArray.reverse();

//you can join to array using concat mathod;

let conCatArray= newArray.concat(object);


///you can join all idem using join mathod;

let joinArray=newArray.join()


//you can use slice mathod on a array;

let sliceArray= newArray.splice(0,2);

console.log(sliceArray)
console.log(newArray)

//is array fuction return a bolean value;

let isArray =  Array.isArray(newArray);
console.log(isArray)


/// filter use for filtaring array

let  exArray = [1,2,3,4,5,6,7,8,9,10]


let evenArray=exArray.filter(iseven);

function iseven(value){
     if (value % 2 !== 0) {
     	return value;
     }
}

console.log(evenArray);


// find() use for fined  only one item ;


let  oddArray = [2,4,6,7,8,10]

let isThereAnyEven = oddArray.find(iseven);

console.log(isThereAnyEven);


//findindex use to find index number;

let isindexOf = oddArray.findIndex((value)=>{
	if (value==10) {
		return value;
	}
})

console.log(isindexOf);

//inclodes() use for chack a item ;


let isIncludes = oddArray.includes(7);

console.log(isIncludes);

//indexOf() use to find a item index;

let indexOf = oddArray.indexOf(7);

console.log(indexOf);


//lastIndexOf used to know a item last position;

let myNumber =[ 0,1,2,3,4,3,4,5,3,]

let lastIndexOf = myNumber.lastIndexOf(3);

console.log(lastIndexOf);

//map() crate a new array from a array;


let myNewNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

let oddAray = myNewNumber.map(iseven);

console.log(oddAray);

function isodd(value){
	if (value % 2 ==0) { return value;} else {return}
}