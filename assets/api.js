$('#app').html(`
	<br> <div class="progress">
    	<div class="indeterminate"></div>
  	</div>
  	</br>
  	
`);

setTimeout(function(){
	y();
},3000);

function y(){

	$.ajax({
		url:"https://api.spotify.com/v1/search?q=artist:bts&type=album"
	}).done(function(response){			
		$.ajax({
			url:response.albums.items[0].href
		}).done(function(album){
			console.log(album);
			let name = album.tracks.items[14].name;
			let image1 = response.albums.items[0].images[1].url;
			let mp3_1 = album.tracks.items[14].preview_url;
			let html = `
				<h3>${name}</h3>
				<img src="${image1}" /><br></br>
				<audio controls>
					<source src="${mp3_1}" type="audio/mpeg">
					Your browser does not support the audio element.
				</audio>	
			`;
			$('#app').html(html);			
		});	
	});
}

$('#app2').html(`
	<div class="progress">
    	<div class="indeterminate"></div>
  	</div>
`);

setTimeout(function(){
	z();
},3000);

function z(){
	$.ajax({
		url:"https://api.spotify.com/v1/search?q=artist:bts&type=album"
	}).done(function(response){			
		$.ajax({
			url:response.albums.items[1].href
		}).done(function(album){
			console.log(album);
			let name = album.tracks.items[1].name;
			let image2 = response.albums.items[1].images[1].url;
			let mp3_2 = album.tracks.items[1].preview_url;
			let html = `
				<h3>${name}</h3>
				<img src="${image2}" /><br></br>
				<audio controls>
					<source src="${mp3_2}" type="audio/mpeg">
					Your browser does not support the audio element.
				</audio>	
			`;
			$('#app2').html(html);			
		});	
	});
}

$('#app3').html(`
	<div class="progress">
    	<div class="indeterminate"></div>
  	</div>
`);

setTimeout(function(){
	x();
},3000);

function x(){
	$.ajax({
		url:"https://api.spotify.com/v1/search?q=artist:bts&type=album"
	}).done(function(response){			
		$.ajax({
			url:response.albums.items[2].href
		}).done(function(album){
			console.log(album);
			let name = album.tracks.items[1].name;
			let image1 = response.albums.items[2].images[1].url;
			let mp3_3 = album.tracks.items[1].preview_url;
			let html = `
				<h3>${name}</h3>
				<img src="${image1}" /><br></br>
				<audio controls>
					<source src="${mp3_3}" type="audio/mpeg">
					Your browser does not support the audio element.
				</audio>	
			`;
			$('#app3').html(html);			
		});	
	});
}

$('#app4').html(`
	<div class="progress">
    	<div class="indeterminate"></div>
  	</div>
`);

setTimeout(function(){
	w();
},3000);

function w(){
	$.ajax({
		url:"https://api.spotify.com/v1/search?q=artist:bts&type=album"
	}).done(function(response){			
		$.ajax({
			url:response.albums.items[3].href
		}).done(function(album){
			console.log(album);
			let name = album.tracks.items[1].name;
			let image4 = response.albums.items[3].images[1].url;
			let mp3_4 = album.tracks.items[1].preview_url;
			let html = `
				<h3>${name}</h3>
				<img src="${image4}" /><br></br>
				<audio controls>
					<source src="${mp3_4}" type="audio/mpeg">
					Your browser does not support the audio element.
				</audio>	
			`;
			$('#app4').html(html);			
		});	
	});
}
