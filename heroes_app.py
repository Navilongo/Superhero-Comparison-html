from flask import Flask, render_template
from flask_assets import Bundle
import sqlite3
import os

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("heroes.html")

if __name__ =='__main__':
    app.run(debug=True)