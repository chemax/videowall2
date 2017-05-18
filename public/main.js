var port = 3000; // Указываем порт на котором у на стоит сокет
var socket = io.connect('http://192.168.22.239:' + port); // Тут мы объявляем "socket" (дальше мы будем с ним работать) и подключаемся сразу к серверу через порт

var createImg = function(name, img="") {
	id = name.replace(".", "_");
	var element=document.getElementById('img-'+id);
	if(!element){
		$('div#cameras').append('<span>'
		+'<img '
		+'src="http://192.168.22.239/thumb/'+name+'" '
		+'id="img-'+id+'" '
		+'class="img-'+id+'" '
		+'onerror="this.src=\'gold.gif\'">'
		+'<a href="http://192.168.22.239/'+name+'" target=_blank class="left_button btn btn-success" role="button">Полная версия</a>'
		+'<a href="#" class="right_button btn btn-danger" role="button">правая</a>'
		+'</span>');
	} 
	else {
		$('#img-'+id).attr("src",img.src);
	}
};

socket.on('connect', function(){
	console.log('connect establish!');
    
  });

socket.on('files', function(files){ 
	for (var i=0; i<files.length; i++) {
			createImg(files[i]);
			console.log(files[i]);
		}
});

 
 socket.on("image", function(info) {
  if (info.image) {
    var img = new Image();
    img.src = 'data:image/jpeg;base64,' + info.buffer;
	createImg(info.filename, img);
	}
});
