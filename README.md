Example:- 

```
import { generateQRCode } from "cs-qr-generator";

const data = "google.com";

generateQRCode(data, (error, qrCodeURL) => {
    if (error) {
        console.error('Error generating QR code:', error);
    } else {
        console.log('QR code URL:', qrCodeURL);
    }
});
```
