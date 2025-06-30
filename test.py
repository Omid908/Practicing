import json

res = requests.get(f'https://api.github.com/users/{username}/repos')

# Pretty-print the first repo's full data
print(json.dumps(res.json()[0], indent=2))