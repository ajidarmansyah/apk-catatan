// menambahkan effek pada notes
export const judulCatatan = document.getElementById('title');
export const catatan = document.getElementById('catatan');
const addBtn = document.getElementById('add')

judulCatatan.addEventListener('focus', function () {
    this.placeholder = '';
});

judulCatatan.addEventListener('blur', function () {
    this.placeholder = 'Judul Catatan';
});

catatan.addEventListener('focus', function () {
    this.placeholder = '';
});

catatan.addEventListener('blur', function () {
    this.placeholder = 'Catatan';
});

// sistem pada note

let notes = [];

addBtn.addEventListener('click', function () {
    const date = new Date();
    let tanggal = date.getDate();
    let bulan = date.getMonth() + 1;
    let tahun = date.getFullYear();
    let id = Math.floor(Math.random() * 100000) + 1;
    
    const data = {
        "id" : id,
        "judul" : judulCatatan.value,
        "isi catatan" : catatan.value,
        "date" : `${tanggal}/${bulan}/${tahun}`
    };


    notes.push(data);
    judulCatatan.value = '';
    catatan.value = '';
    
    console.log(notes);

})