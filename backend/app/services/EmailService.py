import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

class EmailService:
    @staticmethod
    def send_email(receiver_email, subject, body):
        # Your email sending logic using SMTP or an email service's API
        smtp_server = 'your_smtp_server'
        smtp_port = 'your_smtp_port'
        sender_email = 'your_email'
        sender_password = 'your_password'

        message = MIMEMultipart()
        message['From'] = sender_email
        message['To'] = receiver_email
        message['Subject'] = subject

        message.attach(MIMEText(body, 'plain'))

        try:
            with smtplib.SMTP(smtp_server, smtp_port) as server:
                server.starttls()
                server.login(sender_email, sender_password)
                server.send_message(message)
                print('Email sent successfully!')
        except Exception as e:
            print('Error sending email:', e)

