const express= require('express')
const app = express();
const port= 3000;

function isTest(req, res, next){
    if(req.body.isTest){
        next();
        
        
    } else{
        res.status(403).send(`Lo sentimos pero no sos un usuario de tipo test, x lo que no tenes acceso a ${req.url}`);
    }
    return req.body.isTest;
}
app.use(express.json());
app.use(isTest);

app.get('/test', (req,res)=>{
    res.send("Sos un usuario del tipo test");
});



app.listen(port, ()=>{
    console.log(`Example Listening on port ${port}`)
})