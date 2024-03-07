import https from 'https';

export function generateQRCode(search, callback) {
    let api = `https://api.qrserver.com/v1/create-qr-code/?&data=${search}`;

    https.get(api, (response) => {
        let imageData = Buffer.alloc(0);

        response.on('data', (chunk) => {
            imageData = Buffer.concat([imageData, chunk]);
        });

        response.on('end', () => {
            let base64ImageData = imageData.toString('base64');
            callback(null, base64ImageData);
        });
    }).on('error', (error) => {
        callback(error, null);
    });
}