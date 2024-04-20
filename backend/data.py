import requests
from bs4 import BeautifulSoup

'''
zipcode: zipcode to search within
beds: (min, max) touple with acceptable range of bedrooms
baths: (min, max) touple with acceptable range of bathrooms
price: (min, max) touple with acceptable range of prices
returns: list of house dicts with keys: attomId, lotsize, address, bathstotal, beds, roomsTotal, listingPrice
'''
def get_houses(zipcode, beds, baths, price):
    url = f"https://api.gateway.attomdata.com/propertyapi/v1.0.0/attomavm/detail?postalCode={zipcode}&minBeds={beds[0]}&maxBeds={beds[1]}&minBathsTotal={baths[0]}&maxBathsTotal={baths[1]}&minAVMValue={price[0]}&maxAVMValue={price[1]}&debug=True"
    apiKey = "298da253ad4e02f33880f66bb5089de2"

    headers = {
        "Accept": "application/json",
        "apikey": apiKey
    }

    res = requests.get(url, headers=headers)
    raw_json = res.json()["property"]

    houses = []

    for house in raw_json:
        data = {
            "attomId": house["identifier"]["attomId"],
            "lotsize": house["lot"]["lotsize2"],
            "address": house["address"]["oneLine"],
            "bathstotal": house["building"]["rooms"]["bathstotal"],
            "beds": house["building"]["rooms"]["beds"],
            "roomsTotal": house["building"]["rooms"]["roomsTotal"],
            "listingPrice": house["avm"]["amount"]["value"]
        }
            
        houses.append(data)

    return houses