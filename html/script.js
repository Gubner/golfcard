var gcard = {}
var container = document.getElementById("container");

gcard.Open = function() {
	container.style.visibility = "visible";
	container.style.opacity = "1";
}

gcard.Close = function() {
	container.style.visibility = "hidden";
	container.style.opacity = "0";
	container.style.transition = "visibility 0s 0.5s, opacity 0.5s linear";
	$.post(`https://${GetParentResourceName()}/close`);
}

$(document).ready(function(){
    window.addEventListener('message', function(event) {
        switch(event.data.action) {
            case "open":
                gcard.Open();
                break;
            case "close":
                gcard.Close();
                break;
        }
    })
});

$(document).on('keydown', function() {
    switch(event.keyCode) {
        case 27: // ESC
            gcard.Close();
            break;
    }
});

function tally(name){
	var arr = document.getElementsByName(name);
	var tot = 0;
	for(i = 0; i < 9; i++){
		if(Number(arr[i].value)) tot += Number(arr[i].value);
	}
	if (tot == 0) {
		tot = ' ';
	}
	document.getElementById(name).value = tot;
}

function reset() {
	for (j = 1; j < 5; j++){
		for (k = 1; k < 10; k++) {
			document.getElementById('p' + j + 's' + k).value = ' ';
		}
		document.getElementById('player' + j).value = '';
		tally('p' + j + 's');
	}
}