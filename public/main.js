var port = 3000; // Указываем порт на котором у на стоит сокет
var socket = io.connect('http://192.168.22.239:' + port); // Тут мы объявляем "socket" (дальше мы будем с ним работать) и подключаемся сразу к серверу через порт

socket.on('connect', function(){
	console.log('connect establish!');
    
  });

socket.on('userName', function(userName){ // Создаем прослушку 'userName' и принимаем переменную name в виде аргумента 'userName'
console.log('You\'r username is => ' + userName); // Логгирование в консоль браузера
$('textarea').val($('textarea').val() + 'You\'r username => ' + userName + '\n'); // Выводим в поле для текста оповещение для подключенного с его ником
});

socket.on('newUser', function(userName){ // Думаю тут понятно уже =)
console.log('New user has been connected to chat | ' + userName); // Логгирование
$('textarea').val($('textarea').val() + userName + ' connected!\n'); // Это событие было отправлено всем кроме только подключенного, по этому мы пишем другим юзерам в поле что 'подключен новый юзер' с его ником
});
socket.on('message', function(userName){ // Думаю тут понятно уже =)
console.log(userName); // Логгирование
$('textarea').val($('textarea').val() + userName + '\n' ); // Это событие было отправлено всем кроме только подключенного, по этому мы пишем другим юзерам в поле что 'подключен новый юзер' с его ником
});
/* socket.on("image", function(image, buffer) {
     if(image)
     {
         console.log(" image: from client side");
         // code to handle buffer like drawing with canvas** <--- is canvas drawing/library a requirement?  is there an alternative? another quick and dirty solution?
        console.log(image);
        // what can we do here to serve the image onto an img tag?
     }

 }); */

 
 socket.on("image", function(info) {
  if (info.image) {
    var img = new Image();
    img.src = 'data:image/jpeg;base64,' + info.buffer;
	//$('#theDiv').append('<img id="theImg" src="'+img.src+'" />')
	//$("#cam").attr("src","");
	var element=document.getElementById(info.filename);
	if(!element){
		$('div#cameras').append('<span style="display:block-inline" id="'+info.filename+'"><img src="'+img.src+'" id="img-'+info.filename+'" onerror="this.src=\'gold.gif\'"></span>');

	} 
	else {
		$( "span#"+info.filename ).replaceWith( '<img src="'+img.src+'" id="'+info.filename+'" onerror="this.src=\'gold.gif\'">' );

		//$('img#'+info.filename).attr("src","");
		//$('img#'+info.filename).attr("src",img.src);
		
	}

	//$( "div#" + info.filename ).replaceWith( '<img src="'+img.src+'">' );
	//$("#cam").attr("src",img.src);
	//delete img;
    //ctx.drawImage(img, 0, 0);
	//console.log(img.src);
  }
});
 
/* $(function(){
  var socket = io.connect('http://0.0.0.0:5001');

  socket.on('connect', function(){
    var delivery = new Delivery(socket);

    delivery.on('receive.start',function(fileUID){
      console.log('receiving a file!');
    });

    delivery.on('receive.success',function(file){
      if (file.isImage()) {
        $('img').attr('src', file.dataURL());
      };
    });
  });
}); */