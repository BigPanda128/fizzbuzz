//Ryan Postma
//Chapter 2 Fizzbuzz
//CMP 237
//1/26/15
//sifts through numbers and prints out fizz, buzz, or fizzbuzz

for (var i = 0; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0)
    print("FizzBuzz");
  	else if (i % 3 == 0)
    print("Fizz");
	else if (i % 5 == 0)
    print("Buzz");
	else
      print(i);
}


