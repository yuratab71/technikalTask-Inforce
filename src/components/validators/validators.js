export const textValidator = (...text) => {
    const arr = [...text];
    
    arr.forEach(el => {
        if (!el) return false; 
    })
    return true;
}

export const numberValidator = (...num) => {
    const nums = [...num];
    console.log(nums)
    nums.forEach(el => {
        if (!Number.isFinite(el) || el <= 0) {
            return false;
        }
    })
    return true;
}