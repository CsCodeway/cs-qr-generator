Example:- 

```
import { generateQRCode } from "cs-qr-generator";

const search = "google.com";

generateQRCode(search, (error, qrCodeURL) => {
    if (error) {
        console.error('Error generating QR code:', error);
    } else {
        console.log('QR code URL:', qrCodeURL);
    }
});
```
