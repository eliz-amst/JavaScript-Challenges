# Challenge: Array Reordering

In this challenge, you are given an unsorted array nums. Your task is to reorder it in-place such that the elements satisfy the condition: nums[0] <= nums[1] >= nums[2] <= nums[3]....

# Example

For example, given the array nums = [3, 5, 2, 1, 6, 4], one possible solution is [1, 6, 2, 5, 3, 4], where:

nums[0] <= nums[1] (1 <= 6)
nums[1] >= nums[2] (6 >= 2)
nums[2] <= nums[3] (2 <= 5)
nums[3] >= nums[4] (5 >= 3)
nums[4] <= nums[5] (3 <= 4)

# Instructions

Your task is to implement a function reorder_array(nums: List[int]) -> None that reorders the elements of the given list nums in-place to satisfy the specified condition. The function should not return anything as it modifies the input list directly.

# Constraints

The length of nums is at most 10^5.
The values in nums are integers.

# Example Usage

python
Copy code
nums = [3, 5, 2, 1, 6, 4]
reorder_array(nums)
print(nums) # Output: [1, 6, 2, 5, 3, 4]
