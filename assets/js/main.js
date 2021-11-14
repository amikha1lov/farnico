document.addEventListener("DOMContentLoaded", () => {

    const wheelDirection = (e) =>  {


        return e.wheelDelta > 0 ? 'up' : 'down';
    }

    document.addEventListener('wheel', function (e){
        wheelDirection(e);
        console.log(wheelDirection(e))
        // shouldCareScrollLock(wheelDirection(e));
    });




    const menuCheckbox = document.querySelector(".menu__checkbox");
    const menuContent = document.querySelector(".menu__content");
    const menuClose = document.querySelector('.menu__content--close');

    menuClose.addEventListener('click', e => {
        menuContent.classList.remove("menu__content--active");
    });

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

    const words_block = document.querySelector('.words');
    const words_items = document.querySelectorAll('.words_item');

    const our_mission = document.querySelector('.our-mission-bottom');
    const our_mission_items = document.querySelectorAll('.mission-card-anim');

/*    const our_missionAnimation = () => {
        let windowCenter = (window.innerHeight / 2) + window.scrollY;

        our_mission_items.forEach(el => {
            console.log(el);
            let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
            console.log(windowCenter);
            console.log(scrollOffset);
            if (windowCenter >= scrollOffset) {
                el.classList.add('mission-animations');
                our_mission.classList.add('mission-animations');
            } else {
                el.classList.remove('mission-animations');
                our_mission.classList.remove('mission-animations');
            }
        });
    };*/

    const scrollAnimation = () => {

        let windowCenter = (window.innerHeight / 2) + window.scrollY;

        company_items.forEach(el => {
            let scrollOffset = el.offsetTop + (el.offsetHeight / 2) - 200;

            if (windowCenter >= scrollOffset) {
                el.classList.add('company-animations');
                company_block.classList.add('company-animations');
            } else {
                el.classList.remove('company-animations');
                company_block.classList.remove('company-animations');
            }
        });


    };

    // const wordsAnimation = () => {
    //
    //     let windowCenter = (window.innerHeight / 2) + window.scrollY;
    //
    //     words_items.forEach((el, index) => {
    //
    //         let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
    //         if (windowCenter >= scrollOffset) {
    //
    //             setInterval(nextStep(el,index), 2000);
    //
    //         } else {
    //
    //         }
    //
    //         function nextStep(el,index){
    //
    //             el.classList.remove('hidden');
    //             el.classList.add('active');
    //             el.closest('.words').classList.remove(`words-step_${index - 1}`);
    //             el.closest('.words').classList.add(`words-step_${index + 1}`);
    //
    //         }
    //     });
    // };



    // const shouldCareScrollLock = (direction) => {
    //     let windowCenter = (window.innerHeight / 2) + window.scrollY;
    //
    //
    //     let scrollOffset = should_care.offsetTop + (should_care.offsetHeight / 2);
    //     console.log(direction);
    //     console.log(windowCenter);
    //     console.log(scrollOffset);
    //     if (windowCenter >= scrollOffset && direction === "down") {
    //         should_care.style.background = "red";
    //         body.style.overflow = "hidden";
    //
    //     } else {
    //         should_care.style.background = "yellow";
    //         body.style.overflow = "initial";
    //
    //     }
    //
    //
    // };



    scrollAnimation();
    // wordsAnimation();
    our_missionAnimation();
    // shouldCareScrollLock();

    window.addEventListener('scroll', (e) => {
        // shouldCareScrollLock();
        scrollAnimation();
        // wordsAnimation();
        our_missionAnimation();
        // shouldCareScrollLock(wheelDirection(e));

    });

    var our_process = new Swiper(".our-process-slider", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });







});





