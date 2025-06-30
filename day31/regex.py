import re

file_path = "./wp-login.php"
pattern = r'data-nonce="(\w+)"'

try:
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    nonces = re.findall(pattern, content)

    if nonces:
        print("Found nonce(s):")
        for nonce in nonces:
            print(nonce)
    else:
        print("No nonce found.")

except FileNotFoundError:
    print(f"File '{file_path}' not found.")
except Exception as e:
    print(f"Error: {e}")
