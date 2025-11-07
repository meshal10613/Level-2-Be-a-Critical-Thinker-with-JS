//* Selection Sort

const selectionSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		let minIndex = i;
		for(let j = i + 1; j < arr.length; j++) {
			if(arr[j] < arr[minIndex]) {
				minIndex = j;
			};
		};

		if(minIndex !== i) {
			//? Swaping
			// let tem = arr[i];
			// arr[i] = arr[minIndex];
			// arr[minIndex] = tem;

			[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
		};
	};
	
	return arr;
};

const sortedArray = selectionSort([5, 3, 8, 4, 2]);
console.log(sortedArray);
//? Expected Output- [ 2, 3, 4, 5, 8 ]