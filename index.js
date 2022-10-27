const express=require('express')
const app=express();
const course=require('./data/catagories.json')
const cors=require('cors')

const port=process.env.PORT || 5000;
app.use(cors())
app.get('/', (req, res) => {
    res.send('News API Running');
  });


  app.get('/categories', (req, res) => {
    res.send(course)
  });
  app.get('/course', (req, res) => {
    res.send(course)
  });
  app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    
  const selectedNews = course.find(n => n.id === id);
  res.send(selectedNews);


  });
  app.get('/catagory /:id', (req, res) => {
    const id = req.params.id;
    
  const selectedNews = course.find(n => n.id === id);
  res.send(selectedNews);
  });
app.listen(port, () => {
    console.log(' Server running on port', port);
  })