const express = require('express')   // npm install express --save
const app = express()

app.listen(3000, ()=> {
    console.log('3000포트에서 듣기를 시작했습니다.')
})

//처리해주는 루틴들을 추가 ....
app.get(`/`, (req, res)=>{
    console.log(`===>루트에 대한 요청들어왔음`)
    //res.send('루트에대한 요청')
    res.sendFile(__dirname+'/pages/index.html')
})
app.get(`/about`, (req, res)=>{
    console.log(`===>about에 대한 요청들어왔음`)
    //res.send('about에 대한 요청')
    res.sendFile(__dirname+'/pages/about.html')
})