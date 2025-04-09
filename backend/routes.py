from app import app, db
from flask import request, jsonify
from models import User


#Get all users
@app.route("/api/users", methods=["GET"])
def get_all_users():
    users = User.query.all()
    serialized_users =  [person.serialize() for person in users]
    return jsonify(serialized_users), 200

#Create a user
@app.route("/api/users", methods=["POST"])
def create_user():
    try:
        data = request.json
        name = data.get("name")
        email = data.get("email")
        password= data.get("password")
        gender = data.get("gender")


        #Fetch avatar image based on gender
        if gender == "male":
            img_url = f"https://avatar.iran.liara.run/public/boy?username={name}"
        elif gender == "female":
            img_url = f"https://avatar.iran.liara.run/public/girl?username={name}"
        else: 
            img_url = None

        new_user = User(name=name, email=email, password=password, gender=gender, profile_img_url=img_url)
        db.session.add(new_user)
        db.session.commit()

        return jsonify({"user": new_user.serialize()}), 200
    
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500