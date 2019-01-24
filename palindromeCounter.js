function isPalindrome(str) {
	var reverse = str.split("").reverse().join("");
	return str === reverse;
};

function getCharCounts(chars) {
	var charCounts = {};
	for (var i = 0, charLen = chars.length; i < charLen; i += 1) {
		if  ( charCounts[chars[i]]) {
			charCounts[chars[i]] += 1;;
		} else {
			charCounts[chars[i]] = 1
		} 
	};
	return charCounts;
};

function possiblePalindrome(str) {
	if (isPalindrome(str)) {
		return true;
	}

	var chars = str.split("");
	var charCounts = getCharCounts(chars);
	var oddsCount = 0;

	var charKeys = Object.keys(charCounts);
	for (var i = 0, len = charKeys.length; i < len; i += 1) {
		if (charCounts[charKeys[i]] % 2 === 1) {
			oddsCount += 1;
		}
		if (oddsCount > 1) {
			return false;
		}
	}
	return true;
};

function palindromeCounter(str) {
	str = str.toLowerCase();
	var words = str.split(" ");
	var counter = 0;

	for (var i = 0, len = words.length; i < len; i += 1) {
		if (possiblePalindrome(words[i]) ) {
			counter += 1; 
		}
	}
	return counter;
};





console.log(palindromeCounter("a"), 'a');
console.log(palindromeCounter("ab"), 'ab');
console.log(palindromeCounter("abc DEF G EdE"), "abc DEF G EdE");
console.log(palindromeCounter("lmn opq rst"), 'lmn opq rst');
