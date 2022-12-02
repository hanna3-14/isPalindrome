function isPalindrome(x) {

	while (x.length >= 1) {
		if (x[0].toUpperCase() != x[x.length - 1].toUpperCase()) {
			return false;
		}
		x = x.slice(1, x.length - 1)
		console.log(x)
	}
	return true;
}
