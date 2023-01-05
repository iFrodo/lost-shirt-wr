const openingBtn = document.querySelector('.sidebar__hamburger')
const closingBtn = document.querySelector('.sidebar__close')
const sidebar = document.querySelector('.sidebar')

const openSidebar = () =>{
    sidebar.classList.add('sidebar--opened')
}
const closeSidebar = () =>{
    sidebar.classList.remove('sidebar--opened')
}
openingBtn.addEventListener("click", openSidebar)

closingBtn.addEventListener("click", closeSidebar)