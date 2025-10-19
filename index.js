const http = require('http')

const server = http.createServer(function(req,res){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const myhtml = `
        <link href="https://fonts.googleapis.com/css2?family=Imprima&display=swap" rel="stylesheet">
    <style>
        h3 {
            font-family: 'Imprima', sans-serif;
            color:rgb(0, 0, 0);
            font-weight: 200;
        }
    </style>
    <h3>TOURIST ATTRACTIONS IN KHON KAEN SENTIMENT ANALYSIS</h3>
    `;
    res.write(myhtml)
    res.end()
});

server.listen(3000,()=>{
    console.log("Visualization Khon Kean tourist attraction")
})