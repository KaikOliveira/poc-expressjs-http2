const selfSigned = require('openssl-self-signed-certificate');
const fs = require('fs');
const path = require('path');

let cert = selfSigned;

const outputDirectory = path.join(__dirname, 'src', 'assets');
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory);
}

fs.writeFileSync(path.join(outputDirectory, 'key.pem'), cert.key);
fs.writeFileSync(path.join(outputDirectory, 'cert.pem'), cert.cert);
