# A child class inherits properties and methods from a parent class. Promotes code reuse.

class Animal:
    def  __init__ (self, name):
        self.name=name


    def eat(self):
        print(f"{self.name} is eating")

class Dog(Animal):
    def bark(self):
        print(f"{self.name} says woof!") 

class Cat(Animal):
    def meow(self):
        print(f"{self.name} says meow")      

d=Dog("james")
d.eat()
d.bark()
d.meow()