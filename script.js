/*
 * Complete the 'twoStrings' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function twoStrings(s1, s2) {
    let uniqueS1 = [... new Set(s1)];
    let uniqueS2 = [... new Set(s2)];
    
    for(let i = 0; i < uniqueS1.length; i++) {
        if(uniqueS2.includes(uniqueS1[i])) {
            return "YES";
        }
    }

    return "NO";
}
