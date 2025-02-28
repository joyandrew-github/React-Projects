/*otp=Math.floor(Math.random()*1E4)
console.log(otp)*/
const twilio = require('twilio');

// Twilio Credentials
const accountSid = 'YOUR_TWILIO_ACCOUNT_SID';  // Replace with your Twilio Account SID
const authToken = 'YOUR_TWILIO_AUTH_TOKEN';    // Replace with your Twilio Auth Token
const client = new twilio(accountSid, authToken);

// OTP Generation Function
function generateOTP() {
    const otp = Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit OTP
    return otp;
}

// Function to send OTP via Twilio
function sendOTP(phoneNumber) {
    const otp = generateOTP();  // Generate OTP
    console.log(`Generated OTP: ${otp}`); // Log the OTP for debugging (optional)

    // Sending OTP to the specified phone number
    client.messages
        .create({
            body: `Your OTP is: ${otp}`,
            from: 'YOUR_TWILIO_PHONE_NUMBER',  // Replace with your Twilio phone number
            to: phoneNumber                   // Replace with the user's phone number
        })
        .then(message => console.log(`OTP sent successfully: ${message.sid}`))
        .catch(error => console.error('Error sending OTP:', error));
}

// Replace with the recipient's phone number
const userPhoneNumber = '+917806895713'; // Example: '+1234567890' (with country code)

// Call the sendOTP function
sendOTP(userPhoneNumber);
