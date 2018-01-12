list1 = [-1,1,1,1]

def count_positive(lst):
	pos_num = 0
	for i in lst:
		if i > 0:
			pos_num = pos_num + 1

		lst[len(lst) - 1] = pos_num

	return lst

print count_positive(list1)



# Challenge: Given an array of numbers, create a function to replace the last value with the number of positive values in the array. Ex., countPositive([-1,1,1,1]) would print [-1,1,1,3].