const express = require('express')



const app=express()

app.get('/',(req,res)=>{
    res.status(404).send({
        error : " Page not found",
        name : "Todo app v0.0"
    });
})

app.get('/users',(req,res)=>{
    res.status(200).send([
        {name: 'Palak' , age: 20 },
        {name: 'Nayan' , age: 25 },
        {name: 'Pramod' , age: 57 }
        
    ])
})

app.listen(3000,()=>{
    console.log('server listening on port 3000')
})

module.exports={
    app
}