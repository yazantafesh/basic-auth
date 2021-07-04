'use strict';

const supergoose = require('@code-fellows/supergoose');
const { app } = require('../src/server');
const request = supergoose(app);


describe('Server Tests', ()=>{

  it('Handles Creating a New User', async ()=>{
    let userObj ={
      username: "yazan",
      password: "1234"
    }
    const response = await request.post('/signup').send(userObj);
    expect(response.status).toEqual(201);
    expect(response.body.username).toEqual("yazan");
  });

  it('Handles Signing in and tests middleware', async ()=>{
    const response = await request.post('/signin').set({"Authorization":"Basic eWF6YW46MTIzNA=="});
    expect(response.status).toEqual(200);
  });
});

