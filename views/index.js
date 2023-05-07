import contactForm from './contactForm.js';
import { getContacts } from '../controllers/contacts.js';
import contactList from './contactList.js';

export default async function dashBoard(successMessage, errorMessage, resultToUpdate) {
  const contacts = await getContacts();
  const contactListHtml = contactList(contacts);

  let message = '';
  if (successMessage) {
    message = `<p class="success">${successMessage}</p>`;
  } else if (errorMessage) {
    message = `<p class="error">${errorMessage}</p>`;
  }

  let editContact = '';
  if (resultToUpdate) {
    editContact = editContactForm(resultToUpdate);
  }

  return `
    <html>
    <head>
        <meta charset="utf-8">
        <title>Dashboard</title>
        <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f1f1f1;
              margin: 0;
              padding: 0;
            }

            header {
              background-color: #0076b6;
              color: #fff;
              padding: 20px;
              text-align: center;
            }

            main {
              max-width: 800px;
              margin: 20px auto;
              padding: 20px;
              background-color: #fff;
              border-radius: 5px;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }

            .container {
              display: flex;
              column-gap: 50px;
              align-items: flex-start;
            }

            h1 {
              color: #ffff;
            }

            .contact-list {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 20px;
            }

            .card2 {
              border: 1px solid #0076b6;
              border-radius: 5px;
              padding: 20px;
              background-color: #f9f9f9;
            }
            
            .success {
              color: #008000;
              background-color: #f0fff0;
              border: 1px solid #90ee90;
              padding: 10px;
              border-radius: 5px;
            }
            .error {
              color: #ff0000;
              background-color: #ffe5e5;
              border: 1px solid #ff9999;
              padding: 10px;
              border-radius: 5px;
            }
        </style>
    </head>
    <body>
      <header>
        <h1>Contact Management System</h1>
      </header>
      <main>
          ${message}
          <div class="container">
            ${contactForm()}
            ${editContact}
          </div>
          <h2>Contact List</h2>
          <div class="contact-list">${contactListHtml}</div>
      </main>
      <footer></footer>
    </body>
    </html>
  `;
}

function editContactForm(contact) {
  return `
    <div class="card2">
      <h2>Edit Contact</h2>
      <form action="/contacts/update/${contact._id}" method="POST">
        <label for="firstName">First Name:</label>
        <input type="text" name="firstName" value="${contact.firstName}">
        <br>
        <label for="lastName">Last Name:</label>
        <input type="text" name="lastName" value="${contact.lastName}">
        <br>
        <label for="email">Email:</label>
        <input type="email" name="email" value="${contact.email}">
        <br>
        <label for="favoriteColor">Favorite Color:</label>
        <input type="text" name="favoriteColor" value="${contact.favoriteColor}">
        <br>
        <label for="birthday">Birthday:</label>
        <input type="date" name="birthday" value="${contact.birthday}">
        <br>
        <input type="submit" value="Update">
      </form>
    </div>
  `;
}
