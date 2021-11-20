----- API get list comments by postId -------- 
GET http://localhost:5000/posts/1

----------- API create a comment --------------
POST http://localhost:5000/comments
Authorization: Basic eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9....
Content-Type: application/json

{
    "comment": "string",
    "postId": 1
}
