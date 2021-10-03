var removeDuplicates = function (nums) {
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] == nums[i - 1]) {
			nums.splice(i - 1, 1);
			i--;
		}
	}
	return nums.length;
};

// go through an array and compare prev with next, if they are equal -> remove previous, if not -> keep going
// second idea is check if number = index+1 and if not -> remove the number from an array
