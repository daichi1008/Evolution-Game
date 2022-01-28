const setBtn = document.getElementById(`setBtn`)
const resetBtn = document.getElementById(`resetBtn`)
const showImg = document.getElementById(`showImg`)


setBtn.addEventListener(`click`, function () {
    showImg.innerHTML = '';
    const checkEvo = Math.floor(Math.random() * 10);
    const first = document.createElement('div');
    first.innerHTML = "<img src='./img/evolution1.png' alt='原人'  />";
    showImg.appendChild(first);
    const firstword = document.createElement('p');
    firstword.innerHTML = `原人`;
    first.appendChild(firstword);


    if (checkEvo >= 4) {
        const second = document.createElement('div');
        second.innerHTML = "<img src='./img/evolution2.png' alt='旧人'  />";
        showImg.appendChild(second);
        const secondword = document.createElement('p');
        secondword.innerHTML = `旧人`;
        second.appendChild(secondword);
    }
    if (checkEvo >= 7) {
        const third = document.createElement('div');
        third.innerHTML = "<img src='./img/evolution3.png' alt='新人'/>";
        showImg.appendChild(third);
        const thirdword = document.createElement('p');
        thirdword.innerHTML = `新人`;
        third.appendChild(thirdword);
    }
    if (checkEvo >= 9) {
        const fourth = document.createElement('div');
        fourth.innerHTML = "<img src='./img/evolution4.png' alt='現代人'/>";
        showImg.appendChild(fourth);
        const fouthword = document.createElement('p');
        fouthword.innerHTML = `現代人`;
        fourth.appendChild(fouthword);
    }
});

resetBtn.addEventListener(`click`, function () {
    showImg.innerHTML = "";
});

