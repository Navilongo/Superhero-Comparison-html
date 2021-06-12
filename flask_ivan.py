from flask import Flask, render_template
from flask_assets import Bundle
import sqlite3
import os

# Sinister Six dictionary
sinister_six_members = [
   {"Universe": "Marvel Comics", "Superhero": "Doctor Octopus", "gender": "Male", "race": "Human", "alignment": "Bad", "intelligence": 95, "strength": 50, "speed": 50, "durability": 35, "power": 55, "combat": 65},
   {"Universe": "Marvel Comics", "Superhero": "Electro", "gender": "Male", "race": "Metahuman", "alignment": "Bad", "intelligence": 85, "strength": 20, "speed": 70, "durability": 70, "power": 90, "combat": 55},
   {"Universe": "Marvel Comics", "Superhero": "Kingpin", "gender": "Male", "race": "Human", "alignment": "Bad", "intelligence": 90, "strength": 20, "speed": 25, "durability": 40, "power": 15, "combat": 70},
   ]

app = Flask(__name__)


@app.route("/home")
@app.route("/")
def home():
    return render_template("home.html")

@app.route("/versus")
def versus():
    return render_template("versus.html")

@app.route("/index")
def index():
    return render_template("index.html")

@app.route("/query")
def query():

    args = request.args

    print(args)


if __name__ =='__main__':
    app.run(debug=True)