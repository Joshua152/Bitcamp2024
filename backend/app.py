import json

from flask import Flask, request

import data

app = Flask(__name__)

@app.route("/get", methods=["POST", "GET"])
def get():
    #req = json.loads(request.data.decode("utf-8"))

    houses = data.get_houses("90036", (0, 10), (0, 10), (0, 9999999999))
    return houses