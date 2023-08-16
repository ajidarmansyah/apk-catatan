const burgerBtn = document.querySelector('.tombol-burger');
const sideBar = document.querySelector('.sidebar');
const iconSidebar = document.querySelectorAll('.catatan');
const iconContant = document.querySelectorAll('.icon-contant')

function sidebarEffect() {
    sideBar.classList.toggle('sidebar-effect');
    iconSidebar.forEach(el => el.classList.toggle('iconeffect'));
    iconContant.forEach(el => {
        el.classList.toggle('hidden');
        el.classList.toggle('block');
    });

};

iconSidebar.forEach((elemen) => {
    elemen.addEventListener('click', function () {
        iconSidebar.forEach( el => {
            el.classList.remove('selected');
            el.classList.remove('click');
        });
        this.classList.add('selected');
        this.classList.add('click');
    });
});

burgerBtn.addEventListener('click', sidebarEffect);