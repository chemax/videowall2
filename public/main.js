var port = 3000; // Указываем порт на котором у на стоит сокет
var socket = io.connect('http://192.168.22.239:' + port); // Тут мы объявляем "socket" (дальше мы будем с ним работать) и подключаемся сразу к серверу через порт
var imgW = 200;
var imgH = 150;



var createImg = function(name, img="") {
	id = name.replace(".", "_");
	backgroundClass = name.replace(/-.+/, "").replace(/_.+/, "");
	console.log(backgroundClass);
	var element=document.getElementById('img-'+id);
	if(!element){
		$('div#cameras').append('<span class="'+backgroundClass+'" style="width:'+imgW+'; height:'+imgH+'">'
		+'<img width="'+imgW+'" height="'+imgH+'"'
		+'src="http://192.168.22.239/thumb/'+name+'" '
		+'id="img-'+id+'" '
		+'class="preview" '
		+'onerror="this.src=\'gold.gif\'">'
		+'<a onclick="PopUpShow(this)" target=_blank class="left_button btn btn-success" role="button" data-tooltip="'+id+'"><span class="glyphicon glyphicon-zoom-in"></span></a>'
		//+'<a href="#" class="right_button btn btn-danger" role="button">правая</a>'
		+'</span>');
	} 
	else {
		$('#img-'+id).attr("src",img.src);
		$('#img2-'+id).attr("src",img.src);
		console.log('img-'+id);
	}
};


socket.on('connect', function(){
	console.log('connect establish!');
  });

socket.on('files', function(files){ 
	for (var i=0; i<files.length; i++) {
			createImg(files[i]);
			//console.log(files[i]);
		}
});

socket.on("image", function(info) {
  if (info.image) {
    var img = new Image();
    img.src = 'data:image/jpeg;base64,' + info.buffer;
	createImg(info.filename, img);
	}
});

$(document).ready(function(){
    PopUpHide();
});

function PopUpShow(e){
	//e.preventDefault();
	console.log(e.getAttribute('data-tooltip'));
	data_tooltip = e.getAttribute("data-tooltip");
	src = 'http://192.168.22.239/' + data_tooltip.replace(/_jpg/, ".jpg");
	//$('#img-'+data_tooltip).attr('src');
	//console.log($('#img-'+data_tooltip).attr('src'));
	$('img.popup-img').replaceWith('<img class="popup-img" src="'+src+'" width="800" align="center" id="img2-'+data_tooltip+'" onerror="this.src=\'gold.gif\'">');
	//console.log(data_tooltip);
    $("#popup1").show();
}
function PopUpHide(){
	$('img.popup-img').replaceWith('<img class="popup-img">');
    $("#popup1").hide();
}

$(document).mouseup(function (e) {
    var container = $("div.b-popup-content");
    if (container.has(e.target).length === 0){
		PopUpHide();
        //container.hide();
    }
});