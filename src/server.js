const express = require('express');
const bodyParser = require('body-parser');

//create app
const app = express()
const PORT = process.env.PORT || 3000;

//parse request content

//app.use(bodyParser.urlencoded({extend:true}));
app.use(bodyParser.json());


app.get('/',(req, res) => {
    res.json({"meaasage":"welcome to Sticky Note"});
});

app.listen(PORT, ()=>{
    console.log(`Server Listening to port ${PORT}`);
})
