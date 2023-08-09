const selfSigned = require('openssl-self-signed-certificate');
let cert = selfSigned;
require('fs').writeFileSync('key.pem', cert.key);
require('fs').writeFileSync('cert.pem', cert.cert);
