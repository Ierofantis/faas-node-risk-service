# Openfaas service

# Installation instructions

1) Open your terminal and type `docker run  -p 32776:8080 -d -P teopanta1986/calculaterisk`
2) To check how It works you can open Postman/Insomnia client and create a POST request with that url `your_host:32776` and with an example body: `{"airlineRanking":1,"condition":"cloudy"}`
3) The response will be: `{"status":"Received input: 964"}`
