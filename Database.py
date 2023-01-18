import pandas as pd
import pyodbc

from DatabaseTypes import Assignment, AssignmentType, Course

# cnxn = pyodbc.connect(driver='{SQL Server}', server='(local)', database='Resolute',               

#                trusted_connection='yes')


# # cursor = cnxn.cursor()


# query = '''select a.title, course.title as 'Course', aType.title as 'Type', a.duration, a.grade from Assignment as a

# inner join course on course.id = a.course

# inner join assignment_type as aType on aType.id = a.assignmentType'''


# x = pd.read_sql(query, cnxn)

# print(x)


class Database:

    def __init__(self):

        self.cnxn = pyodbc.connect(

            driver='{SQL Server}',

            server='(local)',

            database='Resolute',              

            trusted_connection='yes')
    

    def getAllCourses(self):

        courses = []

        query = 'select * from Course'

        data = pd.read_sql(query, self.cnxn)

        for da in data.index:

            courses.append(Course(data['title'][da]))
        return courses
    
    def getCourseByID(self, courseID):

        course = None

        query = 'select * from Course where id = ' + str(courseID)

        data = pd.read_sql(query, self.cnxn)

        for da in data.index:

            course = (Course(data['title'][da]))
        return course

    
    

    def getAllAssignmentTypes(self):
        assignmentTypes = []

        query = 'select * from assignment_type'

        data = pd.read_sql(query, self.cnxn)

        for da in data.index:
            assignmentTypes.append(AssignmentType(data['title'][da]))
        return assignmentTypes
    
    def getAssignmentTypeByID(self, aTypeID):
        assignmentType = None

        query = 'select * from assignment_type where id = ' + str(aTypeID)

        data = pd.read_sql(query, self.cnxn)

        for da in data.index:
            assignmentType = (AssignmentType(data['title'][da]))
        return assignmentType
    
    def getAllAssignments(self):
        assignmentTypes = []

        query = query = '''select * from Assignment'''

        data = pd.read_sql(query, self.cnxn)

        for da in data.index:
            courseID = data['course'][da]
            course = self.getCourseByID(courseID)
            typeID = data['assignmentType'][da]
            aType = self.getAssignmentTypeByID(typeID)         
            assignmentTypes.append(Assignment(data['title'][da], course, aType, "", data['duration'][da], data['grade'][da]))
        return assignmentTypes