window.onload = function() {
	// Building a simple slideshow

	// Steps:

	/*
		1. Get references (i.e. variables) to the following elements:
		
		a) the img inside the div with class 'slides' - use document.querySelector()
		b) the button with id 'start'
		c) the button with id 'stop'
	*/
	let img = document.querySelector('.slides img');
	let start = document.getElementById('start');
	let stop = document.getElementById('stop');

	/*
		2. Create three more variables

		a) a variable called 'currentSlide' to hold the index of the current slide. Give it an initial value of zero
		b) a variable called 'timer' that is initially set to null
		c) an array of strings called 'images' - the strings are the filenames of your images, i.e. slide0.jpg, slide1.jpg etc
	*/
	let currentSlide = 0;
	let timer = null;
	let images = ['slide0.jpg','slide1.jpg','slide2.jpg'];
	//console.log(images);

	/*
		3. Create a function called advanceSlides. This function should:

		check IF the value of currentSlide is less than the length of your images array - 1
		if so, increment the value of currentSlide and set the src attribute of the image you got in step 1, part a) 
		to the filename in the images array that coincides with the current value of your currentSlide variable
		(i.e. use the value of currentSlide to index into your images array)

		ELSE, set the value of currentSlide back to zero and update the src attribute of your image as above
	*/
	let advanceSlides = function(){
		if(currentSlide < images.length-1){
			currentSlide++;
			img.src = images[currentSlide];
			//console.log(img.src);
		}else{
			currentSlide = 0;
			img.src = images[currentSlide];
			//console.log(img.src);
		}
	}
	/*
		4. Create two event handlers, for start.onclick and stop.onclick

		The function assigned to start.onclick should:
		check IF the timer variable is null. If so, set an interval that calls the advanceSlides function every 3 seconds
		(make sure to assign the return value of setInterval to your timer variable!)

		The function assigned to stop.onclick should:
		IF timer is not null, clear the interval and set timer back to null
	*/
	start.onclick = starts;
	function starts(){
		if(timer === null){
			timer = setInterval(advanceSlides, 3000);
		}
	}
	stop.onclick = stops;
	function stops(){
		if(timer != null){
			clearInterval(timer);
			timer = null;
		}
	}

	/*
		5. Test for errors and ensure that the pictures change after clicking start, and stop changing after clicking stop.
		Check the console for errors!
	*/

}
