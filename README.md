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

## Dockerizartion of both the Frontend and Backend application
  + The Client's Dockerfile [here](./client/Dockerfile) and the Server's Dockerfile [here](./server/Dockerfile) was built.
  + Both the Client and the server dockerfile were built simultaneously using the docker-compose file [here](./docker-compose.yml) by typing the command

        docker-compose up -d

  + Now we have succesfully built the Client and the Server images, we can view this by running 

        docker images
      + Hence, we have two images built

            simple_microservice_app_client
            simple_microservice_app_server
  + We can then run both the images on thesame network for them to communicate with each other.
    + client's container
          
          docker run -d --net talent -p3000:3000 --name client simple_microservice_app_client
    + Server's container

          docker run -d --net talent -p5000:5000 --name server simple_microservice_app_server
  + We can however view the client on the browser by reaching the below url on the browser

        http://localhost:3000/
  + Also, we can view the server on the browser by reaching the below url on the browser

        http://localhost:5000/
    