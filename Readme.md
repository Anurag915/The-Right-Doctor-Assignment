# People Management SPA (Angular + Node.js + MongoDB)

This project is a **Single Page Application** built with **Angular (7/8)** for the frontend and **Node.js + MongoDB** for the backend. It allows users to manage a list of people — including viewing, editing, and deleting entries.

## 📌 Features

* List all people
* Edit a person's details
* Delete a person
* Connected with RESTful backend API

---

## 🖥️ Frontend (Angular)

### Tech Stack:

* Angular 7/8
* Bootstrap (for UI styling)
* Angular Router
* HttpClientModule

### Components:

* `PeopleListComponent`: Displays a list of all people
* `PersonEditComponent`: Edit an individual person's information
* `PersonDeleteComponent`: Confirm and delete a person

### Routing:

* `/people`: List view
* `/edit/:id`: Edit view
* `/delete/:id`: Delete confirmation view

### Setup Instructions:

```bash
npm install -g @angular/cli@8
cd people-management
npm install
ng serve
```

Visit: [http://localhost:4200](http://localhost:4200)

---

## 🛠️ Backend (Node.js + MongoDB)

### Tech Stack:

* Node.js
* Express.js
* MongoDB
* Mongoose

### REST API Endpoints:

| Method | Endpoint      | Description         |
| ------ | ------------- | ------------------- |
| GET    | `/person`     | Get all people      |
| GET    | `/person/:id` | Get person by ID    |
| POST   | `/person`     | Create new person   |
| PUT    | `/person/:id` | Update person by ID |
| DELETE | `/person/:id` | Delete person by ID |

### MongoDB Collection:

```js
{
  name: String,
  age: Number,
  gender: String,
  mobile: String
}
```

### Setup Instructions:

```bash
cd backend
npm install
node index.js
```

Ensure MongoDB is running on your machine at `mongodb://localhost:27017/peopleDB`

---

## 🔗 Integration

The Angular frontend consumes the above Node.js REST APIs via `HttpClient`. Base API URL can be configured in the Angular `environment.ts`.

---

## 🙋‍♂️ Author

**Anurag Prajapati**
Email: [anuragprajapati02005@gmail.com](mailto:anuragprajapati02005@gmail.com)
GitHub: [Anurag915](https://github.com/Anurag915)

---

## 📄 License

This project is for educational/internship assignment purpose only. Licensed under MIT.
