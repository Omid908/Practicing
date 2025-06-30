import requests
from bs4 import BeautifulSoup
res = requests.get('https://memoryleaks.ir')
soup = BeautifulSoup(res.text, 'html.parser')
img_tags = soup.find_all('img')
for img_tag in img_tags:
    print(img_tag.get('src'))