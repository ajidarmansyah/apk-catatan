const submitBtn = document.getElementById('tombol');
const judulType = document.getElementById('judul');
const contantType = document.getElementById('contant-type');
const popUpCardContainer = document.getElementById('pop-up');
const popUpCard = document.querySelector('.pop-up');
const closeBtn = document.getElementById('close-btn');

const notes = [];

function kirimData(e) {
    e.preventDefault();
    let judulCatatan = judulType.value;
    let isiCatatan = contantType.value;
    const konten1 = 'judul belum ditulis, harap mengisi judul catatan!';
    const konten2 = 'anda belum mengisi apapun dalam catatan!'

    if (judulType.value === '') {
        popUpCardContainer.innerHTML = `<div class="pop-up"><div class="title-popup"><p>Massage!</p><span id="close-btn">X</span></div><div class="main-popup"><p>${konten1}</p></div></div>`
    } else if (contantType.value === '') {
        popUpCardContainer.innerHTML = `<div class="pop-up"><div class="title-popup"><p>Massage!</p><span id="close-btn">X</span></div><div class="main-popup"><p>${konten2}</p></div></div>`
    } else {
        const data = {
            judul : judulCatatan,
            note : isiCatatan
        }
        
        notes.push(data);
    }

    
    judulType.value = '';
    contantType.value = '';
};

submitBtn.addEventListener('click', kirimData);

