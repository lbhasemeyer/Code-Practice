//find the longest substring in a given string that is composed of any two unique repeating characters
//Ex. in an input string "aabadefghaabbaagad", the longest such string is "aabbaa"
function findLongestSubstring(string) {
	let longestSubstring = '';
	let newSubstring = '';
	let firstLetter = null;
	let secondLetter = null;
	let splitString = string.split('');
	splitString.forEach(function(letter, index) {
		if(firstLetter === null){
			firstLetter = letter;
		} else if(secondLetter === null && firstLetter !== letter){
			secondLetter = letter;
		} else if(letter !== firstLetter && letter !== secondLetter) {
			if(newSubstring.length >= longestSubstring.length){
				longestSubstring = newSubstring;
			}
			newSubstring = '';
			firstLetter = splitString[index-1];
			if(letter !== splitString[index-1]){
				secondLetter = letter;
			} else {
				secondLetter = null;
			}
			let subtractFromIndex = 2;
			while (splitString[index-1] === splitString[index-subtractFromIndex]) {
				subtractFromIndex--;
				newSubstring += splitString[index-1];
			}
		}
		newSubstring += letter;
	});
	return longestSubstring;
}

console.log(findLongestSubstring('kaabadefghaabbaagad'));