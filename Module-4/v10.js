//* Insertion Sort

const insertionSort = (arr) => {
	for (let i = 1; i < arr.length; i++) {
		let current = arr[i];
		let j = i - 1;

		while (j >= 0 && arr[j] > current) {
			arr[j + 1] = arr[j];
			j--;
		};
		arr[j + 1] = current;
	};
	return arr;
};

const array = insertionSort([3, 5, 8, 4, 2]);
console.log(array);
//? Expected Output- [ 2, 3, 4, 5, 8 ]