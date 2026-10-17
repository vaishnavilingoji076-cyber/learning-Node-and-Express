# "Many forms" — the same method name behaves differently based on the object.

class Shape:
    def area(self):
        pass

class Circle(Shape):
    def  __init__(self, r): self.r=r
    def area(self):
        return 3.14 * self.r * self.r

class Square(Shape):
    def  __init__(self, s): self.s=s
    def area(self):
        return self.s * self.s

Shapes=[Circle(5), Square(4)]
for s in Shapes:
    print(s.area())