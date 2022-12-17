import qrcode
img = qrcode.make('https://mohammadshaikh.carrd.co')
img.save('MyQrCode')
img.show()