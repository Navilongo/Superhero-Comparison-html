from flask import Flask, render_template
from flask_assets import Bundle


from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import text
from flask import Flask, render_template


app = Flask(__name__)


@app.route("/")
def index():

    return render_template("index.html")


@app.route("/X-men_versus_Avengers")
def xmen():

    return render_template("X-Men_versus_Avengers.html")


if __name__ == "__main__":
    app.run(debug=True)
