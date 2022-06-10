# Coding Challenge for Web Engineers

## Installation

1. Clone the repository

```bash
git clone https://github.com/chewhx/coding-challenge-for-web-engineers.git
```

2. Change to project directory

```bash
cd coding-challenge-for-web-engineers/
```

3.  Install dependencies

```bash
npm install
```

4. Create `.env` file at root directory. Insert the secrets given to you.

```bash
touch .env
```

```plaintext
# MONGO
REACT_APP_REALM_APP_ID=
REACT_APP_REALM_MONGO_CLIENT=
REACT_APP_REALM_MONGO_DATABASE=
```

5. Run the application

```bash
npm run start
```

6. Login and access dashboard with the following demo credentials given to you.

---

# Task:

## Requirements

- React
- Redux
- MongoDB or Firestore database

You have 7 days upon receiving this test to complete and submit it back to us

## Instructions

The purpose of this code challenge is to build an admin dashboard with authentication protection and the ability to add new products.

1. Clone this repository and create your own GitHub repository.
2. Push your git repository to GitHub.
3. Initialize a new React project
4. Create the login page with the following features:
   - Text inputs for email and password.
   - Submit button.
   - Show an error message for incorrect credentials.
   - Make the page responsive for mobile and desktop devices.
   - Redirect to the admin dashboard page (to be built in the next step) for correct credentials.
5. Build the admin dashboard page:
   - Show a list of products (the products should be fetched from a database). Each product has the following data: SKU, title and image.
   - Add the option to add a new product (should be added to the database as well).
   - Add the option to edit an existing product (should be edited in the database as well).
   - Add the option to remove an existing product (should be removed from the database as well).
   - Add a logout button that redirects to the login page.
   - Make the page responsive for mobile and desktop devices.
6. When you are done, send us the link to your GitHub repository with a clear readme file and any other details required for us to run the app

## Bonus

Bonus points for adding a search bar in the admin dashboard to search for products.
