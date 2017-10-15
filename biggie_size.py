# arr = [-1,5,17,-32,0]

# def biggie_size(lst):
#   for i in range(0,len(lst)):
#     if lst[i] > 0:
#       lst[i] = "BIG"
#   return lst
  
# print biggie_size(arr)


# Challenge: Given an array, write a function that changes all positive numbers in the array to "BIG".



arr = [-1,5,17,-32,0]

def biggie_size2(lst):
	for ele in lst:
		if ele > 0:
			ele = "BIG"
		print ele
	return lst

print biggie_size2(arr)