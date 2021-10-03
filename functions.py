class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        count = 1
        while count < len(nums):
            if nums[count] == nums[count - 1]:
                nums.remove(nums[count])
            else:
                count += 1
        return len(nums)
