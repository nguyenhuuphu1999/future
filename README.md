----- API get list comments by postId -------- 
GET http://localhost:5000/posts/1
##
----------- API create a comment --------------
- Note: Authorization is require

POST http://localhost:5000/comments
Authorization: Basic eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9....
Content-Type: application/json

{
    "comment": "string",
    "postId": 1
}
###
------------- Create a Post -------------
POST http://localhost:5000/posts
Content-Type: application/json

{
    "post":"hihi"
}

