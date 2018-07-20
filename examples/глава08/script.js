console.log(2);
$(document).change(function(){
	console.log($('#country :selected').text());
});
$(':input:first').focus();
$('#order :radio').on('click',function(){
	var val = $(this).val();
	if (val === 'paypal') {
		$('#creditCard :text').prop('disabled',true);
		$('#creditCard label').css({
			'color' : '#BBB'
		});
	} else {
			$('#creditCard :text').prop('disabled',false);
			$('#creditCard label').css({
				'color' : ''
			});
	}
});
$('.indent :checkbox').on('click',function(){
	console.log(33);
	var $this = $(this);
	if ($this.prop('checked')) {
		$('#shipping :input').prop('disabled', true);
		$('#shipping').slideUp();
	} else {
		$('#shipping :input').prop('disabled', false);
		$('#shipping').slideDown();
	}
});

//08_02.html
console.log('08_02.html');

$('#signup').validate();