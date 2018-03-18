/*-------------------------------------
| CHARACTERS | Slide 1
-------------------------------------*/
function set_the_stage() {
    $('.start').stop().css({ 'top': '0px' });

    $('.background').stop().css({ 'top': '-600px' });

    $('.pawn1').stop().css({ 'left': '-100px' });
    $('.pawn2').stop().css({ 'left': '-100px' });
    $('.pawnsign').stop().css({ 'top': '-333px' });

    $('.bishop1').stop().css({ 'left': '-100px' });
    $('.bishop2').stop().css({ 'left': '-100px' });
    $('.bishopsign').stop().css({ 'top': '-333px' });

    $('.knight1').stop().css({ 'left': '-100px' });
    $('.knight2').stop().css({ 'left': '-100px' });
    $('.knightsign').stop().css({ 'top': '-333px' });

    $('.rook1').stop().css({ 'left': '-100px' });
    $('.rook2').stop().css({ 'left': '-100px' });
    $('.rooksign').stop().css({ 'top': '-333px' });

    $('.queen1').stop().css({ 'left': '-100px' });
    $('.queen2').stop().css({ 'left': '-100px' });
    $('.queensign').stop().css({ 'top': '-333px' });

    $('.king1').stop().css({ 'left': '-100px' });
    $('.king2').stop().css({ 'left': '-100px' });
    $('.kingsign').stop().css({ 'top': '-333px' });
}

set_the_stage();

/*-------------------------------------
| Pawns | Slide2
-------------------------------------*/
function slide2() {
    $('.start').animate({ 'top': '-600px' }, 2000);

    $('.pawn1').animate({ 'left': '305px' }, 1500);
    $('.pawn2').animate({ 'left': '602px' }, 1500);
    $('.pawnsign').animate({ 'top': '-100px' }, 2000);

    $('.bishop1').animate({ 'left': '-100px' }, 500);
    $('.bishop2').animate({ 'left': '-100px' }, 500);
    $('.bishopsign').animate({ 'top': '-333px' }, 750);
}

/*-------------------------------------
| Bishops | Slide3
-------------------------------------*/
function slide3() {

    $('.pawn1').animate({ 'left': '1100px' }, 500);
    $('.pawn2').animate({ 'left': '1100px' }, 500);
    $('.pawnsign').animate({ 'top': '-333px' }, 750);

    $('.bishop1').animate({ 'left': '305px' }, 1000);
    $('.bishop2').animate({ 'left': '602px' }, 1000);
    $('.bishopsign').animate({ 'top': '-100px' }, 2000);

    $('.knight1').animate({ 'left': '-100px' }, 500);
    $('.knight2').animate({ 'left': '-100px' }, 500);
    $('.knightsign').animate({ 'top': '-333px' }, 750);
}

// slide3();

/*-------------------------------------
| Knights | Slide4
-------------------------------------*/
function slide4() {

    $('.bishop1').animate({ 'left': '1100px' }, 500);
    $('.bishop2').animate({ 'left': '1100px' }, 500);
    $('.bishopsign').animate({ 'top': '-333px' }, 750);

    $('.knight1').animate({ 'left': '305px' }, 1000);
    $('.knight2').animate({ 'left': '602px' }, 1000);
    $('.knightsign').animate({ 'top': '-100px' }, 2000);

    $('.rook1').animate({ 'left': '-100px' }, 500);
    $('.rook2').animate({ 'left': '-100px' }, 500);
    $('.rooksign').animate({ 'top': '-333px' }, 750);
}

// slide4();

/*-------------------------------------
| Rooks | Slide5
-------------------------------------*/
function slide5() {

    $('.knight1').animate({ 'left': '1100px' }, 500);
    $('.knight2').animate({ 'left': '1100px' }, 500);
    $('.knightsign').animate({ 'top': '-333px' }, 750);

    $('.rook1').animate({ 'left': '305px' }, 1000);
    $('.rook2').animate({ 'left': '602px' }, 1000);
    $('.rooksign').animate({ 'top': '-100px' }, 2000);

    $('.queen1').animate({ 'left': '-100px' }, 500);
    $('.queen2').animate({ 'left': '-100px' }, 500);
    $('.queensign').animate({ 'top': '-333px' }, 750);
}

/*-------------------------------------
| Queens | Slide6
-------------------------------------*/
function slide6() {

    $('.rook1').animate({ 'left': '1100px' }, 500);
    $('.rook2').animate({ 'left': '1100px' }, 500);
    $('.rooksign').animate({ 'top': '-333px' }, 750);

    $('.queen1').animate({ 'left': '305px' }, 1000);
    $('.queen2').animate({ 'left': '602px' }, 1000);
    $('.queensign').animate({ 'top': '-100px' }, 2000);

    $('.king1').animate({ 'left': '-100px' }, 500);
    $('.king2').animate({ 'left': '-100px' }, 500);
    $('.kingsign').animate({ 'top': '-333px' }, 750);
}

/*-------------------------------------
| Kings | Slide7
-------------------------------------*/
function slide7() {

    $('.queen1').animate({ 'left': '1100px' }, 500);
    $('.queen2').animate({ 'left': '1100px' }, 500);
    $('.queensign').animate({ 'top': '-333px' }, 750);

    $('.king1').animate({ 'left': '305px' }, 1000);
    $('.king2').animate({ 'left': '602px' }, 1000);
    $('.kingsign').animate({ 'top': '-100px' }, 2000);
}

/*-------------------------------------
| ARROWS
-------------------------------------*/
// Default
var currentSlide = 1;

// add 1
function right_arrow_click() {
    currentSlide = currentSlide + 1;
    if (currentSlide == 8) {
        currentSlide = 7;
    }
    console.log(currentSlide);

    move_to_slide();
}
$('.arrow.right').click(right_arrow_click);

// subtract 1
function left_arrow_click() {

    currentSlide = currentSlide - 1;
    if (currentSlide == 0) {
        currentSlide = 1;
    }
    console.log(currentSlide);

    move_to_slide();
}
$('.arrow.left').click(left_arrow_click);

/*-------------------------------------
| Move to Chosen Slide
-------------------------------------*/
function move_to_slide() {
    if (currentSlide == 1) {
        set_the_stage();
    } else if (currentSlide == 2) {

        slide2();
    } else if (currentSlide == 3) {

        slide3();
    } else if (currentSlide == 4) {

        slide4();
    } else if (currentSlide == 5) {

        slide5();
    } else if (currentSlide == 6) {

        slide6();
    } else if (currentSlide == 7) {

        slide7();
    }
}
