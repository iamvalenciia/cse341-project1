import { getContacts } from '../controllers/contacts.js';
import contactList from './contactList.js';

export default async function dashBoard() {
  const contacts = await getContacts();
  const contactListHtml = contactList(contacts);

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
              display: block;
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
            .image {
              width: 100%;
            }
            
            .image:hover {
              transform: scale(1.1);
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            }
        </style>
    </head>
    <body>
      <header>
        <h1>API contacts</h1>
      </header>
      <main>
      <div class="container">
        <a href="https://cse341valencia.onrender.com/api-docs/" target="_blank">
          <h2>API documentation</h2>
        </a>
      </div>
          <h2>Contact List</h2>
          <div class="contact-list">${contactListHtml}</div>
      </main>
      <footer></footer>
    </body>
    </html>
  `;
}
