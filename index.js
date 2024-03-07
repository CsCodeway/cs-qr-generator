export function generateQRCode(search, callback) {
  let api = `https://api.qrserver.com/v1/create-qr-code/?&data=${search}`;

  fetch(api)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.arrayBuffer();
    })
    .then((buffer) => {
      const imageData = Buffer.from(buffer).toString("base64");
      callback(null, imageData);
    })
    .catch((error) => {
      callback(error, null);
    });
}
