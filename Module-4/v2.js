// Problem Statement

// You are given two large arrays, listA & listB. Each array contains user objects.
// A user object is guaranteed to have a unique id property (a string) & may contain other data, such as a name

// Your task is to write an efficient function that take both list as input
// & return the total count of users that present in both lists.

//! Do not change anything in data set up part

//----------- Data setup block -------------//
const USER_COUNT = 50000;
let userA = [];
let userB = [];

const createUser = (id) => {
	return { id: `user_${id}`, name: `User ${id}` };
};

for (let i = 0; i < USER_COUNT; i++) {
	userA.push(createUser(i));
	userB.push(createUser(i + 25000));
};

// users 25000 to 49999 are common (25,000 common users)
//----------- Data setup block -------------//

//---- ALGORITHMS ------//

//! Bad Way
const commonFriendsSlow = (userA, userB) => {
	const startTime = performance.now();
	const commonFrinds = [];

	//!  O(n ^ 2)
	userA.forEach((A) => {
		userB.forEach((B) => {
			if(A.id === B.id) {
				commonFrinds.push(B);
			};
		});
	});  

	const endTime = performance.now();

	return { countUser: commonFrinds.length, timeTookFinish: endTime - startTime };
};

const slowProcess = commonFriendsSlow(userA, userB);
// console.log(slowProcess);

//* Good Way
const commonFriendsFast = (userA, userB) => {
	const startTime = performance.now();
	const commonFrinds = [];

	//* O(n)
	const idListA = new Set(userA.map((user) => user.id));

	//* O(n)
	userB.forEach((B) => {
		//* O(1)
		if(idListA.has(B.id)) {
			commonFrinds.push(B);
		};
	});

	const endTime = performance.now();

	return { countUser: commonFrinds.length, timeTookFinish: endTime - startTime };
};

const fastProcess = commonFriendsFast(userA, userB);
// console.log(fastProcess);