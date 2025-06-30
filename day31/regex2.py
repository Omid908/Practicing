import re, requests
def extract_nonce(content):
    return  re.findall( r'data-nonce="(\w+)"', content)
if __name__ == "__main__":
    res = requests.get('https://memoryleaks.ir/wp-login.php')
    print(extract_nonce(res.text)[0])