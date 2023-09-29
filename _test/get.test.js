const request =require("supertest");
const express =require("express");
const bodyParser =require("body-parser");

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

test('GET / should return "yello there brother"', async () => {
   const response = await request(app).get('/');
   expect(response.status).toBe(200);
   expect(response.text).toBe('yello there brother');
});