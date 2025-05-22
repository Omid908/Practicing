import random
def get_choices():
    player_choice = input("Enter your choice: ")
    options = ['Rock','Paper','Scissors']
    computer_choice = random.choice(options)
    choices = { "player" : player_choice , "computer" : computer_choice}
    return choices
choice = get_choices()
print(choice)
def check_winner( player , computer ):
    print(f"you chose {player} and computer chose {computer}.")
    if player == computer :
        return "It's a tie"
    elif player == "Rock" :
        if computer == "Scissors":
            return "Rock smashes Scissors, You won !"
        else: 
            return "Scissors got smashed by Rock, computer won :("
    elif player == "Paper" :
        if computer == "Scissors":
            return "Scissors cuts paper, computer won :("
        else: 
            return "Scissors cuts paper, You won !"
    elif player == "Paper" :
        if computer == "Rock":
            return "Paper covers rock, You won !"
        else: 
            return "Paper covers rock, computer won :("
result = check_winner(choice["player"], choice["computer"])
print(result)
