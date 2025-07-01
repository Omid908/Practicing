import requests, sys
if len(sys.argv) == 2:
    username = sys.argv[1]
    res = requests.get(f'https://api.github.com/users/{username}/repos')
    for item in res.json():
        print(item.get('name'))
        print(item.get('id'))
else:
    print('- Python3 regex3.py [username]')
# import json

# res = requests.get(f'https://api.github.com/users/{username}/repos')

# # Pretty-print the first repo's full data
# print(json.dumps(res.json()[0], indent=2))