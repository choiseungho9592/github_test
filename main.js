const express = require('express')   // npm install express --save
const app = express()

//pages 경로로 들어오는 요청에 대해서는
//로컬 폴더 __dirname : main.js가 있는 폴더 위치
//__dirname + '/pages'
app.use('/scripts', express.static(__dirname+'/scripts'))

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
app.get(`/working`, (req, res)=>{
    console.log(`===>working에 대한 요청들어왔음`)
    //res.send('about에 대한 요청')
    res.sendFile(__dirname+'/pages/working.html')
})