# name = "Ahmad" ; print (type(name) == str)
# number = float ( "12.69" ) ; print(isinstance(number , float))
# print("Ahmad" + "is a good person")

# def checking_age ( age ) :
#     print('Adult') if age >= 18 else print ('Minor')

# checking_age(15)
# info = 'Ahmad is 25 yo student'
# something = 'This is ahmad\'s \\n something' # we should use skip character \ for ' to skip it or mayber for something like \n
# print(info.replace('a', 'm').replace('A', 'm'))
# print(info.find('A'))
# print(len(info))
# print(" is" in info)
# print(something)
# print(info[0 : 2])

# new = True
# old = False
# print(any([new , old])) # returns true if any of them is true
# print(all([new, old])) # returns true if all of the values are ture
# print(abs(-24j))
# print(round(5.578 , 2)) # same as .tofixed() in javascript we don't need it in python we just add , and the number of fixed decimals
# from enum import Enum
# class State ( Enum ):
#     Inactive = 0
#     Active = 1
# print(State['Active'].value)
# print(list(State))
# print(len(State))

# birthyear = int(input("Enter your birthyear: \n"))
# print(f"You will be {2030 - birthyear} years old in 2030 ")

elements = [10, 20, 30, 40]
if len(elements) >= 2 :
    print(f"last second element : {elements[-2]}")
else:
    print("Not enough elements to check the last second element")

my_list = []
while True:
    value = input("Enter the values of list ")
    if value == '':
        break
    my_list.append(int(value)) # we use append to add element to a list

if len(my_list) >= 2:
    print("Second last element :" , my_list[-2])
else:
    print("Not enough elements in this list")