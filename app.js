const express = require('express');
const path = require('path');

const app = express();
const PORT = 3002   ;

//Mengatur EJS sebagai template engine
app.set('view engine', 'ejs');

//Menentukan lokasi folder viewa
app.set('views', path.join(__dirname, 'views'));

//Mengaktifkan akses file CSS 
app.use(express.static(path.join(__dirname, 'public')));

//Mengambil routing dari file routes/books.js
const bookRoutes = require('./routes/books');

//Menghubungkan routing ke aplikasi Express
app.use('/', bookRoutes);

//Menjalankan server 
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`)
});