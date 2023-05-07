export default function contactList(contacts) {
  let contactsHtml = '';

  for (const contact of contacts) {
    contactsHtml += `
      <div class="card">
        <h2>${contact.firstName + ' ' + contact.lastName}</h2>
        <p>Email: ${contact.email}</p>
        <p>Favorite Color: ${contact.favoriteColor}</p>
        <p>Birthday: ${contact.birthday}</p>
        <div class="container-buttons">
          <form action="/contacts/edit/${contact._id}" method="GET">
            <button type="submit" class="edit-button">Edit</button>
          </form>
          <form action="/contacts/delete/${contact._id}" method="POST">
            <button type="submit" class="delete-button">Delete</button>
          </form>
        </div>
      </div>
    `;
  }

  const html = `
    <html>
    <head>
        <style>
          .container-buttons {
            display: flex;
            column-gap: 10px;
            align-items: center;
          }
          
          .edit-button,
          .delete-button {
            padding: 8px 16px;
            font-size: 14px;
            border-radius: 4px;
            background-color: #0077CC;
            color: #FFFFFF;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .delete-button {
            background-color: #CC3333;
          }

          .edit-button:hover {
            background-color: #0055A3;
          }

          .delete-button:hover {
            background-color: #AA2222;
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
