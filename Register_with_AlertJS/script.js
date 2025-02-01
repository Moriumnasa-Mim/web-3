		// JavaScript for form submission and alert
		document.getElementById('signupForm').addEventListener('submit', function(event) {
			event.preventDefault(); // Prevent form from submitting the traditional way
			
			// Getting values from the form inputs
			const userID = document.getElementById('userID').value;
			const userEmail = document.getElementById('userEmail').value;
			const userNumber = document.getElementById('userNumber').value;
			const userPassword = document.getElementById('userPassword').value;
			const termsAccepted = document.getElementById('terms').checked;

            // Log the form data to the console
           /* console.log('Signup Data:');
            console.log(`Username: ${username}`);
            console.log(`Email: ${email}`);
            console.log(`Password: ${password}`);*/

            alert('Signup Data:');

			// Displaying the input data in an alert
			alert(`User ID: ${userID}\n
                Email: ${userEmail}\n
                Mobile: ${userNumber}\n
                Password: ${userPassword}\n
                Terms Accepted: ${termsAccepted}`);
		});