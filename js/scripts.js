
var gallonToLiter = function(amount) {
	return amount / 0.26417;
}

var ouncesToCups = function(amount) {
	return amount * .125;
}

var cupsToLiters = function(amount) {
	return amount * .24;
}
$(document).ready(function() {
	$("#form1").submit(function(event) {
		var amount = $("input#gal2lit").val();
		amount = gallonToLiter(amount);
		$("#output1").text(amount);
		event.preventDefault();
	});

	$("#form2").submit(function(event) {
		var amount = $("input#ounces2cups").val();
		amount = ouncesToCups(amount);
		$("#output2").text(amount);
		event.preventDefault();
	});

	$("#form3").submit(function(event) {
		var amount = $("input#cups2liters").val();
		amount = cupsToLiters(amount);
		$("#output3").text(amount);
		event.preventDefault();
	});
});
