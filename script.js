

$('button').on('click', function(){
	$.ajax({
	url: 'http://api.openweathermap.org/data/2.5/weather?q=Belgrade,Serbia&appid=2de143494c0b295cca9337e1e96b00e0&units=metric',
	method: 'get',
	success: function(data){

		$('#temp span').text(data.main.temp)
	
	}

});

})