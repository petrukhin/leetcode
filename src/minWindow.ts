function minWindow(s: string, t: string): string {
    let i = 0
    let j = 0
    let start = 0
    let end = 0
    let result = '';

    while(j < s.length) {
        let nextStart = 0
        for (let k = 0; k < t.length; k++) {
            const char = t.charAt(k)

            j = i;

            while (s.charAt(j) !== char && j < s.length) {
                j++;
            }
            nextStart = k === 0 ? j : Math.min(nextStart, j)                    
        }





        if (j < s.length) {
            i = start + 1
            j = i;
        }
    }


    return '';
};


console.log(minWindow('ADOBECODEBANC', 'ABC')); 