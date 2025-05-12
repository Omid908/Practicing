from abc import ABC, abstractmethod

class Account(ABC):
    account_count = 0

    def __init__(self, owner, balance=0):
        self._owner = owner
        self._balance = balance
        Account.account_count += 1

    @property
    def balance(self):
        return self._balance

    @property
    def owner(self):
        return self._owner

    @abstractmethod
    def account_type(self):
        pass

    def deposit(self, amount):
        if amount > 0:
            self._balance += amount
        else:
            raise ValueError("Deposit must be positive")

    def withdraw(self, amount):
        if 0 < amount <= self._balance:
            self._balance -= amount
        else:
            raise ValueError("Insufficient funds or invalid amount")

    @classmethod
    def get_account_count(cls):
        return cls.account_count

    @staticmethod
    def bank_name():
        return "OpenAI National Bank"

    def __str__(self):
        return f"{self.account_type()} Account | Owner: {self._owner}, Balance: ${self._balance:.2f}"

    def __add__(self, other):
        if isinstance(other, Account):
            return self._balance + other._balance
        raise TypeError("Can only add Account instances")


class SavingsAccount(Account):
    def account_type(self):
        return "Savings"

    def add_interest(self, rate):
        if 0 < rate <= 1:
            interest = self._balance * rate
            self._balance += interest
        else:
            raise ValueError("Interest rate must be between 0 and 1")


class CheckingAccount(Account):
    def __init__(self, owner, balance=0, overdraft_limit=500):
        super().__init__(owner, balance)
        self._overdraft_limit = overdraft_limit

    def account_type(self):
        return "Checking"

    def withdraw(self, amount):
        if amount <= self._balance + self._overdraft_limit:
            self._balance -= amount
        else:
            raise ValueError("Overdraft limit exceeded")

    @property
    def overdraft_limit(self):
        return self._overdraft_limit


def main():
    print(f"Welcome to {Account.bank_name()}!")
    name = input("Enter your name: ")
    
    acc_type = input("Choose account type (savings/checking): ").strip().lower()
    initial_balance = float(input("Enter initial deposit amount: "))

    if acc_type == 'savings':
        account = SavingsAccount(name, initial_balance)
    elif acc_type == 'checking':
        account = CheckingAccount(name, initial_balance)
    else:
        print("Invalid account type. Exiting.")
        return

    while True:
        print("\n--- MENU ---")
        print("1. Deposit")
        print("2. Withdraw")
        print("3. View Balance")
        print("4. Add Interest (Savings only)")
        print("5. Exit")
        
        choice = input("Choose an option: ")

        try:
            if choice == '1':
                amount = float(input("Enter deposit amount: "))
                account.deposit(amount)
                print("Deposit successful.")
            elif choice == '2':
                amount = float(input("Enter withdrawal amount: "))
                account.withdraw(amount)
                print("Withdrawal successful.")
            elif choice == '3':
                print(account)
            elif choice == '4':
                if isinstance(account, SavingsAccount):
                    rate = float(input("Enter interest rate (e.g., 0.05 for 5%): "))
                    account.add_interest(rate)
                    print("Interest added.")
                else:
                    print("Interest is only available for savings accounts.")
            elif choice == '5':
                print("Thank you for banking with us!")
                break
            else:
                print("Invalid choice. Try again.")
        except ValueError as ve:
            print("Error:", ve)

if __name__ == "__main__":
    main()
