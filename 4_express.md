# What is express js ? what are the features of express js ?

## 1 Express.js is a fast, minimal, and flexible web framework for Node.js.
● It helps developers build web applications and APIs easily.
● It provides a robust set of features for building web and mobile applications.
● You can assume express as a layer built on the top of the Node.js that helps
manage a server and routes.
● Express is an open-source that is developed and maintained by the Node.js
foundation.
## 2 Why Use Express.js?
Without Express, handling HTTP requests in Node.js requires writing a lot of code.
Express simplifies this with:
● Easy routing (defining URL paths like /home, /about)
● Middleware support (functions to handle requests like logging, authentication,
error handling)
● Integration with databases (MongoDB, MySQL, etc.)
● Supports building RESTful APIs and even full web apps

## 3 Features of Express.js
F ast and minimalist
Provides only the core features of a web server.
● Lightweight and flexible → you add extra features as needed via middleware
or external packages.
● The minimalist nature of Express.js means it gives you just the essentials
to build web applications, leaving all other choices (database, templating,
authentication, etc.) up to you.

M  
R 
T
S
E
E
S














# Explain Routing in expressjs with an example

-Routing refers to how an application responds to client requests at specific URLs
(endpoints) and HTTP methods (GET, POST, PUT, DELETE).
-In Express, routes are defined using:
app.METHOD(PATH, HANDLER)
METHOD → HTTP method (GET, POST, etc.)
PATH → URL (e.g., /users)
HANDLER → Callback function that runs when the route is matched.
-The Express Router is a mini Express application that helps you organize
routes into separate files and modules.
It allows you to create modular, mountable route handlers, instead of putting all
routes in a single server.js or app.js.
Syntax:

```
const express = require('express');
const router = express.Router();
```

Without Router:
● All routes are defined in one file → messy in large projects.
With Router:
● Routes are grouped by functionality (e.g., /users, /products,
/orders).
● Code becomes clean, maintainable, and reusable.
Benefits of Using Express Router

1. Modularity – split routes into separate files.
2. Maintainability – easier to manage large apps.
3. Reusability – can reuse router modules in other projects.
4. Clean Structure – avoids clutter in main app.js.

```
1. Without Router Example:
all routes in a single file
app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/users', (req, res) => {
  res.send('User List');
});

app.post('/product', (req, res) => {
  res.send('Create product');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


2. With Router Example:
user.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('User List');

    module.exports = router;

product.js
const express = require('express');
const router = express.Router();
router.post('/', (req, res) => {
  res.send('Create product');

});
module.exports = router;


app.js
// use routes in app.js
const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require('./user');
const productRoutes = require('./product');
 // mount the routers

app.use('/users', userRoutes);
app.use('/product', productRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


```
