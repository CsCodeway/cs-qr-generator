cs-qr-generator: your go-to tool for effortless custom qr code creation.


Example:- 

import { generateQRCode } from 'cs-qr-generator'

let search = "google.com";

generateQRCode(search, (error, imageData) => {
    if (error) {
        console.error('Error generating QR code:', error);
    } else {
        console.log('QR code image data:', imageData);
    }
});
