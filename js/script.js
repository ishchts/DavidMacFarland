
var $example = $('.js-example'),
	$exampleAttrTitle = $example.attr('class').toUpperCase(),
	$exampleDataText = $example.data('text'),
	$exampleTextAfter = $example.data('text-after'),
	$exampleTextBefore = $example.data('text-before'),
	$caption = $('.js-example p');

var $create = '<span style="color: red"> ' + $exampleTextBefore + ' asdasdasdasdasd';

$example.append('<h2>' + $exampleAttrTitle + '</h2>');
$example.prepend('<h2>' + $exampleDataText + '</h2>');

$example.after('<h3>' + $exampleTextAfter + $create +  '</h3>');
$example.before('<h3>' + $exampleTextBefore + '</h3>');

$caption.replaceWith('<h1>' + ' вот это поворот ' + '</h1>');

var $popup  = $('#popup').width(300)
			 .height(300)
			 //.text('окно')
			 .hide()
			 .fadeIn(300)
			 .css({
			 	'background-color' : 'blue',
			 	'border' : ' 1px solid red',
			 	'opacity' : ' 0.5 ',
			 	'color' : 'red',
			 	// 'position' : 'absolute',
			 	// 'margin' : 'auto',
			 	// 'left' : '0',
			 	// 'right' : '0',
			 	// 'top' : '0'
			 });

var popUpBgColor = $popup.css('background-color');


$( "li.third-item" ).nextAll().addBack().css( "background-color", "red" );

var baseFont = $('body').css('font-size');

var newBaseFont = parseInt(baseFont);
