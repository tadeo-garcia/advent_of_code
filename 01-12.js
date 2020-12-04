// import {nums} from "./01-12-data";
let nums = require("./01-12-data");

console.log(nums)

function twoNumSum(numbers, target){
  let hash = {};
  for(let num of numbers){
    let potentialMatch = target - num;
    if(potentialMatch in hash){
      // console.log([potentialMatch* num])
      return [potentialMatch, num]
    } else {
      hash[num] = true;
    }
  }
  return [];
}

function twoNumberSum(array, targetSum) {
	array.sort((a,b)=>a-b);
	let l = 0;
	let r = array.length - 1;
	while (l < r){
		const currentSum = array[l] + array[r];
		if(currentSum === targetSum){
      // console.log(array[l], array[r])
			return [array[l], array[r]];
		} else if(currentSum < targetSum){
			l++;
		} else if (currentSum > targetSum){
			r--;
		}
	}
	return [];

}

// twoNumberSum(nums,2020)

// twoNumSum(nums, 2020)

function threeNumberSum(array, targetSum){
  array.sort((a,b)=> a-b);
  let trips = [];
  for (let i = 0; i<array.length-2;i++){
    let left = i+1
    let right = array.length-1;
    while(left<right){
      let currentSum = array[i] + array[left] + array[right];
      if(currentSum===targetSum){
        trips.push([array[i], array[left], array[right]])
        console.log(array[i]* array[left]* array[right])
        left +=1;
        right -=1;
      }else if (currentSum < targetSum){
        left+=1
      }else if (currentSum > targetSum){
        right-=1
      } 
    }
  }

  return trips;
}

// threeNumberSum(nums, 2020)