const express = require('express');
const path = require('path');
const ejs = require('ejs');
const pug = require('pug');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3000;

// Register template engines for different extensions
app.engine('ejs', ejs.renderFile);
app.engine('pug', pug.__express);
app.engine('hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views', 'layouts')
}));

// Views folder
app.set('views', path.join(__dirname, 'views'));
// Note: we do NOT set a single default view engine so we can render multiple types by filename

// Static files
app.use('/css', express.static(path.join(__dirname, 'public', 'css')));

// Routes
app.get('/', (req, res) => {
  res.send(`
    <h2>Multiple Templates Example</h2>
    <ul>
      <li><a href="/ejs">EJS example</a></li>
      <li><a href="/pug">Pug example</a></li>
      <li><a href="/hbs">Handlebars example</a></li>
    </ul>
    <p>Open one of the routes above to see the same data rendered with different template engines.</p>
  `);
});

app.get('/ejs', (req, res, next) => {
  res.render('ejs/index.ejs', { title: 'EJS Example', message: 'Rendered with EJS' }, (err, html) => {
    if (err) return next(err);
    res.send(html);
  });
});

app.get('/pug', (req, res, next) => {
  res.render('pug/index.pug', { title: 'Pug Example', message: 'Rendered with Pug' }, (err, html) => {
    if (err) return next(err);
    res.send(html);
  });
});

app.get('/hbs', (req, res, next) => {
  // For Handlebars we rely on the layout in views/layouts/main.hbs
  res.render('handlebars/index.hbs', { title: 'Handlebars Example', message: 'Rendered with Handlebars' }, (err, html) => {
    if (err) return next(err);
    res.send(html);
  });
});

// 404
app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
