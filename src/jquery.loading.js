/* 
 *
 *          Progressbar on HTML + CSS
 *      because HTML5 Progressbar still poor 
 * 
 * Author: Misael Braga de Bitencourt - misabitencourt@gmail.com 
 */
$(document).ready(function(){
	
	$.loading = function(args, commandArgs)
	{
		
		/*
		 * Change or init value function
		 */
		var changePercent = function(element, args)
		{
			element.css("width", args.width)
		           .children(".progress-info")
		           .css("width", args.width);
			
			element.attr('percent', args.initPercent);		
			var indicatorWidth = args.width*(args.initPercent/100);
			element.children(".progress-indicator").css('width', indicatorWidth);
			element.find(".put-percent").html((args.initPercent+'%'));
		}
		
		/*
		 * Changing value
		 */
		if (args == 'change')
		{
			$(commandArgs.selector).each(function(){			
				changePercent($(this), commandArgs);				
			});			
			return 0;
		}

		/*
		 * Creating
		 */		
        var template = '<div class="progress-indicator"></div><div class="progress-info">';
		template += '<div class="pull-left title">#{title}</div><div class="pull-right put-percent">#{percent}</div></div>';
		
		template = template.replace("#{title}", args.title);
		template = template.replace("#{percent}", args.putPercent === false ? '' : (args.initPercent+'%'));
				
		$(args.selector).each(function(){			
			
			$(this).html('')
				   .addClass('progress-bar')
				   .append(template);				   
			
			changePercent($(this), args);
		});
	}
});