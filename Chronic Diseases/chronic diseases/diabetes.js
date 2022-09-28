var display_link = document.getElementById('display-list'),
    list         = document.getElementById('lists');
display_link.onclick = function(){
	if(list.style.display == 'none'){
		list.style.display = 'block';
		this.textContent = "read less";
	}
	else{
		list.style.display = 'none';
		this.textContent = "read more";
	}
}



var button = document.getElementsByClassName('button');
for(var i=0; i<button.length; i++){
	button[i].onclick = function(){
		if(this.nextElementSibling.style.display == "none"){
			display_none();
			this.nextElementSibling.style.display = "block";
		}
		else
			this.nextElementSibling.style.display = "none";
	}
}

function display_none(){
	for(var i=0; i<button.length; i++){
		if(button[i].nextElementSibling.style.display == "block")
			button[i].nextElementSibling.style.display = "none";
	}
}

function diabetesPage(){
  location.replace("https://www.mayoclinic.org/diseases-conditions/type-2-diabetes/symptoms-causes/syc-20351193")
}
