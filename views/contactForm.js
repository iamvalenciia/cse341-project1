export default function contactForm() {
  return `
      <html>
      <head>
          <meta charset="utf-8">
          <title>Insert Document</title>
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
          <div class="card">
              <h2>Create Contact</h2>
              <form action="/contacts/create-contact" method="POST">
                  <label for="firstName">First Name:</label>
                  <input type="text" id="firstName" name="firstName" required>
                  <br>
                  <label for="lastName">Last Name:</label>
                  <input type="text" id="lastName" name="lastName" required>
                  <br>
                  <label for="email">Email:</label>
                  <input type="email" id="email" name="email" required>
                  <br>
                  <label for="favoriteColor">Favorite Color:</label>
                  <input type="text" id="favoriteColor" name="favoriteColor" required>
                  <br>
                  <label for="birthday">Birthday:</label>
                  <input type="date" id="birthday" name="birthday" required>
                  <br>
                  <input type="submit" value="Submit">
              </form>
          </div>
      </body>
      </html>
    `;
}
