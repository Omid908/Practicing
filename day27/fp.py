import random
def get_choices():
    player_choice = input("Enter your choice: rock , paper or scissors ")
    options = ["rock", "paper", "scissors"]
    computer_choice = random.choice(options)
    choices = {"player" : player_choice , "computer" : computer_choice }
    return choices 

choices = get_choices()
print(choices)

def checkwin(player , computer ):
    print(f"You chose {player} and computer chose {computer}")
    if player == computer :
        return "Tie"