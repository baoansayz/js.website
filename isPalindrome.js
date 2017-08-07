function isPalindrome(){
	a = prompt("Enter string:");
	temp = a.toLowerCase();
	length = a.length;
	for (i = 0; i < length; i++)
	{
		if(temp.charAt(i) != temp.charAt(length-1))
			return false
		else{
			length--;
			continue;
		}
	}

	return true;
}

