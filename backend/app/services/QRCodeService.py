import qrcode

class QRCodeService:
    @staticmethod
    def generate_qr_code(ticket_data):
        # Logic to generate QR code based on ticket data
        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_H,
            box_size=10,
            border=4,
        )
        qr.add_data(ticket_data)
        qr.make(fit=True)
        qr_img = qr.make_image(fill_color="black", back_color="white")
        # Save or return the QR code image as needed
        return qr_img

