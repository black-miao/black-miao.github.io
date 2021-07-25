// function add() {
//     let img = document.createElement('img');
//     img.alt = "123";
//     img.src = "cat.jpg";
//     img.style.opacity = 0;
//     out.appendChild(img);
//     setTimeout((img) => {
//         img.style.opacity = 1;
//     }, 100,img);
// }
let container = document.querySelector('.container');
let browseImg = document.querySelector('.browseImg');
let bimg = document.querySelector('.browseImg img');
//add img
add(10)

function browse(src) {
    browseImg.style.display = 'block';
    browseImg.style.top = document.documentElement.scrollTop + 'px';
    browseImg.addEventListener('click', () => back());
    bimg.alt = src;
    bimg.src = src;
    document.body.style.overflow = 'hidden';
}

function back() {
    browseImg.style.display = 'none';
    bimg.alt = '';
    bimg.src = '';
    document.body.style.overflow = 'auto';
}

function add(num) {
    if (num != -1) {
        let item = document.createElement('div');
        let img = document.createElement('img');
        item.className = 'item';
        img.alt = '图片';
        img.src = 'pic/pic (' + num + ').jpg';
        img.addEventListener('click', (e) => {browse(e.target.src)});
        item.style.opacity = 0;
        item.appendChild(img);
        container.appendChild(item);
        setTimeout((item) => {
            item.style.opacity = 1;
            add(num - 1);
        }, 100, item);
    } 
}