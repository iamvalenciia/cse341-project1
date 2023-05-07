export default function editContact(contact) {
  return `
      <div class="card">
        <h2>Edit Contact</h2>
        <form action="/contacts/update/${contact._id}" method="POST">
          <label for="firstName">First Name:</label>
          <input type="text" name="firstName" value="${contact.firstName}">
          <label for="lastName">Last Name:</label>
          <input type="text" name="lastName" value="${contact.lastName}">
          <label for="email">Email:</label>
          <input type="email" name="email" value="${contact.email}">
          <label for="favoriteColor">Favorite Color:</label>
          <input type="text" name="favoriteColor" value="${contact.favoriteColor}">
          <label for="birthday">Birthday:</label>
          <input type="date" name="birthday" value="${contact.birthday}">
          <button type="submit">Update</button>
        </form>
      </div>
    `;
}
