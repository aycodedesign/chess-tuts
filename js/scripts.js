// TRIGGERING THE ANIMATIONS

	// SECTION 1 ONLY

function image_click() {
	$('#sect1 img.board').removeClass('offstage');
}

$('#sect1 img.board').click(image_click);


	// ALL IMAGES

function all_image_click() {
	$(this).removeClass('offstage');
}
$('.inview-block img').click(all_image_click);


// GET THE 'IN VIEWPORT' GOING

function sect1_onStage() {
	if ($('#sect1 .inview-block').is(':in-viewport')) {
		$('#sect1 img.board').removeClass('offstage');
	}
	else {
		$('#sect1 img.board').addClass('offstage');
	}
}

function sect2_onStage() {
	if ($('#sect2 .inview-block').is(':in-viewport')) {
		$('#sect2 img.fifties-1955').removeClass('offstage');
		$('#sect2 img.fifties-car').removeClass('offstage');
	}
	else {
		$('#sect2 img.fifties-1955').addClass('offstage');
		$('#sect2 img.fifties-car').addClass('offstage');

	}
}

function sect3_onStage() {
	if ($('#sect3 .inview-block').is(':in-viewport')) {
		$('#sect3 img.sixties-1962').removeClass('offstage');
		$('#sect3 img.sixties-car').removeClass('offstage');
	}
	else {
		$('#sect3 img.sixties-1962').addClass('offstage');
		$('#sect3 img.sixties-car').addClass('offstage');

	}
}

function sect4_onStage() {
	if ($('#sect4 .inview-block').is(':in-viewport')) {
		$('#sect4 img.sixties-1969').removeClass('offstage');
	}
	else {
		$('#sect4 img.sixties-1969').addClass('offstage');
	}
}

function sect5_onStage() {
	if ($('#sect5 .inview-block').is(':in-viewport')) {
		$('#sect5 img.exige').removeClass('offstage');
	}
	else {
		$('#sect5 img.exige').addClass('offstage');
	}
}

$(window).scroll(sect1_onStage);

$(window).scroll(sect2_onStage);

$(window).scroll(sect3_onStage);

$(window).scroll(sect4_onStage);

$(window).scroll(sect5_onStage);
