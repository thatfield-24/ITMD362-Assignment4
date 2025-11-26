function init(){
	var button = document.getElementById('submit1');
	var dialog = document.getElementById('formComplete');
  
	function formValidation(event){
		if (event && typeof event.preventDefault === 'function') event.preventDefault();

		var fname = document.getElementById('fname').value;
		var email = document.getElementById('email').value;
		var message = document.getElementById('message').value;

		if (email === "" || message === "") {
			badResponse();
			return;
		}
		else if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
			badResponse();
			return;
		}
		else if (fname === "") {
			fname = "Guest";
			document.getElementById('responseHeader').textContent = "Got It!";
			document.getElementById('response').textContent = "Hello " + fname + ", we just got your message and will be in touch soon!";
        	dialog.showModal();
		}
		else {
			document.getElementById('responseHeader').textContent = "Got It!";
			document.getElementById('response').textContent = "Hello " + fname + ", we just got your message and will be in touch soon!";
        	dialog.showModal();
		}
	}
	function badResponse(){
		document.getElementById('responseHeader').textContent = "Uh Oh!";
		document.getElementById('response').textContent = "There was an error with your submission. Please confirm the email address is valid and the message is not empty.";
		dialog.showModal();
	}
	if (button) button.addEventListener('click', formValidation);
}
window.addEventListener('load', init);