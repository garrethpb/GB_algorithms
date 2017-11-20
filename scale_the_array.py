
arr1 = [1,2,3,4,5,6]

def scale_the_array(lst, num):
	for i in range(0,len(lst)):
		lst[i] = lst[i] * num
	return lst

print scale_the_array(arr1,2)


# Challenge: Create a function that accepts an array (of numbers) and num. The function should return the original array, multiplied by num.