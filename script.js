const byteSize = (str) => {
  // write your code here
	return new blob([str]).size;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
