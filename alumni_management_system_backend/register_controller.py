import cgi
import model

form = cgi.FieldStorage()

name = form.getvalue('coll_name')
email = form.getvalue('coll_email')
affiliation_no = form.getvalue('coll_affiliation')
password = form.getvalue('coll_pwd')
contact_no = form.getvalue('coll_contact')

model.register_college(name, email, affiliation_no, password, contact_no)
