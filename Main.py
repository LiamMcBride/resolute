from Database import Database
from DatabaseTypes import Course

db = Database()

db.getAllCourses()
db.getAllAssignmentTypes()
x = db.getAllAssignments()
for y in x:
    print(str(y))

