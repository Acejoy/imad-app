var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));



var articles={
    'article-one' :{
    title:'Article One|Srinjoy',
    heading:'Article One',
    content:`
                <p>
                    The road to success and the road to failure are almost exactly the same.
                    Colin R. Davis
                </p>
                <p>
                    The road to success and the road to failure are almost exactly the same.
                    Colin R. Davis
                </p>`
},


    'article-two':{
    title:'Article Two|Srinjoy',
    heading:'Article Two',
    content:`
            <p>
                Whenever you see a successful person you only see the public glories, never the private sacrifices to reach them.
                Vaibhav Shah
            </p>
            <p>
                The road to success and the road to failure are almost exactly the same.
                Colin R. Davis
            </p>`
},


    'article-three':{
    title:'Article Three|Srinjoy',
    heading:'Article Three',
    content:`<p>
               Keep on going, and the chances are that you will stumble on something, perhaps when you are least expecting it.
               Charles F. Kettering
            </p>
            <p>
                The road to success and the road to failure are almost exactly the same.
                Colin R. Davis
            </p>`
                
}

};
function createtemplate(data) {
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
    var htmltemplate=`
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width-device-width, initial-scale=1" /> 
             <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div >
                    <a href="/">${heading}</a>
                </div>
                <hr/>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    
    return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter', function (req,res){
    counter= counter +1;
    res.send(counter.toString());
});

var names=[];
app.get('/submit-name/:name' , function(req,res){
   var name=req.query.name;
   names.push(name);
   res.send(JSON.stringify(names));
});



app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
   res.send(createtemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
