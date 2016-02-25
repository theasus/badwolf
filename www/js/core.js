//universal functions
function AlertHandler(){
        // Codes 
}

//Allow Cross domain calls
$( document ).bind( "mobileinit", function() {
			'use strict';
			$.mobile.allowCrossDomainPages = true;
});


//core jquery functions
$(document).ready(function(){
	'use strict';
	$.support.cors = true;
	
	$('.test-button.xml').click(function(){
		
		//navigator.notification.alert('Calling acellerometer', AlertHandler, 'Calling acellerometer', 'Exit');
		
		$.ajax({
			url:'http://phone.cleinman.com/middleware/callers/core_check.php',
			method:'GET',
			dataType:"xml",
			success:function(xml){
				//navigator.notification.alert('Calling XML', AlertHandler, 'Got it!', 'Exit');
				$('#dynamic').html($(xml).find('return').html());
				$('#dynamic').listview().trigger( "create" );
			},
			error:function(xhr, ajaxOptions, thrownError){
				navigator.notification.alert('Calling XML', AlertHandler, 'Errored out man', 'Exit');
				}
			});
		
		 
		});


		$('.test-button.json').click(function(){
		
		
		$.ajax({
			url:'http://phone.cleinman.com/middleware/callers/core_check_json.php',
			method:'GET',
			dataType:"json",
			success:function(){
				navigator.notification.alert('Calling JSON', AlertHandler, 'Got it!', 'Exit');
			},
			error:function(xhr, ajaxOptions, thrownError){
				navigator.notification.alert('Calling JSON', AlertHandler, 'Errored out man', 'Exit');
				}
			});
		
		 
		});
		
		$('.test-button.chart').click(function(){
		
		
		$.ajax({
			url:'http://phone.cleinman.com/middleware/tests/pie.js',
			method:'GET',
			dataType:"script",
			success:function(scr){
				pie();
				navigator.notification.alert('Calling Chart', AlertHandler, 'Got it!', 'Exit');
			},
			error:function(xhr, ajaxOptions, thrownError){
				navigator.notification.alert('Calling chart', AlertHandler, 'Errored out man', 'Exit');
				}
			});
		
		 
		});
		


});