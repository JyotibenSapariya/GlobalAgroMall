var itemTimer;jQuery(function($){$("input.hint").hint();$("#tabs").tabs();$("#marketingTabs").tabs();$('.mainNav ul.sf-menu').superfish({popUpSelector:'.fullWidth',delay:0,animation:{opacity:'show',height:'show'},speed:'fast',autoArrows:false});$('.mainNav ul.navBar').superfish({popUpSelector:'.sub',delay:0,animation:{opacity:'show',height:'show'},autoArrows:false});$('.BeefToday .mainNav .sf-menu > li > a').matchHeights();$('.TopProducer .mainNav .sf-menu > li > a').matchHeights();$('.Dairy .mainNav .sf-menu > li > a').matchHeights();$('.view-categories-handler').on('click',function(e){e.preventDefault();$('.category-list ul li, .category-list ul ul ').show();});$(".mMCats ul.sf-menuVid").superfish({animation:{height:'show'},speed:200,dropShadows:false}).find("ul").bgIframe();$(".mMCats ul.sf-menuVid > li > a span").remove();$(".mMCats ul.sf-menuVid a").click(function(event){event.preventDefault();});$(".mMCats ul.sf-menuVid ul a").click(function(){$(".mMCats ul.sf-menuVid").superfish();$(".mMCats ul.sf-menuVid > li > a span").remove();});$(".multiMod .mMIndex .mMCaption").matchHeights();$(".multiMod .mMIndex ul li").matchHeights();$(".topStories").click(function(){$(this).siblings().removeClass("active");$(this).addClass("active");$(this).parent().parent().siblings(".mostPopularSlider").hide();$(this).parent().parent().siblings(".topStoriesSlider").show();});$(".mostPopular").click(function(){$(this).siblings().removeClass("active");$(this).addClass("active");$(this).parent().parent().siblings(".topStoriesSlider").hide();$(this).parent().parent().siblings(".mostPopularSlider").show();});$(".SlideshowWidget").each(function(){var $slideshow=$(this),isChanging=false,speed=$slideshow.data("speed")||5000,hasNav=$slideshow.data("nav");if($slideshow.data("nav")){var navBuild=$("<div class='navList'><ul/></div>");$slideshow.find(".slide").each(function(key){var navItem=$("<li/>");if(key===0){navItem.addClass("current");}
$(this).find(".slideInfo").children().clone().appendTo(navItem);navBuild.children("ul").append(navItem);});$slideshow.append(navBuild);}
$slideshow.find(".slide:first-child").addClass("active");var timeout=setTimeout(setTimer,speed);$slideshow.on("click",".prev, .next",function(e){e.preventDefault();e.stopPropagation();if(!isChanging){isChanging=true;var $active=$slideshow.find(".active"),$next;if($(this).hasClass("next")){if($active.next(".slide").length>0){$next=$active.next(".slide");}else{$next=$slideshow.find(".slide:first-child");}}else{if($active.prev(".slide").length>0){$next=$active.prev(".slide");}else{$next=$slideshow.find(".slide:last-child");}}
if($(window).width()>625){$active.find(".slideImg").fadeOut(600);$next.find(".slideImg").fadeIn(600,function(){$active.removeClass("active").addClass("inactive");$next.removeClass("inactive").addClass("active");isChanging=false;});var navList=$slideshow.find(".navList ul"),navLi=navList.children("li"),nextLi=navLi.eq($next.index());navLi.removeClass("current");nextLi.addClass("current")
navList.stop().scrollTo(nextLi,800,{axis:"y"});}else{$active.removeClass("active").addClass("inactive");$next.removeClass("inactive").addClass("active");isChanging=false;}
clearTimeout(timeout);timeout=setTimeout(setTimer,speed);}});function setTimer(){$slideshow.find(".next").trigger("click");console.log("clicked");timeout=setTimeout(setTimer,speed);}});$(".columnRow").each(function(){$(this).find(".accountBlocks").matchHeights();});$(".truncate").truncate({max_length:400,more:"read more",less:"read less"});$(".uiModal").dialog({autoOpen:false,width:"720px",bgiframe:true,modal:true,resizable:false,live:false,buttons:{Close:function(){$(this).dialog("close");}},close:function(){destroyZoom();}});$(".uiDialog").dialog({autoOpen:false,width:"720px",bgiframe:true,modal:false,resizable:false,buttons:{Close:function(){$(this).dialog("close");}}});$(".tabModule").tabs();$(".mod_landing_gal li").matchHeights();if(typeof Sys!='undefined'){Sys.Browser.WebKit={};if(navigator.userAgent.indexOf('WebKit/')>-1){Sys.Browser.agent=Sys.Browser.WebKit;Sys.Browser.version=parseFloat(navigator.userAgent.match(/WebKit\/(\d+(\.\d+)?)/)[1]);Sys.Browser.name='WebKit';}}});function destroyZoom(){$("#dio-sensor, #dio-lens").remove();};