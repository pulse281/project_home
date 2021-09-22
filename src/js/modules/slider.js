const slider = (slidsSelector, controlsSelector, counterSelector) => {
    const slids = document.querySelectorAll(slidsSelector),
          controls = document.querySelectorAll(controlsSelector);

    let curent = 1,
        margin = 0,
        allSlids = slids.length;

    const addZero = (num) => {
        if (num < 10 && num > 0) {
            return `0${num}`;
        }
        else {
            return num;
        }
    };

    const counter = (num) => {
        if (num < 1) {
            curent = +allSlids;
        }
        if (num > allSlids) {
            curent = 1;
        }

        document.querySelector('.curent').textContent = addZero(curent);
    };

    const pushSlid = (val) => {
        slids[0].style.marginLeft = `${val}%`;
    };

    document.querySelector('.all').textContent = addZero(allSlids);

    controls.forEach(arrow => {
        arrow.addEventListener('click', (e) => {
            const target = e.target;
            curent += Number(target.getAttribute('data-curent'));
            margin += Number(target.getAttribute('data-margin'));
            counter(curent);

            if (margin < (1 - allSlids) * 100) {
                margin = 0;
                pushSlid(margin);
                return;
            }
            if (margin > 0) {
                margin = (1 - allSlids) * 100;
                pushSlid(margin);
                return;
            }

            pushSlid(margin);
        });
    });

};

export default slider;