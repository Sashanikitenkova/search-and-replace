// Search and Replace
// Perform a search and replace the sentence using the arguments provided and return the new sentence.

// The first argument is the sentence to perform the search and replace on.
// The second argument is the word that you will be replacing (before).
// The third argument is what you will be replacing the second argument with (after).
// NOTE: Preserve the case of the original word when you are replacing it.

// For example, if you mean to replace the word "Book" with the word "dog", it should be replaced with "Dog"

// function myReplace(str, before, after) {
//   return str;
// }
// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// define takes 3 strings parameter
// transform the string to an array using string methods
// for loop to itterate through the array
// condition to check if the given word has a match in the array
// condition to check if the first letter is capital
// true replace the word with the new word starting with capital letter
// false replase the word with the new word
// return a string using array method

function myReplace(str, before, after) {

    let strArr = str.trim().split(' ');

    for (let i = 0; i < strArr.length; i++) {
        if(strArr[i].toLowerCase() === before.toLowerCase()) {
            if(strArr[i][0] === strArr[i][0].toUpperCase()) {
                strArr[i] = after[0].toUpperCase() + after.slice(1);
            } else {
                strArr[i] = after;
            }
        }    
    }

    return strArr.join(' ');
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));


// indexi      condition 1st     condition 2nd     result   
// 0             arr[0]= A         false           "A quick brown fox jumped over the lazy dog  
// 1             arr[0]= quick     false            "A quick brown fox jumped over the lazy dog
// 2             arr[0]=  brown     false           "A quick brown fox jumped over the lazy dog
// 3             arr[0]= jumped     true            A quick brown fox leaped over the lazy dog

