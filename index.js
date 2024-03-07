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
      const base64ImageData = btoa(
        new Uint8Array(buffer).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ''
        )
      );
      callback(null, base64ImageData);
    })
    .catch((error) => {
      callback(error, null);
    });
}
