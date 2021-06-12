from flask import Flask, render_template
from flask_assets import Bundle
import sqlite3
import os

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
