/**
 * @author
 */

    /* Below is the reference to the YouTube video  */
var video = "<iframe width='560' height='315' src='http://www.youtube.com/embed/JlTbp6K6JtU' frameborder='0' allowfullscreen></iframe>";


   /* The setNav function below refers to the 'success' button element in the html sheet, when clicked on it 
    * opens the modal (pop-up window) */
  
$(document).ready(function() {
	
	setNav();
	
	
});

	function setNav() {
	
		$(".scala").on("click", function() {
		$('#myModal').modal();
		$(".modal-body").html(video);
		
});

/* Below is a function for the 'close' button that appears in the modal window;
 * when the 'close' button is clicked on (within the pop-up window) it will close the window.*/

		$("close").on("click", function() {
			$(".modal-body").empty();
		});
}


