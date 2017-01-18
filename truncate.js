// Create a Function called truncateWords() that accepts a string and number of words to return
var truncateWords = function(longText, numWords){
// 1. Use the split() function to split the String into an Array, this splits on spaces making the sentence into a list
    var array = longText.split(" ");
// 2. Use the length attribute to find the number of words in the Array, counts the number of items in array
    var length = array.length; 
// 3. Determine how many words should be removed from the String, subtract the wordlimit from the array length we just found
    var numWords = length - wordLimit;
// 4. Use splice to remove those words from the Array and...
// 5. Add an additional String item to the Array to put an ellipses in: "..."
    array.splice (wordLimit, numWords, "...");
// 6. Use the join() function to convert the Array back into a String
    var shortText = array.join(" ");
// 7. Return the truncated String from the Function
    return shortText;
}
// Us the function on this sample text
var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;
var shortText = truncateWords(originalText, wordLimit);
console.log('originalText: ' + originalText);
console.log('shortText: ' + shortText);
