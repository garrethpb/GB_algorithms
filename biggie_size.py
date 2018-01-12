arr = [-1,5,17,-32,0]

def biggie_size2(lst):
	for i in lst:
		if i > 0:
			i = "BIG"
		print i

print biggie_size2(arr)

# Challenge: Given an array, write a function that changes all positive numbers in the array to "BIG".