import qrcode

def generate_qr_code(data, filename="qrcode.png", box_size=10, border=4):
    """
    Generates a QR code image and saves it to a file.

    Args:
        data: The data to be encoded in the QR code (string).
        filename: The name of the file to save the QR code image to (string, default: "qrcode.png").
        box_size: The size of each box in the QR code (integer, default: 10).
        border: The border size around the QR code (integer, default: 4).
    """

    qr = qrcode.QRCode(
        version=1,  # You can adjust version for more data capacity
        error_correction=qrcode.constants.ERROR_CORRECT_L, # Error correction level (L, M, Q, H)
        box_size=box_size,
        border=border,
    )
    qr.add_data(data)
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white")
    img.save(filename)

    print(f"QR code generated and saved as {filename}")

if __name__ == "__main__":
    data_to_encode = "https://scamspot.netlify.app/"
    output_filename = input("Enter the filename to save the QR code (e.g., my_qr.png, or leave blank for qrcode.png): ") or "qrcode.png"

    try:
        box_size_input = int(input("Enter the box size (pixels, default 10): ") or 10)
    except ValueError:
        print("Invalid box size input. Using default box size of 10.")
        box_size_input = 10

    try:
        border_input = int(input("Enter the border size (boxes, default 4): ") or 4)
    except ValueError:
        print("Invalid border size input. Using default border size of 4.")
        border_input = 4


    generate_qr_code(data_to_encode, output_filename, box_size_input, border_input)