$(document).ready(function(e) {
	$('.js-popUp').dialog({
		modal : true,
		autoOpen : false,
		buttons : {
			"Добавить" : function () {

				let $input = $('form').find('#task');

				if ($input.val()) {
					const $this = $(this);
					let newHtml = ('<li>');

					newHtml += '<span class="done js-done">'+ '%' + '</span>';
					newHtml += '<span class="delete">' + 'x' + '</span>';
					newHtml += '<span class="task">' + '</span>' + '</li>';

					let $newHtml = $(newHtml);

					$newHtml.find('.task').text($input.val());
					$newHtml.hide();

					$('#todo-list').append($newHtml);
					$newHtml.fadeIn();
					$input.val('');
					$this.dialog('close');
				} 
			},
			"Не добавить" : function () {
				$(this).dialog('close');

				let $input = $('form').find('#task').val('');

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

	$(document).on('click', '.js-done', function (e) {
		e.preventDefault();

		let $this = $(this),
			$parent = $this.parent('li');

		$parent.slideUp(function(){
			var $detach = $(this).detach();
			$('.js-completed-list').append($detach);
			$detach.slideDown();

		});

	});
	$('.js-sortable').sortable({
		connectWith: '.js-sortable',
		cancel: '.done,.delete'
	});
}); // end ready