export default function contactList(contacts) {
  let contactsHtml = '';

  for (const contact of contacts) {
    contactsHtml += `
      <div class="card">
        <h2>${contact.firstName + ' ' + contact.lastName}</h2>
        <p>ID: ${contact._id}<p>
        <p>Email: ${contact.email}</p>
        <p>Favorite Color: ${contact.favoriteColor}</p>
        <p>Birthday: ${contact.birthday}</p>
      </div>
    `;
  }

  const html = `
    <html>
    <head>
      <style>
        body {
            font-family: Arial, sans-serif;
        }
        
        .card {
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 20px;
          background-color: #f9f9f9;
        }

        form {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-top: 20px;
        }
        
        label {
            display: block;
            margin-top: 5px;
            margin-bottom: 2px;
        }
        
        input[type="text"],
        input[type="email"],
        input[type="date"] {
            width: 200px;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 3px;
        }
        
        input[type="submit"] {
            margin-top: 10px;
            background-color: #4CAF50;
            color: white;
            padding: 8px 16px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        
        input[type="submit"]:hover {
            background-color: #45a049;
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
