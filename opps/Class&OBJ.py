class Car:
    def __init__(self, brand, color):
        self.brand=brand
        self.color=color

    def drive(self):
        print(f"{self.color} { self.brand} is driving")

car1=Car("bmw", "black")
car2=Car("fortuner", "white")

car1.drive()
car2.drive()