Example:- 

```
Javascript
```

```
import { generateQRCode } from "csway-qr-generator";

const search = "google.com";

generateQRCode(search, (error, qrCodeURL) => {
    if (error) {
        console.error('Error generating QR code:', error);
    } else {
        console.log('QR code URL:', qrCodeURL);
    }
});
```

```
ReactJs
```

```
import { useState } from "react";
import { generateQRCode } from "csway-qr-generator";

const QRCodeGenerator = () => {
  const [qrCodeData, setQRCodeData] = useState(null);
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    generateQRCode(searchText, (error, imageData) => {
      if (error) {
        console.error("Error generating QR code:", error);
      } else {
        setQRCodeData(imageData);
      }
    });
  };

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Enter text for QR code"
      />
      <button onClick={handleSearch}>Generate QR Code</button>
      {qrCodeData && (
        <div>
          <img src={`data:image/png;base64,${qrCodeData}`} alt="QR Code" />
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
```
