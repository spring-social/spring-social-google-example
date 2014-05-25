Spring Social Google Example
============================
Example web app which uses Spring Social Google. 

https://github.com/GabiAxel/spring-social-google

Set up a project at https://console.developers.google.com/ and add the 
OAuth2 client ID and secret to the "google.clientId" and "google.clientSecret"
environment properties when running the app.

To run with Maven:
mvn tomcat7:run -Dgoogle.clientId=CLIENT_ID -Dgoogle.clientSecret=CLIENT_SECRET

The application will be available at http://localhost:8080/