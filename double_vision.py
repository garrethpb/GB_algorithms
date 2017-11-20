arr = [4,7,13,55]

def double_array(array):
	for i in range(0,len(array)):
		array[i] = array[i] * 2
	return array

print double_array(arr)





# Challenge: create a function that takes an array as an argument and doubles all numbers in array, returning a new array.