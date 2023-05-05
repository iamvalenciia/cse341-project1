export default function renderForm(req, res) {
  res.send(`
    <html>
    <head>
        <meta charset="utf-8">
        <title>Insert Document</title>
    </head>
    <body>
        <h1>Insert Contact</h1>
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
        <br>
        cse341 | Juan Pablo Valencia | 
        <a href="https://cse341valencia.onrender.com/contacts">https://cse341valencia.onrender.com/contacts</a>
    </body>
    </html>
`);
}
