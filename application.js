jQuery(document).ready(function (){
   
    $(function (){
		var back_to_top = "<a href='#top'>Back to Top</a>";
		var toc = "<h2 id='toc'><a name='toc'>Table of Contents</a></h2>";
		var list = "<ul id='list'></ul>";
		$("div.article").append(back_to_top);
		$("h1").after(toc);
		$("h2:first").after(list);

		$("div.article h2").each(function (){
			var title = $(this).text();
			var slug = title.trim().toLowerCase().replace(" ", "_");
			var target_anchor = "<a href='#" + slug + "'>"+ title +"</a>";
			var list_item = "<li>" + target_anchor + "</li>";
			var h2 = "<h2>"+ title +"</h2>";

			$("div.article h2").css("background-color","#CCF");
			$('#list').append(list_item);
			$(this).attr('id', slug);

			var toggle_link = $("<a class='hide' href='#'>(hide)</a>");
			$(this).after(toggle_link);

			toggle_link.on('click', function (event){
			  $(this).siblings('p').toggle();
			  var text = $(this).text();
			   if (text === '(hide)') { 
			      $(this).text(text.replace('(hide)', '(show)'));
			   }
			   	 else{ 
			   	 	$(this).text(text.replace('(show)', '(hide)')); 
			   	 };
			  event.preventDefault();
			});
		});
    });

});