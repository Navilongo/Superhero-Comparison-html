from flask import Flask, render_template
from flask_assets import Bundle
import sqlite3
import os

app = Flask(__name__)


@app.route("/home")
@app.route("/")
def home():
    return render_template("home.html")


if __name__ =='__main__':
    app.run(debug=True)
