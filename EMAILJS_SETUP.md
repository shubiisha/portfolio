# EmailJS setup

This portfolio is ready to use with EmailJS, but you still need to add your real public key, service ID, and template ID.

1. Create a free EmailJS account.
2. Add an email service and note the Service ID.
3. Create an email template and note the Template ID.
4. Copy your public key.
5. Open `script.js` and replace these values:

```js
const EMAILJS_CONFIG = {
  publicKey: 'YOUR_PUBLIC_KEY',
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID'
};
```

6. Save the file.
7. The form will attempt to send through EmailJS when all values are configured.
8. If the values are not configured yet, the form falls back to the system mail app (`mailto:`) so it still works without breaking the user experience.

This avoids exposing private keys in the frontend and keeps the form functional even before setup is complete.

