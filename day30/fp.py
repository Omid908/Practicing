
# class Person :
#     def __init__(self, name , age ):
#         self.name = name
#         self.age = age
#     def greet(self):
#         print(f"hello my name is {self.name} and i'm {self.age} years old")


# person = Person("Ahmad", 30)
# person.greet()
import json
data = '{"name": "mamad", "age": 30, "city": "NewYork"}' 
json_data = json.loads(data)
print(json_data['name'])

data2 = {"name" : "Mamad" , "age" : 30}
newdata = json.dumps(data2)
print(newdata)