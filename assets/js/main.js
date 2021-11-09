document.addEventListener("DOMContentLoaded", () => {

    const wheelDirection = (e) =>  {


        return e.wheelDelta > 0 ? 'up' : 'down';
    }

    document.addEventListener('wheel', function (e){
        wheelDirection(e);
        console.log(wheelDirection(e))
        shouldCareScrollLock(wheelDirection(e));
    });




    const menuCheckbox = document.querySelector(".menu__checkbox");
    const menuContent = document.querySelector(".menu__content");

    menuCheckbox.addEventListener('change', e => {
        if (e.currentTarget.checked) {
            menuContent.classList.add("menu__content--active");
        } else {
            menuContent.classList.remove("menu__content--active");
        }
    });


    const company_items = document.querySelectorAll('.company-items__item');
    const company_block = document.querySelector('.company');
    const should_care = document.querySelector('.should-care');
    const body = document.querySelector('body');

    const scrollAnimation = () => {
        let windowCenter = (window.innerHeight / 2) + window.scrollY;

        company_items.forEach(el => {
            let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
            if (windowCenter >= scrollOffset) {
                el.classList.add('company-animations');
                company_block.classList.add('company-animations');
            } else {
                el.classList.remove('company-animations');
                company_block.classList.remove('company-animations');
            }
        });
    };

    const shouldCareScrollLock = (direction) => {
        let windowCenter = (window.innerHeight / 2) + window.scrollY;


        let scrollOffset = should_care.offsetTop + (should_care.offsetHeight / 2);
        console.log(direction);
        console.log(windowCenter);
        console.log(scrollOffset);
        if (windowCenter >= scrollOffset && direction === "down") {
            should_care.style.background = "red";
            body.style.overflow = "hidden";

        } else {
            should_care.style.background = "yellow";
            body.style.overflow = "initial";

        }


    };



    scrollAnimation();
    shouldCareScrollLock();

    window.addEventListener('scroll', (e) => {
        shouldCareScrollLock();
        scrollAnimation();
        shouldCareScrollLock(wheelDirection(e));

    });










});





