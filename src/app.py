from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from models import db, User, Favorite
from flask_cors import CORS
from flask_migrate import Migrate

app = Flask(__name__)
db.init_app(app)
CORS(app) #habilitamos cors
Migrate(app,db) #nos permite migrar y crear la base de datos a traves de db

#configuracion a app
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI']= 'postgresql://postgres:sdasda@localhost:5432/postgres'



########################################

@app.route('/users',methods=['GET']) #Get de USers
def all_users():
    users=User.query.all()
    users=list(map(lambda user: user.serialize(),users))
    return jsonify(users),200 

@app.route('/post_user',methods=['POST'])
def post_user():
    user = User()
    user.name = request.json.get("name")
    user.password = request.json.get("password")

    db.session.add(user)
    db.session.commit()

    return jsonify(user.serialize()),200



@app.route('/put_user',methods=['PUT'])
def put_user(id):
    user=User.query.get(id)
    user.password = request.json.get("password")
    user.password = request.json.get("name")
    db.session.add(user)
    db.session.commit()
    return jsonify(user.serialize()),200 


@app.route('/delete_user/<int:id>', methods=['DELETE'])
def delete_user(id):
    user=User.query.get(id)
    db.session.delete(user)
    db.session.commit()
    return jsonify('Borrado'),200


###### Lo mismo pero en favorite modificar

@app.route('/favorites',methods=['GET']) #Get de favorites
def all_users():
    favorites=Favorite.query.all()
    favorites=list(map(lambda user: user.serialize(),favorites))
    return jsonify(favorites),200 


# @app.route('/put_favorite',methods=['PUT'])
# def put_user(id):
#     favorite=Favorite.query.get(id)
#     favorite.password = request.json.get("password")
#     favorite.password = request.json.get("name")
#     db.session.add(favorite)
#     db.session.commit()
#     return jsonify(favorite.serialize()),200 


# @app.route('/delete_user/<int:id>', methods=['DELETE'])
# def delete_user(id):
#     favorite=User.query.get(id)
#     db.session.delete(user)
#     db.session.commit()
#     return jsonify('Borrado'),200

if __name__ == "__main__":
    app.run(host="localhost", port=8080)