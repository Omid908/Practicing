import sys
x = sys.argv[1]
with open ( x , 'r') as y:
    content = y.read()
    print(content)