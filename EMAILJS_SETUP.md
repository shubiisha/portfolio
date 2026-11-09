# EmailJS setup

The static site loads `emailjs-config.js` before `script.js`. Copy
`emailjs-config.example.js` to `emailjs-config.js` and fill in the EmailJS
service ID, template ID, and public key. The local config file is gitignored;
for deployment, provide the same file as a build/deploy artifact.

The contact form sends its `name`, `email`, and `message` fields through
EmailJS. Verify that the EmailJS template uses those variable names. Without a
valid local configuration, the form reports that it is unavailable and directs
visitors to the email link rather than pretending a message was sent.
