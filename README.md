# Simple microservice application
  + This application contains the frontend (client) and the backend (server) microservices built with javascript 
    + node.js and express.js on the server side
    + React framework on the client side
  + The client (frontend) service basically fetch the word **TALENT PLUS** from the backend service using an Application Programming Interface (API) call to the backend service to fetch data.

##  Flow of execution
  + You start up the backend service by changing directory into the server directory and run

        npm run dev
  + You can access the server (backend) service by accessing it on port 5000 on the browser by running 

        http://localhost:5000
  + Open another terminal to run the client side service because it is dependent on the backend service through the API call.
  + Do this by changing the directory to client directory and run:

        npm start
  + We can access our client service on the browser by entering:

        http://localhost:3000
  + That will then fetch the word **"TALENT PLUS"** from the server service through API.