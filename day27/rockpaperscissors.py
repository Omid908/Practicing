import random
def get_choices():
    player_choice = input("Enter your choice: rock, paper or scissors: ")
    options = ["rock", "paper", "scissors"]
    computer_choice = random.choice(options)
    choices = {"player" : player_choice, "computer" : computer_choice}
    return choices 


def checkwin(player , computer ):
    print(f"You chose {player} and computer chose {computer}")
    if player == computer :
        return "It's a Tie"
    elif player == 'rock':
        if computer == 'scissors':
            return "Player won!"
        else:
            return "Computer won!"
    elif player == 'paper':
        if computer == 'rock':
            return "Player won!"
        else : 
            return "Computer won!"
    elif player == 'scissors':
        if computer == 'paper':
            return "Player won!"
        else:
            return "Computer won!"

choices = get_choices()
result = checkwin(choices['player'], choices['computer'])
print(result)