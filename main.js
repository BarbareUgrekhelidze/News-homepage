document.querySelector('.menu-btn').addEventListener('click', open);
document.querySelector('.close-btn').addEventListener('click', close);

function open(e){
    document.querySelector('.menu').classList.add('show');
}

function close(e){
    document.querySelector('.menu').classList.remove('show');
}