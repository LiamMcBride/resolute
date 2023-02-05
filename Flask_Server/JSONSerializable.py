import json
import uuid


class JSONSerializable():
    def __init__(self, **kwargs):
        for key, val in kwargs.items():
            setattr(self, key, value)
    
    def from_json(cls, json_str):
        data = json.loads(json_str)
        print((data))
        return cls(**data)
    
    def to_json(self):
        return json.dumps(self.__dict__)
    
    def to_dict(self):
        return (self.__dict__)

class User(JSONSerializable):
    def __init__(self, id, username, firstName, lastName, age, password):
        if id == "":
            self.id = str(uuid.uuid1())
        else:
            self.id = id
        self.username = username
        self.firstName = firstName
        self.lastName = lastName
        self.age = age
        self.password = password
    
    def validate(self, user, pword):
        print("User == self.useername is: {}".format(user == self.username))
        print(type(user))
        print(user)
        print("pword == self.password is: {}".format(pword == self.password))
        return user == self.username and pword == self.password

    def __str__(self):
        arguments = [self.username, self.firstName, self.lastName, self.age, self.id]
        return "Username: {}\nFirst Name: {}\nLast Name: {}\nAge: {}\nUUID: {}".format(*arguments)

class Photo(JSONSerializable):
    def __init__(self, title, url, date):
        self.title = title
        self.url = url
        self.date = date

    
    def __str__(self):
        arguments = [self.title, self.url, self.date]
        return "Title: {}\nURL: {}\nDate: {}".format(*arguments)



# def write_users(user_db):
#     json_obj = []
#     for usr in user_db:
#         json_obj.append(usr.to_dict())

#     with open('users.json', 'w', encoding='utf-8') as f:
#         json.dump(json_obj, f, ensure_ascii=False, indent=4)
#         # f.write(json_obj)
#     f.close()





# json_obj = None
# users = []
# with open("users.json") as f:
#     json_obj = json.loads(f.read())
#     f.close()

# for obj in json_obj:
#     users.append(User.from_json(User, json.dumps(obj)))

# print("-" * 60)
# for user in users:
#     print(user)
#     print("-" * 60)

# write_users(users)
# print(users[0].to_dict())

# newUser = User("", "1", "1", "1", 1, "1234")

# print(newUser.validate("2", "1234"))
