const btn = () => {
    const btn = document.querySelectorAll('.btn'),
    arrow = document.querySelectorAll('.btn__arrow');

        btn.forEach((item, i) => {
        item.addEventListener('mouseover', (e) => {
            arrow[i].style.paddingLeft = '20px';
        });
        
        item.addEventListener('mouseleave', (e) => {
            arrow[i].style.paddingLeft = 0;
        });
    });

};

export default btn;