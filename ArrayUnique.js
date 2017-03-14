/**
 * 数组去重(hash表键值不重复)
 * @param {Array} array Array
 */
function uniqueArray(array) {
	let ret = []
	let hashmap = {}
	var i = 0, length = array.length

	for (; i < length; i++) {
		if (!hashmap.hasOwnProperty(array[i])) {
			hashmap[array[i]] = 1
			ret.push(array[i])
		}
	}
	return ret
}

/**
 * 
 * @param {Array} array 
 */
function uniqueArray2(array) {
	let ret = []
	function de(array){
		var num
		(-1===ret.indexOf(num=array.shift()))?ret.push(num):''
		array.length&&de(array)
	}
	de(array)
	return ret
}

// console.log(uniqueArray([1, 2, 2, 3, 4, 4, 4, 4]))
console.log(uniqueArray2([1,2,2,3,4,'3']))


function curry(fn){
	let args = [].slice.call(arguments)
	let fn = args.shift()
	let args_length = fn.length
	return function(){
		if(arguments.length<args_length){
			return function(){
				
			}
		}
	}
}


function flattenObject(obj){
	var hashmap={}
	for(var i in obj){
		if(!obj.hasOwnProperty(i)){
			continue
		}

		var second = obj[i]

		if(Object.prototype.toString.call(second)==='[object Object]'){
			var child_hashmap = flattenObject(second)
			for(var k in child_hashmap){
				if(!child_hashmap.hasOwnProperty(k)){
					continue
				}
				hashmap[i+'.'+k] = child_hashmap[k]
			}
		}else if(typeof second=='string'){
			hashmap[i]=second
		}
	}
	return hashmap
}