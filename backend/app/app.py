from flask import Flask
from flask_restful import Api
from controllers.TicketController import TicketController
from controllers.UserController import UserController

app = Flask(__name__)
api = Api(app)

# Initialize controllers
ticket_controller = TicketController()
user_controller = UserController()

# Define routes
api.add_resource(ticket_controller, '/tickets', '/tickets/<int:ticket_id>')
api.add_resource(user_controller, '/users', '/users/<int:user_id>')

if __name__ == '__main__':
    app.run(debug=True)

