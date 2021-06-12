from flask import Flask, render_template
from flask_assets import Bundle


app = Flask(__name__)


@app.route("/home")
@app.route("/")
def home():
    return render_template("home.html")

@app.route("/versus")
def versus():
    return render_template("versus.html")
    
@app.route("/heroes_data")
def heroes_data():
    return render_template("heroes_data.html")


if __name__ =='__main__':
    app.run(debug=True)