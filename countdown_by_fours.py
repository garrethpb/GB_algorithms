# Challenhge: log positive numbers starting at 2016, counting down by fours (exclude 0) without a FOR loop

def countdown(start,stop):
	num = start
	while (num > stop):
		print num
		num -= 4

countdown(2016, 3)