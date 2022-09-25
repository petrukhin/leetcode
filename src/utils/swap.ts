export const swap = <T>(arr: T[], left: number, right: number): void => {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}