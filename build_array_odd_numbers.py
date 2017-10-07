# challenge: build an array from odd numbers in a given range

def odd_numbers(start,stop):
	arr = []
	for i in range(start,stop):
		if i % 2 != 0:
			arr.append(i)
	return arr

print odd_numbers(1,5000)