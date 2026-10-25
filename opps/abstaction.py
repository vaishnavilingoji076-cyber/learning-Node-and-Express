# . Abstraction
# Hiding complex implementation details and showing only essential features. Achieved via abstract classes or interfaces.

from abc import ABC, abstractmethod

class Payment(ABC):
    @abstractmethod
    def pay(self, amount):
        pass

class CreditCard(Payment):
    def pay(self, amount):
        print(f"paid {amount} via credit card")

class UPI(Payment):
    def pay(self,amount):
        print(f"paid{amount} via UPI")

p=CreditCard()
p.pay(100)
p=UPI()
p.pay(1800)