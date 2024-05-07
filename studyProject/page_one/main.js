const sidebar = document.getElementById('open')
const section = document.getElementById('section')

sidebar.onclick = function(){
    console.log('gh')
    section.classList.remove('open-close')
    section.classList.toggle('activate')
}