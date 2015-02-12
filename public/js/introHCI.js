'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	$('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	var url = "project/"+idNumber;
	$.get(url, result1);
	console.log(url);
	console.log("User clicked on project " + idNumber);
}


function result1(result)
{
	var idNumber = result['id'];
	var divs = "\""+idNumber+"\"";


	var projecthtml= '<h3> id= \"' + result['id']+"\" </h3>"+
					"<img class = \"detailsImage\" src="+
					result['image']+">"+
					"<p> Title: " + result['title']+

					" Summary: "+ result['summary']+
					"</p>";


	console.log(result);
	$("#project" + idNumber).find(".details").html(projecthtml);
}

/*
 * Make an AJAX call to retrieve a color palette for the site
 * and apply it
 */
function randomizeColors(e) {
	$.get("/palette",result2);
	console.log("User clicked on color button");



}
function result2(result)
{
	var colors = result["colors"]['hex'];
console.log(result);
$('body').css('background-color', colors[0]);
	$('.thumbnail').css('background-color', colors[1]);
	$('h1, h2, h3, h4, h5, h5').css('color', colors[2]);
	$('p').css('color', colors[3]);
	$('.project img').css('opacity', .75);


	console.log(result);
}