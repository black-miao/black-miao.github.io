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
//add img
add(20)
function add(num) {
    if (num != 0) {
        let item = document.createElement('div');
        let img = document.createElement('img');
        item.className = 'item';
        img.alt = '图片';
        img.src = 'pic/pic ('+num+').jpg';
        item.style.opacity = 0;
        item.appendChild(img);
        container.appendChild(item);
        setTimeout((item) => {
            item.style.opacity = 1;
            add(num - 1);
        }, 100, item);
    } else if (num === 0) {
        let item = document.createElement('div');
        let img = document.createElement('img');
        item.className = 'item';
        img.alt = '图片';
        img.src = 'pic/pic ('+num+').jpg';
        item.style.opacity = 0;
        item.appendChild(img);
        container.appendChild(item);
        setTimeout((item) => {
            item.style.opacity = 1;
        }, 100, item);
    }
}