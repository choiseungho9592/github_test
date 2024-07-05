/*

    HTTP response status code  //서버에서 클라이언트에 보내는 상태코드

    sendStatus()        //https://developer.mozilla.org/en-US/

    postman

*/

const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    //res.sendStatus(200)  //OK
    res.sendStatus(400) //Bad Request
})



app.listen(3000, ()=> {
    console.log('start listening on 3000')
})