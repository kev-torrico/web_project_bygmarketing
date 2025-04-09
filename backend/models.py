from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(100), nullable=False)
    profile_img_url = db.Column(db.String(360), nullable=True)
    gender = db.Column(db.String(10), nullable = False)
    is_active = db.Column(db.Boolean, default=True, nullable=False)

    def __init__(self, name, email, password, gender, profile_img_url):
        self.name = name
        self.email = email
        self.password = password
        self.gender = gender
        self.profile_img_url = profile_img_url
    
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "gender": self.gender,
            "profile_img_url": self.profile_img_url,
        }