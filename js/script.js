$(document).ready( function(){
	current_slide = 1;
	$(document).ready(function(){
	  $("#next-slide").click(function(){
	 	 $(".fb" + current_slide).hide();
	    	current_slide = current_slide + 1;
	  		if(!$("div").is(".fb" + current_slide)) current_slide = 1;
	    	$(".fb" + current_slide).show();
	  });
	  $("#prev-slide").click(function(){
	    	$(".fb" + current_slide).hide();
	    	current_slide = current_slide - 1;
	  		if(!$("div").is(".fb" + current_slide)) current_slide = 3;
	    	$(".fb" + current_slide).show();
	  });
	});
	
	function showError() {
		alert("Произошла ошибка, пожалуйста попробуйте позднее.");
	}

	$('form').on('submit', function(event){ 
		event.preventDefault();
		if ($(this).find('input[name=name]').val() != '' & $(this).find('input[name=tel]').val() != '') {
		var form = $(this);
		$.ajax('https://email-marketing.bitrix24.ru/crm/configs/import/lead.php', {
			type: 'POST',
			cache: false,
			data: form.serialize(),
			// success: function(result) {
			// 	if (result == "true") 
			// 		window.location.replace("success.html");
			// },
		
			error: function(xhr, desc, err) {
				try {
					var result = JSON.parse(xhr.responseText.replace(/'/g, '"'));
					if (result.error == "201") {
						window.location.replace("success.html");
					}
					else {
						showError();
					}
				}
				catch (error) {
					showError();
				}
			}
		
		});
		}
	});

	//menu handler
	var activeMenuId = "menu_action";
	$("#menu_action").click(function() {
		$('#'+activeMenuId).removeClass("active");
		activeMenuId = "menu_action";
		$("#menu_action").closest("li").addClass("active");
	});
	$("#menu_popular").click(function() {
		$('#'+activeMenuId).removeClass("active");
		activeMenuId = "menu_popular";
		$("#menu_popular").closest("li").addClass("active");
	});
	$("#menu_classes").click(function() {
		$('#'+activeMenuId).removeClass("active");
		activeMenuId = "menu_classes";
		$("#menu_classes").closest("li").addClass("active");
	});
	$("#menu_assortiment").click(function() {
		$('#'+activeMenuId).removeClass("active");
		activeMenuId = "menu_assortiment";
		$("#menu_assortiment").closest("li").addClass("active");
	});
	$("#menu_about").click(function() {
		$('#'+activeMenuId).removeClass("active");
		activeMenuId = "menu_about";
		$("#menu_about").closest("li").addClass("active");
	});
	$("#menu_contacts").click(function() {
		$('#'+activeMenuId).removeClass("active");
		activeMenuId = "menu_contacts";
		$("#menu_contacts").closest("li").addClass("active");
	});
	$("#menu_sert").click(function() {
		$('#'+activeMenuId).removeClass("active");
		activeMenuId = "menu_sert";
		$("#menu_sert").closest("li").addClass("active");
	});
});