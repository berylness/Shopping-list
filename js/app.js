$(document).ready(function(){

    /* prevent page from reloading on "Add" button click */
	$("#AddButton").click(function(event){
       event.preventDefault();
       addItem();
	});

	/* add item to the list when "Add" button is pressed and cursor is in textbox */
	$("#NewItemTextbox").keydown(function(event) {
		var keycode = event.keyCode ? event.keyCode : event.which;
		if(keycode == 13){
			addItem();
		}
	});

	/* Makes list items vertically sortable */
  	$(function() {
   	 	$( "#list" ).sortable();
    	$( "#list" ).disableSelection();
  	});


	/* removes item from list */
	$("#list").on("click", "a", function() {
		var listItem = $(this).closest("li");
		var itemName = listItem.find("span").text();
		var message = "Are you sure you want to remove '" + itemName + "' from your list?";
		if(window.confirm(message)) {
			listItem.remove();
		}
	});

	/* applies strikethrough to item text if checkbox ticked */
	$("#list").on("change", "input:checkbox",function () {
		var item = $(this).closest("li").find("span");
		if($(this).is(":checked")) {
			item.addClass("completed");
		}
		else
			item.removeClass("completed"); 
	});

	/* adds new item to the bottom of the list */
	function addItem() {
		var newItem = $("#NewItemTextbox").val();
		if(newItem.trim().length === 0) {
		;
        return;
	}

		var listItem = createListItem(newItem);
		$("#list").append(listItem);
		$("#NewItemTextbox").val("");
	}

	function createListItem(newItem) {
		var listItem = "<li class='ui-state-default'><input type='checkbox'>"; 
		listItem += "<span>" + newItem + "</span>";
		listItem += "<a href='#'>X</a></li>";
		return listItem; 
	}
});
