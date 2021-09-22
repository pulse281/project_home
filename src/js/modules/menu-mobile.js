const menuMobile = (hederSelector, hamSelector, menuSelector, layoutSelector, activeClass) => {
    const header = document.querySelector(hederSelector),
          menu = document.querySelector(menuSelector),
          layout = document.querySelector(layoutSelector);

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target.closest(hamSelector)) {
            changeMenu();
            return;
        }
        if (target == layout) {
            changeMenu();
        }

    });
  
    function changeMenu() {
        if (menu.classList.contains(activeClass)) {
            layout.classList.remove(activeClass);
            menu.classList.remove(activeClass);
            document.body.style.overflow = 'auto';
            return;
        }
        layout.classList.add(activeClass);
        menu.classList.add(activeClass);
        document.body.style.overflow = 'hidden';

    }    
};

export default menuMobile;