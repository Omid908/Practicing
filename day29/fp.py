import sys
# items = ["banana", "Apple", "Zebra", "apple", "Banana", "aPPle", "hello", "HELLO", "zzz"]
# items.insert(1, "Hello")
# items.sort(key=str.lower)
# print("Lower case :", items)

# itemscopy = items[:]
# itemscopy = sorted(itemscopy, key=str.upper)
# print("Upper case :", itemscopy)
# name = ("Ahmad", "Mohammad", "Bilal")
# print(sorted(name))
# grades = [("Omid" , 100), ("Ali" , 85 ), ("Mohammad" , 92 )]
# grades.sort(key=lambda x:x[1] , reverse= True)
# print(grades)

# students = {
#     "Class" : "A",
#     "Number" : 20,
#     "OA/GPA" : 3.5
# }
# if "Class" in students :
#     students["Class"] = "B"
# students["Favorite teacher"] = "Ahmad"
# print(f"{students.get("Boys", 12) } \n {students}")
# del students["Favorite teacher"]
# print(students.values())
# print(len(students))
# x = int(input("Enter a number: "))
# if x > 5 :
#     print(f"{x} is greater than 5")
# else:
#     print(f"{x} is less than 5")

# fruits = ["apple" , "banana"]
# for fruit in fruits:
#     print(fruit , end = " ")

# def checkvowel () :
#     word = input("Enter the word you want to check number of it's vowels: ")
#     vowels = 'aeiou'
#     count = 0
#     for char in word.lower():
#         if char in vowels :
#             count+= 1
#     print(count)
# checkvowel()
# if len(sys.argv) < 2:
#     print("Error: No argument provided")
# else:
#     user_input = sys.argv[1]
#     print(user_input)

file_name = 'new.txt'
with open(file_name , 'r') as file:
    content = file.read()
    print(content)