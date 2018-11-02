//find the longest substring in a given string that is composed of any two unique repeating characters
function findLongestSubstring(string) {
	let longestSubstring = '';
	let newSubstring = '';
	let firstLetter = null;
	let secondLetter = null;
	let splitString = string.split('');
	splitString.forEach(function(letter, index) {
		if(firstLetter === null){
			firstLetter = letter;
		} else if(secondLetter === null){
			secondLetter = letter;
		} else if(letter !== firstLetter && letter !== secondLetter) {
			newSubstring = '';
			firstLetter = splitString[index-1];
			secondLetter = letter;
			let indexToUse = 2;
			while(firstLetter === splitString[index-indexToUse]) {
				newSubstring += firstLetter;
				indexToUse++
			}
			newSubstring += firstLetter;
		}
		newSubstring += letter;
		if(newSubstring.length >= longestSubstring.length){
			longestSubstring = newSubstring;
		}
	});
	return longestSubstring;
}

module.exports = findLongestSubstring;