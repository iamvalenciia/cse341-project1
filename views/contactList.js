export default function contactList(contacts) {
  let contactsHtml = '';

  for (const contact of contacts) {
    contactsHtml += `
        <div class="card">
          <h2>${contact.firstName + ' ' + contact.lastName}</h2>
          <p>Email: ${contact.email}</p>
          <p>Favorite Color: ${contact.favoriteColor}</p>
          <p>Birthday: ${contact.birthday}</p>
        </div>
      `;
  }

  const html = `
      <html>
      <head>
          <meta charset="utf-8">
          <title>Contact List</title>
          <style>
              body {
                font-family: Arial, sans-serif;
              }
  
              .card {
                border: 1px solid #ccc;
                border-radius: 5px;
                padding: 10px;
                margin-bottom: 10px;
              }
  
              h2 {
                color: #333;
              }
          </style>
      </head>
      <body>
          ${contactsHtml}
      </body>
      </html>
    `;

  return html;
}
