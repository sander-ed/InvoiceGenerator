
const express = require('express')
const cors = require('cors')
const services = require('./sale-service')

const app = express()
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Server on board!')
})


app.get('/sales', (req, res) => {
  
  services.get(req, res)  

});

app.get('/sales/:id', (req, res) => {
    const id = req.params.id;
    services.getSale(req, res, id)

})

app.post('/sales', (req, res) => {
    services.post(req, res)
    
});

app.put('/sales/:id', (req, res) => {
    const id = req.params.id;
    services.put(req, res, id)
})

app.delete('/sales/:id', (req, res) => {
    console.log('called!')
    const id = req.params.id;
    services.del(req, res, id)
})


app.listen(5000, () => {
    console.log("Listening on http://localhost:5000")
})


