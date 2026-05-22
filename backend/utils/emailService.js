const nodemailer = require("nodemailer");

/**
 * Sends a form submission notification email to the configured admin recipients.
 * @param {string} formType Name of the form (e.g. 'Contact Form', 'Birth Certificate')
 * @param {object} formData The mongoose document or form data object
 */
async function sendFormNotificationEmail(formType, formData) {
  // Check if SMTP details are defined in environment variables. If not, log warning and exit.
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("⚠️ SMTP credentials not found in env. Skipping email notification.");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_PORT === "465", // true for 465, false for 587/other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Convert mongoose object to plain javascript object if applicable
  const data = typeof formData.toObject === "function" ? formData.toObject() : formData;

  // Filter out internal fields
  const filteredKeys = Object.keys(data).filter(
    (key) => !["_id", "__v", "createdAt", "updatedAt", "password"].includes(key)
  );

  // Map keys into clean uppercase words and formats values
  const rows = filteredKeys
    .map((key) => {
      let val = data[key];
      if (typeof val === "object" && val !== null) {
        val = JSON.stringify(val);
      }
      // Formatting Key Name (e.g., 'firstName' -> 'First Name')
      const formattedKey = key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase());

      return `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eeeeee; font-weight: bold; color: #4a5568; width: 35%;">${formattedKey}</td>
          <td style="padding: 10px; border-bottom: 1px solid #eeeeee; color: #2d3748; word-break: break-word;">${val !== undefined && val !== null ? val : "-"}</td>
        </tr>
      `;
    })
    .join("");

  const mailOptions = {
    from: `"धामणेर ग्रामपंचायत" <${process.env.SMTP_USER}>`,
    to: "rajesh.m.magar@gmail.com, dhamner189585@gmail.com",
    subject: `नवीन फॉर्म सबमिशन: ${formType} / New Form Submission: ${formType}`,
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 20px auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); background-color: #ffffff;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #15803d, #22c55e); color: white; padding: 25px 30px; text-align: center;">
          <h2 style="margin: 0; font-size: 24px; font-weight: bold; letter-spacing: 0.5px;">नवीन फॉर्म सबमिशन</h2>
          <p style="margin: 6px 0 0 0; font-size: 14px; opacity: 0.9;">धामणेर ग्रामपंचायत संकेतस्थळ</p>
        </div>
        
        <!-- Content -->
        <div style="padding: 30px;">
          <p style="margin-top: 0; color: #4a5568; font-size: 16px; line-height: 1.5;">
            संकेतस्थळावरून <strong>${formType}</strong> साठी एक नवीन फॉर्म सबमिट करण्यात आला आहे. तपशील खालीलप्रमाणे आहेत:
          </p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 25px; font-size: 14px;">
            <thead>
              <tr style="background-color: #f8fafc;">
                <th style="padding: 12px 10px; text-align: left; border-bottom: 2px solid #e2e8f0; color: #4a5568; font-weight: 600;">क्षेत्र (Field)</th>
                <th style="padding: 12px 10px; text-align: left; border-bottom: 2px solid #e2e8f0; color: #4a5568; font-weight: 600;">माहिती (Value)</th>
              </tr>
            </thead>
            <tbody>
              ${rows}
            </tbody>
          </table>
          
          <div style="margin-top: 35px; padding: 15px; background-color: #f0fdf4; border-left: 4px solid #15803d; border-radius: 4px; font-size: 13px; color: #166534; line-height: 1.4;">
            <strong>टीप:</strong> हा ईमेल प्रणालीद्वारे आपोआप तयार केला गेला आहे. कृपया याला उत्तर देऊ नका.
          </div>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #f8fafc; padding: 18px; text-align: center; font-size: 12px; color: #718096; border-top: 1px solid #e2e8f0;">
          © ${new Date().getFullYear()} धामणेर ग्रामपंचायत. सर्व हक्क राखीव.
        </div>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
}

module.exports = { sendFormNotificationEmail };
