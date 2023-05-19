// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.
describe("codeMessage", () => {
    it("takes in a string and returns a string with a coded message.", () => {
        expect(codeMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codeMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codeMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})
// FAIL  ./code-challenges.test.js
// codeMessage
//   ✕ takes in a string and returns a string with a coded message. (1 ms)

// ● codeMessage › takes in a string and returns a string with a coded message.

//   ReferenceError: condeMessage is not defined

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// b) Create the function that makes the test pass.
// Pseudocode:
// Input: A string
// Output: A string containing a coded message with certain characters changed to the appropriate number
// Process:
// Create a function called codeMessage that takes in a string as an argument
// in order to gain access to each character we can split the string into an array and iterate through it using map.
// While iterating through it use a conditional to check if the value is equal to a, e, i, o.
// Since it is case sensitive we can convert each value to a lowercase with the toLowerCase built in method.
// The conditionals will swap out the appropriate characters to numbers.
// We then can return the expected output with join method to revert back to a string. 

const codeMessage = (str) => {
    return str.split("").map((value) => 
                value.toLowerCase() === "a" ?  4
                : value.toLowerCase() === "e" ?  3
                : value.toLowerCase() === "i" ?  1
                : value.toLowerCase() === "o" ?  0
                : value
    ).join("")
}
// PASS  ./code-challenges.test.js
// codeMessage
//   ✓ takes in a string and returns a string with a coded message. (3 ms)


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.
describe("certainWords" , () => {
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
        expect(certainWords(fruitArray, filterLetterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(certainWords(fruitArray, filterLetterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})
// FAIL  ./code-challenges.test.js
// certainWords
//   ✕ takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// ● certainWords › takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

//   ReferenceError: certainWords is not defined

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const filterLetterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const filterLetterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.
// PsuedoCode
// Input: An array of words as well as a single letter
// Output: An new array of words that only contain the specified letter
// Process:
// Create a function called certainWords that takes in an array and a string as arguments
// Since we will be returning a subset of the original array of different length we can iterate with the filter method. 
// As this will be case sensitive we can us the lowercase built in method with the value of each index, as well as the includes method to decide if that value includes the specified 




const certainWords = (arr, str) => {
    return arr.filter(value => value.toLowerCase().includes(str.toLowerCase()) 
    )
}
// PASS  ./code-challenges.test.js
// certainWords
//   ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter. (1 ms)


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
describe("fullHouse", () => {
    it("determines whether or not the array is a full house.", () => {
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
        expect(fullHouse(hand4)).toEqual(true)
    })
})
// FAIL  ./code-challenges.test.js
// fullHouse
//   ✕ determines whether or not the array is a full house.

// ● fullHouse › determines whether or not the array is a full house.

//   ReferenceError: fullHouse is not defined

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.

const fullHouse = (arr) => {
    
}






// Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.