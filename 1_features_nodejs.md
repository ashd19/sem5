# Explain features of nodejs

f ast execution
c ross platform
s single threaded but highly scalable
e vent driven architecture
A synchronous and non blocking io
S streaming support
J son support
O pen source
N npm

<helps to run javascript outside the browser , i.e locally on the computer>

## Fast execution

- Built on chromes v8 javascript engine
- Compiles js code into native machine code
- Provides very high speed for request handling

## Cross Platform

- Nodejs runs on various platforms (windows, linux, mac os) and more
- Applications built on nodejs can pacakged and deployed across multiple platforms easily.

## NPM (Node Package Manager)

- npm is the default package manager for nodejs
- Comes with a huge ecosystem of of over 2 million packages.
- Developers can easily install frameworks with a single command
  npm install <package-name>
  Eg. Expressjs for backend and Socket.io for real time communication
  npm install express , npm install socket.io

## Open source and community support

- Nodejs is open-source and maintained by a large community of developers.
- Frequent updates , security patches and new packages are contributed daily.

## JSON support

- Nodejs applications can easily exchange data with JSON format.
- Makes it easier to integrate with APIs , databases like mongodb which use JSON natively and frontend applications.

## Streaming Support

- Nodejs handles streaming data efficiently.
- Example : uploading a video while processing it at the same time.
- Useful for media streaming platforms like youtube , netflix etc.

## Event-driven architecture

- Nodejs is based on an event-driven architecture.
- Uses the EventEmitter module to handle asynchronous events.
- perfect for real time apps like chat apps , gaming applications

## Asynchronous and Non-blocking I/O

- Nodejs uses an event-driven , non-blocking I/O model.
- It does not wait for one operation to complete before starting another.
- Example : reading a file from disk while handling incoming requests.
- thus really helpful in handling multiple requests at a time.

## Single threaded but highly scalable

- Works on a single thread but highly scalable due to its non-blocking I/O model.
- Unlike traditional servers that create a new thread per request , nodejs uses callbacks to handle requests
- This makes it light weight and scalable for large applications.
