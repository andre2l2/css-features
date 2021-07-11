const body = document.querySelector('body');
const $sections = document.querySelectorAll('section');
const progessBar = document.querySelector('#progress');

let totalOfTheSections = $sections.length -1;
let next = 0;

body.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' && next < totalOfTheSections) {
        next++;
        console.log(percent(totalOfTheSections, next));
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

changeAvatar();
