[ 2, 3, 6, 78, 99, 104, 23 ].reduce(function(accum, currNum) {
	return Math.max(accum, currNum);
});
//The Math.max() function returns the largest of the numbers given 
//as input parameters, or -Infinity if there are no parameters.

//re-writing abouve as an Arrow Funtion Expression
[ 2, 3, 6, 78, 99, 104, 23 ].reduce((accum, currNum) => {
   return Math.max(accum, currNum)
})