function findVowels (string) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = [];
    let pos = 0;
    for (let i = 0; i < vowels.length; i++) {
        for (let ii = 0; ii < string.length; ii++) {
            if (string[ii] === vowels[i]) {
                count.push(pos);
                pos = pos + 1;
            }
        }
    }
    console.log("There is " + count.length + " vowel.");
}

findVowels ('string')
findVowels ('aaeeeiouu')
findVowels ('ananas')