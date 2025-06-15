# items = ["banana", "Apple", "Zebra", "apple", "Banana", "aPPle", "hello", "HELLO", "zzz"]
# items.insert(1, "Hello")
# items.sort(key=str.lower)
# print("Lower case :", items)

# itemscopy = items[:]
# itemscopy = sorted(itemscopy, key=str.upper)
# print("Upper case :", itemscopy)
name = ("Ahmad", "Mohammad", "Bilal")
print(sorted(name))
grades = [("Omid" , 100), ("Ali" , 85 ), ("Mohammad" , 92 )]
grades.sort(key=lambda x:x[1] , reverse= True)
print(grades)