def generate_coin_change(cents):
	quarters = cents / 25
	remainder = cents % 25

	print "The change is ", quarters, " quarter(s).", "There are ", remainder, "cents remaining."

	dimes = remainder / 10
	remainder = remainder % 10

	print "The change is ", dimes, " dime(s).", "There are ", remainder, "cents remaining."

	nickels = remainder / 5
	remainder = remainder % 5

	print "The change is ", nickels, " nickel(s).", "There are ", remainder, "cents remaining."

	pennies = remainder / 1

	print "The change is ", pennies, " pennies."

	print "Have a nice fucking day."

generate_coin_change(94)