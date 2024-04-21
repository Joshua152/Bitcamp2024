import json

from flask import Flask, request, jsonify

import data
import sort

app = Flask(__name__)

@app.route("/get", methods=["POST"])
def get():
    req = json.loads(request.data.decode("utf-8"))

    bed_range = get_range(int(req["preferences"]["bed"]))
    bath_range = get_range(int(req["preferences"]["bath"]))
    price_range = sort.calc_affordable_price(req["income"], req["debt"])

    houses = []

    if req.locType == "zip":
        houses = data.get_houses_by_zip(req["zipcode"], bed_range, bath_range, price_range)
    elif req.locType == "latlon":
        houses = data.get_houses_by_latlon(req["latlon"], bed_range, bath_range, price_range)

    sorted_houses = sort.sort_house_list(req["preferences"], houses, price_range[0], price_range[1])

    response = jsonify(sorted_houses)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

def get_range(value):
    if value == 0:
        return (0, 100)
    
    if value >= 6:
        return (value - 1, 100)
    
    return (max(0, value - 2), value + 2)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)