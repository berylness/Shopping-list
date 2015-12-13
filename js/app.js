$(document).ready(function(){

    /* prevent page from reloading on button click */
	$("#AddButton").click(function(event){
       event.preventDefault();
       

	/* add item on button click */
	$("#AddButton").click(addItem);


	/* add item when Return key is pressed and cursor is in textbox */
	$("#NewItemTextbox").keydown(function(event) {
		var keycode = event.keyCode ? event.keyCode : event.which;
		if(keycode == 13){
			addItem();
		}
	});
});

	/* remove item from list */
	$("#list").on("click", "a", function() {
		var listItem = $(this).closest("li");
		var itemName = listItem.find("span").text();
		var message = "Are you sure you want to remove '" + itemName + "' from your list?";
		if(window.confirm(message)) {
			listItem.remove();
		}
	});

	/* strikethrough text if checkbox ticked */
	$("#list").on("change", "input:checkbox",function () {
		var item = $(this).closest("li").find("span");
		if($(this).is(":checked")) {
			item.addClass("completed");
		}
		else
			item.removeClass("completed"); 
	});
	});

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

