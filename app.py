from flask import Flask, render_template, jsonify
from flask_assets import Bundle
import os 

from sqlalchemy.sql import text


# Sinister Six dictionary
sinister_six_members = [
   {"Universe": "Marvel Comics", "Superhero": "Doctor Octopus", "gender": "Male", "race": "Human", "alignment": "Bad", "intelligence": 95, "strength": 50, "speed": 50, "durability": 35, "power": 55, "combat": 65},
   {"Universe": "Marvel Comics", "Superhero": "Electro", "gender": "Male", "race": "Metahuman", "alignment": "Bad", "intelligence": 85, "strength": 20, "speed": 70, "durability": 70, "power": 90, "combat": 55},
   {"Universe": "Marvel Comics", "Superhero": "Kingpin", "gender": "Male", "race": "Human", "alignment": "Bad", "intelligence": 90, "strength": 20, "speed": 25, "durability": 40, "power": 15, "combat": 70},
   {"Universe": "Marvel Comics", "Superhero": "Kraven the Hunter", "gender": "Male", "race": "Human", "alignment": "Bad", "intelligence": 80, "strength": 30, "speed": 35, "durability": 40, "power": 25, "combat": 85},
   {"Universe": "Marvel Comics", "Superhero": "Lizard", "gender": "Male", "race": "Human", "alignment": "Bad", "intelligence": 75, "strength": 50, "speed": 60, "durability": 70, "power": 75, "combat": 55},
   {"Universe": "Marvel Comics", "Superhero": "Rhino", "gender": "Male", "race": "Human", "alignment": "Bad", "intelligence": 65, "strength": 80, "speed": 45, "durability": 90, "power": 35, "combat": 85},
   {"Universe": "Marvel Comics", "Superhero": "Sandman", "gender": "Male", "race": "Metahuman", "alignment": "Good", "intelligence": 90, "strength": 40, "speed": 35, "durability": 45, "power": 65, "combat": 95},
   {"Universe": "Marvel Comics", "Superhero": "Taskmaster", "gender": "Male", "race": "Human", "alignment": "Bad", "intelligence": 90, "strength": 10, "speed": 50, "durability": 20, "power": 65, "combat": 100},
   {"Universe": "Marvel Comics", "Superhero": "Shocker", "gender": "Male", "race": "Human", "alignment": "Bad", "intelligence": 80, "strength": 10, "speed": 25, "durability": 70, "power": 80, "combat": 55},
   {"Universe": "Marvel Comics", "Superhero": "Vulture", "gender": "Male", "race": "Human", "alignment": "Bad", "intelligence": 90, "strength": 20, "speed": 40, "durability": 25, "power": 25, "combat": 30}
   ]

# Suicide Squad 
suicide_squad = [
    {"Universe": "DC Comics", "Superhero": "Black Manta", "gender": "Male", "race": "Human", "alignment": "Bad", "intelligence": 85, "strength": 45, "speed": 55, "durability": 55, "power": 75, "combat": 85},
    {"Universe": "DC Comics", "Superhero": "Captain Boomerang", "gender": "Male", "race": "Human", "alignment": "Bad", "intelligence": 60, "strength": 15, "speed": 40, "durability": 40, "power": 40, "combat": 80},
    {"Universe": "DC Comics", "Superhero": "Deadshot", "gender": "Male", "race": "Human", "alignment": "Bad", "intelligence": 85, "strength": 10, "speed": 25, "durability": 35, "power": 40, "combat": 90},
    {"Universe": "DC Comics", "Superhero": "Deathstroke", "gender": "Male", "race": "Human", "alignment": "Bad", "intelligence": 90, "strength": 30, "speed": 35, "durability": 70, "power": 100, "combat": 100},
    {"Universe": "DC Comics", "Superhero": "El Diablo", "gender": "Male", "race": "Human", "alignment": "Neutral", "intelligence": 60, "strength": 20, "speed": 30, "durability": 80, "power": 100, "combat": 70},
    {"Universe": "DC Comics", "Superhero": "Harley Quinn", "gender": "Female", "race": "Human", "alignment": "Bad", "intelligence": 95, "strength": 10, "speed": 35, "durability": 65, "power": 55, "combat": 80},
    {"Universe": "DC Comics", "Superhero": "Joker", "gender": "Male", "race": "Human", "alignment": "Bad", "intelligence": 100, "strength": 10, "speed": 10, "durability": 60, "power": 45, "combat": 70},
    {"Universe": "DC Comics", "Superhero": "Katana", "gender": "Female", "race": "Human", "alignment": "Bad", "intelligence": 70, "strength": 10, "speed": 50, "durability": 40, "power": 55, "combat": 100},
    {"Universe": "DC Comics", "Superhero": "Killer Croc", "gender": "Male", "race": "Metahuman", "alignment": "Bad", "intelligence": 90, "strength": 60, "speed": 40, "durability": 85, "power": 75, "combat": 75},
    {"Universe": "DC Comics", "Superhero": "Killer Frost", "gender": "Male", "race": "Human", "alignment": "Bad", "intelligence": 95, "strength": 10, "speed": 15, "durability": 35, "power": 60, "combat": 30}
    ]

