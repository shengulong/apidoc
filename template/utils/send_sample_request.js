function sendSampleRequest(type, apiName) {

	var dict = {};

	$(".sample-param-" + apiName).each(function(i, element) {
		var key = element.id;
		var value = element.value;
		dict[key] = value;
	});

	var url = $("#sample-url-" + apiName)[0].value;

	$.ajax({
		url: "/api" + url,
		dataType: "json",
		data: dict,
		type: type.toUpperCase(),
		success: displaySuccess,
		error: displayError
	});

	function displaySuccess(data) {
		$("#sample-response-" + apiName).show();
		$("#sample-response-json-" + apiName).html(JSON.stringify(data, null, 4));
		refreshScrollSpy();
	};

	function displayError(jqXHR, textStatus, errorThrown) {
		$("#sample-response-" + apiName).show();
		$("#sample-response-json-" + apiName).html(jqXHR.status + " Error: " + errorThrown);
		refreshScrollSpy();
	};
};

function clearSampleRequest(apiName) {
	$("#sample-response-json-" + apiName).html("");
	$("#sample-response-" + apiName).hide();

	$(".sample-param-" + apiName).each(function(i, element) {
		element.value = "";
	});

	refreshScrollSpy();
};

function refreshScrollSpy() {
  	$('[data-spy="scroll"]').each(function () {
  		$(this).scrollspy('refresh');
	}); 
};