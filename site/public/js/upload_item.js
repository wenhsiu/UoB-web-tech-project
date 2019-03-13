
var canvas = document.querySelector('canvas');
	var ctx = canvas.getContext("2d");
	// Your code here
	// setTimeout(function() {
	// 	ctx.font = "36pt FontAwesome";
	// 	ctx.fillText("\uf087", 20, 50);
	// }, 1000);
// var img = new Image();
// img.onload = function () {
// 	// ctx.textAlign = "center";
//     ctx.drawImage(img, 70, 50, 160, 56);
// }
// img.src = "./icon/upload.png";

function redrawMeme(image, topLine, bottomLine) {
	// Get Canvas2DContext
	var canvas = document.querySelector('canvas');
	var ctx = canvas.getContext("2d");

	if (image != null) {
		ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
	}

	// ctx.font = "36pt Impact";
	// ctx.textAlign = "center";
	// ctx.fillStyle = "white";
	// ctx.strokeStyle = "black";
	// ctx.lineWifth = 3;

}

// function saveFile() {
// 	window.open(document.querySelector('canvas').toDataURL());
// }


function handleFileSelect(evt) {
	var canvasWidth = 300;
	var file = evt.target.files[0];

	var reader = new FileReader();
	reader.onload = function(fileObject) {
		var data = fileObject.target.result;

		// Create an image object
		var image = new Image();
		image.onload = function() {
			window.imageSrc = this;
			redrawMeme(window.imageSrc, null, null);
		}

		// Set image data to background image.
		image.src = data;
		console.log(fileObject.target.result);
	};
	reader.readAsDataURL(file)
}

document.getElementById('file').addEventListener('change', handleFileSelect, false);
// document.querySelector('post_button').addEventListener('click', saveFile, false);
