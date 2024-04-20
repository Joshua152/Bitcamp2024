import json

from flask import Flask, request

import data
import filter

app = Flask(__name__)

@app.route("/get", methods=["POST", "GET"])
def get():
    req = json.loads(request.data.decode("utf-8"))

    bed_range = (int(req["preferences"]["bed"]) - 2, req["preferences"]["bed"] + 2)
    bath_range = (int(req["preferences"]["bath"]) - 2, req["preferences"]["bath"] + 2)
    price_range = filter.calc_affordable_price(req["income"], req["debt"])

    houses = data.get_houses(req["zipcode"], bed_range, bath_range, price_range)
    return houses