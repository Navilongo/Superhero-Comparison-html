from flask import Flask, render_template, jsonify 
from flask_assets import Bundle
import sqlite3
import os
00 
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

@app.route("/sinister-six")
def sinister_six():
    """Return the sinister six data as json"""

    return jsonify(sinister_six_members)

@app.route("/heroesjson")
def hero_json():
    return render_template("heroe_json.html")




if __name__ =='__main__':
    app.run(debug=True)