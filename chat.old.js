﻿var express = require('express'); // Подключаем express
var app = express();
var fs = require('fs'); // required for file serving
var foldername = '/var/www/thumb/';
var server = require('http').Server(app); // Подключаем http через app
var io = require('socket.io')(server); // Подключаем socket.io и указываем на сервер
var log4js = require('log4js'); // Подключаем наш логгер
var logger = log4js.getLogger(); // Подключаем с модуля log4js сам логгер
var port = 3000; // Можно любой другой порт

logger.debug('Script has been started...'); // Логгируем.
server.listen(port); // Теперь мы можем подключиться к нашему серверу через localhost:3000 при запущенном скрипте
//app.use(express.static(__dirname + '/public')); // Отправляет "статические" файлы из папки public при коннекте // __dirname - путь по которому лежит chat.js

io.on('connection', function (socket) {
	var blockedFiles;
 	var name = 'U' + (socket.id).toString().substr(1,4); // Создаем никнейм нашему клиенту. В начале буква 'U' дальше берем 3 символа ID (сокета) после первого символа, и все это клеим с помощью '+'
	
	//socket.broadcast.emit('newUser', name); // Отсылает событие 'newUser' всем подключенным, кроме текущего. На клиенте навешаем обработчик на 'newUser' (Отправляет клиентам событие о подключении нового юзера)
	//socket.emit('userName', name); // Отправляем текущему клиенту событие 'userName' с его ником (name) (Отправляем клиенту его юзернейм)

	socket.on('username', function(msg){
		logger.info(msg + ' connected');
	});
	socket.on('message', function(msg){ // Обработчик на событие 'message' и аргументом (msg) из переменной message
		logger.warn('-----------'); // Logging
		logger.warn('User: ' + name + ' | Message: ' + msg);
		logger.warn('====> Sending message to other chaters...');
		io.sockets.emit('messageToClients', msg, name); // Отправляем всем сокетам событие 'messageToClients' и отправляем туда же два аргумента (текст, имя юзера)
	});
	
	socket.on('files-block', function(msg) {
		//console.log(msg);
		blockedFiles = msg;
		fs.readdir(foldername, function(err, items) {
			//logger.warn(items);
			socket.emit('files', arrayComparison(items, blockedFiles));
		});
	});
	
	
	
	
	
	fs.watch(foldername, (eventType, filename) => {
		//logger.info(blockedFiles);
		//logger.info(filename);
		file = filename.replace(".jpg", "");
		//console.log(checkFileArray(blockedFiles, file));
		if(checkFileArray(blockedFiles, file))
		{
			logger.info('send file ' + file );
			fs.readFile(foldername + filename, function(err, buf){
				if(typeof buf !== "undefined")
				{socket.emit('image', {filename: filename, image: true, buffer: buf.toString('base64') });}
				
			});
		}
		else{
			logger.info('dont send file ' + file );
		}
		
	});
	
	
});

var checkFileArray = function (fileArray, file){
	if (typeof fileArray !== "undefined")
		{
			//logger.info(fileArray.indexOf(file));
			if(fileArray.indexOf(file) >= 0)
			{
				//logger.warn("not for this user");
				return false;
			}
			return true;
			
		}
		//return true;
}

function arrayComparison(arr1,arr2){
     /*
      * resultArr1 - общие элементы
      * resultArr2 - элементы отсутствующие в втором массиве
    */
	//logger.warn('Array 2: ' + arr2);
     var resultArr1 = [],
         resultArr2 = [];
         arr1.map(function(elem){
               if( arr2.indexOf( elem.replace(".jpg", "") ) >= 0 ){
				//   logger.warn('file '+elem+' blocked');
                   resultArr1.push( elem );
               } else
			   {
			//	   logger.error('file '+elem+' not blocked');
                   resultArr2.push(elem);
             }
			   });
		  
		//  console.log('array comparison: ' + resultArr2);
		  return resultArr2;
    //return {
     //     res1 : resultArr1,
    //      res2 : resultArr2
    //}
};
