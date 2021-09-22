const projects = () => {

    //Opacity link layout

    const link = document.querySelector('.projects__item_link'),
          curtain = document.querySelector('.curtain'),
          scroll = calcScroll();

    if (document.documentElement.clientWidth > 1200) {
        link.addEventListener('mouseover', (e) => {
            curtain.style.opacity = 0;
        });
        link.addEventListener('mouseleave', (e) => {
            curtain.style.opacity = '.8';
        });
    }

    // Scale images

    const bigImage = (src) => {
        const div = document.createElement('div');
        div.classList.add('modalImg');
        div.innerHTML = `<img src="${src}" alt="big Photo">`;
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
        document.querySelector('.projects').append(div);

        div.addEventListener('click', closeModal);
    };

    const closeModal = () => {
        document.querySelector('.modalImg').remove();
        document.body.style.overflow = 'auto';
        document.body.style.marginRight = 0;

    };

    const items = document.querySelectorAll('.projects__item');

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }


    if (document.documentElement.clientWidth > 600) {
        items.forEach(item => {
            item.addEventListener('click', (e) => {
                bigImage(item.getAttribute('data-src'));
            });
        });
    }


    
    

};

export default projects;
