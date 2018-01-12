list1 = [1,2,3,4]

def find_average(lst):
	sum = float(0)
	for i in lst:
		sum = sum + i

	return sum/len(lst)

print find_average(list1)


# Challenge: Given as array of integers, write a function that finds the average of all members.