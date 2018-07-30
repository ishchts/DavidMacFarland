$(document).ready(function(e) {
	$('.js-popUp').dialog({
		modal : true,
		autoOpen : false,
		buttons : {
			"Добавить" : function () {
				var $input = $('form').find('#task');
				if ($input.val()) {
					var newHtml = ('<li>');
					newHtml += '<span class="one">' + '</span>';
					newHtml += '<span class="two">' + '</span>';
					newHtml += '<span class="three">' + '</span>' + '</li>';
					var $newHtml = $(newHtml);
					$newHtml.find('.three').text($input.val());
					$newHtml.hide();
					$('#todo-list').append($newHtml);
					$newHtml.fadeIn();
				} 
			},
			"Не добавить" : function () {
				$(this).dialog('close');
			}
		}
	});

	$('.js-addBtn').button({
		icons : {
			primary : "ui-cion-circle-plus"
		}
	}).click(function(e){
		e.preventDefault();
		$('.js-popUp').dialog('open');
	});

}); // end ready