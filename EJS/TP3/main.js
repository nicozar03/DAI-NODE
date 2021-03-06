const express= require('express')
const app = express();
const port= 3000;

function isTest(req, res, next){
    console.log("Ejecutando Middleware");
    if(req.body.isTest==true){
        next();
    } else{
        res.status(403).send(`Lo sentimos pero no sos un usuario de tipo test, x lo que no tenes acceso a ${req.url}`);
    }
    
}   
app.use(express.json());
app.use(isTest);

app.get('/test', (req,res)=>{
    res.send("Sos un usuario del tipo test. Felicidades, lograste pasar la validacion");
});

app.listen(port, ()=>{
    console.log(`Example Listening on port ${port}`)
})