let out = document.querySelector('div');
function add() {
    let img = document.createElement('img');
    img.alt = "123";
    img.src = "cat.jpg";
    img.style.opacity = 0;
    out.appendChild(img);
    setTimeout((img) => {
        img.style.opacity = 1;
    }, 100,img);
}
