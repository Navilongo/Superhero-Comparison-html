from flask import Flask, render_template, url_for, json 
import os


app = Flask(__name__)


@app.route("/")
def index():
    return render_template("heroes.html")

@app.route("/api/v1.0/heroes")
def heroes():
    SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    json_url = os.path.join(SITE_ROOT, "data/json", "heroes.json")
    data = json.load(open(json_url))
    """Return all general hero data"""
    return render_template('showjson.jade', data=data)


if __name__ =='__main__':
    app.run(debug=True)