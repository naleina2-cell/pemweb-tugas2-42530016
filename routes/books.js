const express= require('express');
const router= express.Router();   

const books= require('../data/books');

// Route halaman katalog buku 
router.get('/', (req,res) => {
    const genre = req.query.genre || '';

    const daftarBuku = genre 
    ? books.filter(buku => buku.genre === genre)
    : books;

    res.render('catalog',{
        title : 'Katalog Buku',
        daftarBuku : daftarBuku,
        genre: genre
    });
});

// Route halaman detail buku 
router.get('/buku/:id', (req,res) => {
    const id = Number(req.params.id);

    const buku = books.find(buku=> buku.id === id);
    if (!buku) {
        return res.status(404).render('not-found', {
            title: 'Buku Tidak Ditemukan'
        });
    }
     res.render('detail', {
        title: buku.judul,
        buku: buku
     });
});
module.exports = router;