# What is REST API? What are the principles of REST API?

REST (Representational State Transfer) is an architectural style for
designing APIs.

## 1

● It uses standard HTTP methods:
○ GET → Read data
○ POST → Create data
○ PUT/PATCH → Update data
○ DELETE → Remove data

● Data is usually exchanged in JSON format.

## 2 Client-Server Architecture

● Separation between client (frontend/UI) and server (backend/data).
● Client handles presentation (UI/UX).
● Server handles data storage and processing.
● Benefits → better scalability, portability, and separation of concerns

## 3 Statelessness

● Every HTTP request from client to server must contain all the information
needed to understand and process it.
● The server does not store client state between requests.
● Example: Login sessions are maintained with tokens (JWT), not stored
server-side.

## 4. Cacheability

● Responses from the server must define themselves as cacheable or not.
● Clients (or intermediaries like CDNs) can store cacheable responses →
improves performance.
● Example: Static assets (images, CSS, JS) can be cached.

## 5. Uniform Interface

● A consistent way to interact with resources.
● Four sub-constraints:

1. Resource identification → Each resource has a unique URI
   (/users/1).
2. Resource manipulation through representations → JSON/XML is
   used to transfer data.
3. Self-descriptive messages → Requests include all info (headers, body,
   methods).
4. HATEOAS (Hypermedia as the Engine of Application State) →
   Responses may include links to related resources.

## 6 Layered System

● REST APIs may consist of multiple layers (security, load balancing, caching,
etc.).
● Client doesn’t need to know if it’s talking directly to the server or through an
intermediary.
● Example: A request may pass through a proxy or gateway but still works the
same way.

## 7 Code on Demand (Optional)

● Servers can provide executable code to clients.
● Example: Sending JavaScript to be executed by the browser.
● This is optional (not required in most APIs).
