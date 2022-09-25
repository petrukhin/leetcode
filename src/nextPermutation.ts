import { swap } from "./utils/swap";

const nextPermutation = (nums: number[]): void => {
    const { length } = nums
    let i = length - 2

    while (i >= 0 && nums[i] >= nums[i + 1]) { 
        i--;
    }

    if (i >= 0) {
        let j = length - 1;
        while(nums[j] <= nums[i]) {
            j--;
        }
        swap(nums, i, j)
    }

    reverse(nums, i + 1, length - 1) // 
}

const reverse = <T>(arr: T[], left: number, right: number) => {
    while (left < right) {
        swap(arr, left, right);
        left++;
        right--;
    }
}

const nums = [1, 5, 1]
nextPermutation(nums)
console.log(nums)