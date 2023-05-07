export default function contactList(contacts) {
  let contactsHtml = '';

  for (const contact of contacts) {
    contactsHtml += `
      <div class="card">
        <h2>${contact.firstName + ' ' + contact.lastName}</h2>
        <p>Email: ${contact.email}</p>
        <p>Favorite Color: ${contact.favoriteColor}</p>
        <p>Birthday: ${contact.birthday}</p>
        <form action="/contacts/edit/${contact._id}" method="GET">
          <button type="submit">Edit</button>
        </form>
        <form action="/contacts/delete/${contact._id}" method="POST">
          <button type="submit">Delete</button>
        </form>
      </div>
    `;
  }

  const html = `
    <html>
    <head>
        <!-- Rest of the code -->
    </head>
    <body>
        ${contactsHtml}
    </body>
    </html>
  `;

  return html;
}
