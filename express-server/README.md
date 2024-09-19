1- istall dependencies with "npm i"
2- start the server on port 3000 by running "npm start"
3- test the endpoints:
  a- first endpoint is: http://localhost:3000/ "GET" method it returns "Welcome to my Express app!"
  
  b- second endpoint: "GET"  "http://localhost:3000/:name" name hare is a prameter when is set the returned data is "Hello {name}" for example for this request GET "http://localhost:3000/jhon" it returns "Hello jhon"

  c- third endpoint: "POST" "http://localhost:3000/echo" it returns the data sent in the request body example:
   curl -X POST  http://localhost:3000/echo\
    -H "Content-Type: application/json" \
    -d '{
      "name": "jhon doe"
    }'

it return {"name": "jhon doe"}