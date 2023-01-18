class Course:
    def __init__(self, name):
        self.name = name
    
    def __str__(self):
        return self.name

class AssignmentType:
    def __init__(self, name):
        self.name = name
    
    def __str__(self):
        return self.name

class Assignment:
    def __init__(self, name, course, aType, sDateTime, durationMinutes, grade):
        self.name = name
        self.course = course
        self.assignmentType = aType
        self.startDateTime = sDateTime
        self.durationMinutes = durationMinutes
        self.grade = grade
    
    def __str__(self):
        return "{} {} {} {} {} {}".format(self.name, str(self.course), str(self.assignmentType), self.startDateTime, self.durationMinutes, self.grade)