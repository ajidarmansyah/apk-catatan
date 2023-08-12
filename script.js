const burgerBtn = document.querySelector('.tombol-burger');
const sideBar = document.querySelector('.sidebar');
const iconSidebar = document.querySelectorAll('.catatan');

function sidebarEffect() {
    sideBar.classList.toggle('sidebar-effect');

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