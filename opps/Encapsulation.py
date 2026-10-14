class BankAccount:
    def __init__(self, balance):
        self.__balance = balance    # private (double underscore)
    
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
    
    def get_balance(self):          # public method to access private data
        return self.__balance

acc = BankAccount(1000)
acc.deposit(500)
print(acc.get_balance())   # 1500

# acc.__balance  → Error! Can't access directly