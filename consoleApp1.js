let x = "hello world";
console.log(x+'hi...'); 
console.log("I am safwan");
const addNumber = (x,y) =>{
	return x+y;
}
addNumber(5,6);
console.log(addNumber(5,6));
let arr = [4,5,'safwan','sadi'];
console.log(arr[3]);

let returnString = (arrayName) => {
	for (let i = 0; i <= arrayName.length; i++) {
		if(typeof(arrayName[i]) ==="string"){
			console.log(arrayName[i]);			
		}
	}	
}

returnString(arr);

let array = [10,9,7,8,6,100,1000,800];
array.sort((a,b)=>a-b);
console.log(array); 

function makeMultiplier(multiplier){
	console.log(multiplier);
	return (
		function(x){
		   return multiplier * x;
		}
	);
}
let doubleAll = makeMultiplier(2);
console.log(doubleAll(10));
