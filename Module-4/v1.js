// Problem Statement

// Implement a simple in-memory cache for an "expensive" function (like a database query or API call)
// The goal is to store the results of a function call so that if the same call is made again
// The result is returned from the cache instead of running the expensive function.

const dataCache = new Map();

const expensiveTask = (id) => {
	console.log("Ran the expensive task for", id);

	return { id: id, data: `Some data for id: ${id}`, timeStamp: new Date().getTime() };
};

const getData = (id) => {
	// If the data exist then return
	if (dataCache.has(id)) {
		console.log("Cache HIT for id", id)
		return dataCache.get(id);
	}
	console.log("Cache MISS for id", id)
	const data = expensiveTask(id);
	dataCache.set(id, data);
	return data;
};

console.log(getData(123))
console.log(getData(123))
console.log(dataCache)