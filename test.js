const encrypt = require('./script');
const jwt = require('jsonwebtoken');

const secret = 'mySuperSecretKey';
const payload = { userId: 123, username: 'testuser' };

// Generate a token
const token = encrypt(payload, secret);
console.log('Generated Token:', token);

// Verify and decode the token
try {
  const decoded = jwt.verify(token, secret);
  console.log('Decoded Payload:', decoded);
} catch (err) {
  if (err.name === 'TokenExpiredError') {
    console.log('Token has expired.');
  } else {
    console.log('Token verification failed:', err.message);
  }
}
