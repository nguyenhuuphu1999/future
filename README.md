- Guide
- Start docker
- docker-composer up --build
- 
----- API get list comments by postId -------- 

GET http://localhost:5000/posts/1
-
----------- API create a comment --------------
- Note: Authorization is require

POST http://localhost:5000/comments
##
Authorization: Basic eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9....
##
Content-Type: application/json

{
    "comment": "string",
    "postId": 1
}
-
------------- Create a Post -------------
POST http://localhost:5000/posts
##
Content-Type: application/json
##
{
    "post":"Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration. To learn more about all the features of Compose, see the list of features"
}

