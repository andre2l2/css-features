const body = document.querySelector('body');
const $sections = document.querySelectorAll('section');
const progessBar = document.querySelector('#progress');

let totalOfTheSections = $sections.length -1;
let next = 0;

body.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' && next < totalOfTheSections) {
        next++;
        progessBar.style.width = `${percent(totalOfTheSections, next)}%`;
    };
    if (e.key === 'ArrowLeft' && next > 0) {
        next--;
        progessBar.style.width = `${percent(totalOfTheSections, next)}%`;
    };

    window.location.href = `#ex${next}`;
});

function percent(total, current) {
    const resp = (current * 100) / total;
    return Math.ceil(resp);
};

function changeAvatar() {
    let change = false;
    const $avatar = document.querySelector('#avatar');
    $avatar.addEventListener('click', () => {
        if (!change) {
            $avatar.src = './img/I.jpg';
            change = true;
        } else {
            $avatar.src = 'https://avatars.githubusercontent.com/u/46267619?v=4';
            change = false;
        }
    })
};

const style = 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)';
console.log('%c Dev!', style);


changeAvatar();
