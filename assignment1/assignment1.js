let form = document.getElementById('a1');

form.onsubmit = function(event) {
	event.preventDefault();

	/* 1. create variables to hold references to 
			a) the field with id firstname
			b) the field with class lastname
			c) the field with id age
	*/
	let firstName  = document.getElementById('firstname').value;
	//console.log(firstName);

	let lastName = document.getElementsByClassName('lastname')[0].value;
	//console.log(lastName);

	let age = parseInt(document.getElementById('age').value);
	//console.log(age);

	// 2. create an array to hold your error messages
	let errorMessages = [];

	// 3. create a boolean variable to keep track of whether the form is valid or not
	let validData = true;

	// 4. Ensure that firstname is not blank
	if(firstName === ''){
		errorMessages.push('First name cannot be blank.');
		validData = false;
	}

	// 5. Ensure that lastname is not blank and does not include a hyphen
	if(lastName === "" || (lastName.indexOf('-')>=0)){
		errorMessages.push("Last name cannot be blank, and cannot contain a hyphen");
		validData = false;
	}

	// 6. Ensure that age is a number and age is greater than or equal to 0 and less than or equal to 122
	if(isNaN(age) || age < 0 || age > 122){
		errorMessages.push("Age should be a number, and should be greater than or equal to 0 and less than or equal to 122");
		validData = false;
	}

	/* 7. If the form is not valid, loop through the error messages array and alert each error, 
				otherwise alert that the form was successfully submitted
	*/
	if(!validData){
		for(let errorMessage of errorMessages){
			alert(errorMessage);
			console.log(errorMessage);
		}
	}else{
		alert('The form is successfully submitted!');
	}
}