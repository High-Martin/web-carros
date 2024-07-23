import express from 'express';
import path from 'path';


const app = express();
const port = 3000;

// Servir arquivos estáticos da pasta 'assets'
app.use('/assets', express.static(path.join(__dirname, '../assets')));
app.use('/public', express.static(path.join(__dirname, '../public')));
app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});