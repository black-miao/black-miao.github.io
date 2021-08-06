let container = document.querySelector('.container');
let browseImg = document.querySelector('.browseImg');
let bimg = document.querySelector('.browseImg img');
let nextBtn = document.querySelector('.nextPage');
let previousBtn = document.querySelector('.previousPage');
let tiltle = document.querySelector('.tiltle');
let tPage = 0;
let p = page(70);

//跳转到查看图片
function browse(src) {
    browseImg.style.display = 'block';
    browseImg.style.top = document.documentElement.scrollTop + 'px';
    browseImg.addEventListener('click', () => back());
    bimg.alt = src;
    bimg.src = src;
    document.body.style.overflow = 'hidden';
}

//从查看图片页面返回到列表
function back() {
    browseImg.style.display = 'none';
    bimg.alt = '';
    bimg.src = '';
    document.body.style.overflow = 'auto';
}

//加载图片到网页
function add(num, i) {
    if (num != 0) {
        let item = document.createElement('div');
        let img = document.createElement('img');
        item.className = 'item';
        img.alt = '图片';
        img.src = 'pic/pic (' + i + ').jpg';
        img.addEventListener('click', (e) => { browse(e.target.src) });
        item.style.opacity = 0;
        item.appendChild(img);
        container.appendChild(item);
        setTimeout((item) => {
            item.style.opacity = 1;
            add(num - 1, i + 1)
        }, 100, item);
    }
}

//计算页面数
function page(num) {
    let page = Math.floor(num / 12) + 1;
    let lastPage = num % 12;
    return { page: page, lastPage: lastPage };
}

function loadNextPage() {
    cleanUp();
    tPage++;
    if (tPage === p.page) {
        nextBtn.style.display = 'none';
        add(p.lastPage, 12 * (tPage - 1));
    } else if (tPage === 1) {
        add(12, 12 * (tPage - 1));
    } else {
        previousBtn.style.display = 'block';
        add(12, 12 * (tPage - 1));
    }
}

function loadPreviousPage() {
    cleanUp();
    tPage--;
    if (tPage === 1) {
        previousBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'block';
    }
    add(12, 12 * (tPage - 1));
}

function cleanUp() {
    while(container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}

nextBtn.addEventListener('click', loadNextPage);
previousBtn.addEventListener('click', loadPreviousPage);
tiltle.addEventListener('click',() => window.open('timer.html', 'timer'));
loadNextPage();
