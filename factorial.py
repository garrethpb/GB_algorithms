def factorial(num):
	product = 1
	for i in range(2, num + 1):
		product *= i
	return product

print factorial(8)

# Challenge: Write a function that, given a number, calculates and returns the product of all positive integers from 1 up to the number (inclusive).

