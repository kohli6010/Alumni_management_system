import pymysql
import os

connection = pymysql.connect(host='localhost', port=3306, user='root',
                             database='alumni_management', autocommit=True)

cursor = connection.cursor()


def register_college():
    pass


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
