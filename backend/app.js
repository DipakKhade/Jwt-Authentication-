import express from 'express'
import cors from 'cors'
import { siteConfig } from './sitedata/siteConfig.js';
import Jwt  from 'jsonwebtoken';
import {z} from 'zod'

const app=express();

app.use(cors());


app.use(express.json());


// signup zod schema 
const zsignup= z.object({
    email:z.string().email(),
    password:z.string().min(8)

})

//give tokens to users

app.post('/signuptoken',function(req,res){
    const reqbody=req.body
    const userData=zsignup.safeParse(reqbody)
    console.log(userData)
  
if(!userData.success){
    res.json({'message':'add right information'})
    console.log(userData.error)
}
else{
    const token=Jwt.sign(userData.data,'scretekeyforjet')
    res.json({'token':token})
}
   
})




// vrifying the tokens
app.get('/verifytoken',function(req,res){
    const userToken=req.headers.authentication
   const verification=Jwt.verify(userToken,'scretekeyforjet',(err, decoded) => {
    if (err) {
     
      console.error('Invalid token');
      res.json({'status':'fail'})
    } else {
      
      console.log('Token is valid');
    res.json({'status':'success'})
    }})
  
})


app.listen(3000,function(){
    console.log('server is up and running ...')
})