# X-Men
x_men = [
    {"Universe": "Marvel Comics", "Superhero": "Mystique", "gender": "Female", "race": "Mutant", "alignment": "Bad", "intelligence": 95, "strength": 25, "speed": 50, "durability": 50, "power": 95, "combat": 100},
    {"Universe": "Marvel Comics", "Superhero": "Nightcrawler", "gender": "Male", "race": "Mutant", "alignment": "Good", "intelligence": 70, "strength": 10, "speed": 60, "durability": 20, "power": 75, "combat": 85},
    {"Universe": "Marvel Comics", "Superhero": "Polaris", "gender": "Female", "race": "Mutant", "alignment": "Good", "intelligence": 80, "strength": 10, "speed": 30, "durability": 25, "power": 100, "combat": 70},
    {"Universe": "Marvel Comics", "Superhero": "Professor X", "gender": "Male", "race": "Mutant", "alignment": "Good", "intelligence": 100, "strength": 10, "speed": 10, "durability": 15, "power": 100, "combat": 60},
    {"Universe": "Marvel Comics", "Superhero": "Psylocke", "gender": "Female", "race": "Mutant", "alignment": "Good", "intelligence": 80, "strength": 35, "speed": 25, "durability": 40, "power": 100, "combat": 90},
    {"Universe": "Marvel Comics", "Superhero": "Rogue", "gender": "Female", "race": "Mutant", "alignment": "Good", "intelligence": 90, "strength": 20, "speed": 45, "durability": 45, "power": 90, "combat": 85},
    {"Universe": "Marvel Comics", "Superhero": "Storm", "gender": "Female", "race": "Mutant", "alignment": "Good", "intelligence": 75, "strength": 25, "speed": 65, "durability": 45, "power": 100, "combat": 70},
    {"Universe": "Marvel Comics", "Superhero": "X-23", "gender": "Female", "race": "Mutant", "alignment": "Good", "intelligence": 90, "strength": 65, "speed": 70, "durability": 85, "power": 85, "combat": 80},
    {"Universe": "Marvel Comics", "Superhero": "Jubilee", "gender": "Female", "race": "Mutant", "alignment": "Good", "intelligence": 80, "strength": 10, "speed": 20, "durability": 20, "power": 65, "combat": 90},
    {"Universe": "Marvel Comics", "Superhero": "Jean Grey", "gender": "Female", "race": "Mutant", "alignment": "Good", "intelligence": 95, "strength": 80, "speed": 20, "durability": 20, "power": 95, "combat": 70}                     
]

# Avengers
avengers = [
    {"Universe": "Marvel Comics", "Superhero": "Antman", "gender": "Male", "race": "Human", "alignment": "Good", "intelligence": 100, "strength": 35, "speed": 50, "durability": 60, "power": 65, "combat": 80},
    {"Universe": "Marvel Comics", "Superhero": "Falcon", "gender": "Male", "race": "Human", "alignment": "Good", "intelligence": 70, "strength": 15, "speed": 50, "durability": 30, "power": 20, "combat": 65},
    {"Universe": "Marvel Comics", "Superhero": "Hawkeye", "gender": "Female", "race": "Human", "alignment": "Good", "intelligence": 75, "strength": 5, "speed": 10, "durability": 10, "power": 25, "combat": 50},
    {"Universe": "Marvel Comics", "Superhero": "Hulk", "gender": "Male", "race": "Human", "alignment": "Good", "intelligence": 60, "strength": 100, "speed": 85, "durability": 100, "power": 100, "combat": 85},
    {"Universe": "Marvel Comics", "Superhero": "Nick Fury", "gender": "Male", "race": "Human", "alignment": "Good", "intelligence": 95, "strength": 15, "speed": 30, "durability": 45, "power": 35, "combat": 85},
    {"Universe": "Marvel Comics", "Superhero": "Quicksilver", "gender": "Male", "race": "Mutant", "alignment": "Good", "intelligence": 80, "strength": 30, "speed": 100, "durability": 60, "power": 80, "combat": 55},
    {"Universe": "Marvel Comics", "Superhero": "Spider-Man", "gender": "Male", "race": "Human", "alignment": "Good", "intelligence": 90, "strength": 55, "speed": 65, "durability": 70, "power": 70, "combat": 80},
    {"Universe": "Marvel Comics", "Superhero": "Thor", "gender": "Male", "race": "God", "alignment": "Good", "intelligence": 85, "strength": 100, "speed": 100, "durability": 100, "power": 100, "combat": 100},
    {"Universe": "Marvel Comics", "Superhero": "Vision", "gender": "Male", "race": "Android", "alignment": "Good", "intelligence": 100, "strength": 70, "speed": 55, "durability": 95, "power": 100, "combat": 70},
    {"Universe": "Marvel Comics", "Superhero": "War Machine", "gender": "Male", "race": "Human", "alignment": "Good", "intelligence": 80, "strength": 80, "speed": 65, "durability": 100, "power": 100, "combat": 85}
]


app = Flask(__name__)


@app.route("/")
def index():

    return render_template("index.html")


@app.route("/X-men_versus_Avengers")
def xmen():

    return render_template("X-Men_versus_Avengers.html")

@app.route("/avengers_visualized")
def avengers_visualized():

    return render_template("avengers_visualized")

@app.route("/sinistersix_visualized/")
def sinistersix_visualized():

    return render_template("sinistersix_visualized.html")

@app.route("/sinistersixVSsuicidesquad")
def sinister_suicide():

    return render_template("sinistersix_suicidesquad.html")

@app.route("/xmen_avengers/")
def x_men_avengers():

    return render_template("xmen_avengers.html")

@app.route("/sinister-six")
def sinister_six():
    """Return the sinister six data as json"""

    return jsonify(sinister_six_members)

@app.route("/suicidesquad")
def suicide_squad():
    """Return the suicide squad as json"""

    return jsonify(suicide_squad)

@app.route("/xmen")
def x_men():
    """Return the x-men data as json"""

    return jsonify(x_men)

@app.route("/avengers")
def avengers():
    """Return the avengers data as json"""

    return jsonify(avengers)


if __name__ == "__main__":
    app.run(debug=True)
