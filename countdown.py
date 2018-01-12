def countdown(num):
	arr = []
	num = num
	while num >= 0:
		arr.append(num)
		num = num - 1

	print "The array is", len(arr), "values long."

	return arr

print countdown(8)

# Challenge: Create a function that accepts a number as an input. Return a new array that counts down by one, from the number down to 0. How long is this array?