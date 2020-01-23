import pymysql
import os

connection = pymysql.connect(host='localhost', port=3306, user='root',
                             database='alumni_management', autocommit=True)

cursor = connection.cursor()


class CreateCollege:
    def __init__(self, name, email, affiliation_no, password, contact_no):
        self.name = name
        self.email = email
        self.affiliation_no = affiliation_no
        self.password = password
        self.contact_no = contact_no

    def __str__(self):
        return self.name + ',' + self.affiliation_no + ',' + self.email + ',' + self.contact_no + ',' + self.password


def register_college(name, email, affiliation_no, password, contact_no):
    try:
        college = CreateCollege(name, email, affiliation_no, password, contact_no)
        query = 'insert into users values (%s, %s, %s, %s, %s)'
        cursor.execute(query, (college.name, college.affiliation_no, college.password, college.contact_no))
        return college
    except IntergityError as error:
        return error


def register_alumni():
    pass


def create_event():
    pass


def publish_notice():
    pass


def update_info():
    pass


def login_college():
    pass
