coins = [25, 10, 5, 1]

cents = 94

def divide(start_num, divisor):
	quotient = start_num / divisor
	remainder = start_num % divisor

	return quotient, remainder

for x in coins: 
	coin_number, cents = divide(cents, x)
	print 'number of coins:', coin_number, x, 'cent pieces'
	print "remaining cents:", cents
	if cents == 0:
		break





# divide(94, 25)

# divide(19, 10)

# divide(9, 5)

# divide(4, 1)

# Further challenge:
# Push all coin_number values into a list. Then iterate through list, only printing the ones that have value > 0.

# Make a dictionary that has name of coin + value of coin.

# coins_and_values = {
# 	'Quarter' : 25,
# 	'Dime' : 10,
# 	'Nickel' : 5,
# 	'Penny' : 1,
# }

# for k,v in coins_and_values.items():
# 	print k, ":", v

# print coins_and_values['Quarter']	