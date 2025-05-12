class Person:
    def __init__(self):
        self.first_name = input("Enter your first name: ")
        self.last_name = input("Enter your last name: ")
        self.age = input("Enter your age: ")
        self.email = input("Enter your email address: ")

    def display_info(self):
        print(f"\nFull Name: {self.first_name} {self.last_name}")
        print(f"Age: {self.age}")
        print(f"email : {self.email}")

# Create an instance and display the info
person = Person()
person.display_info()
