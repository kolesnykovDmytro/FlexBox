$(document).ready(function() {
    
    //hiden menu
    $( '.btn-menu, .hidden-menu ul a' ).click( function() {
    		if ($( '.hidden-menu' ).is(':hidden') ){
    			$( '.hidden-menu' ).show();
    		} else {
    			$ ('.hidden-menu').hide();
    		}

    	});
    //page scroll 
    $("a[rel='m_PageScroll2id']").mPageScroll2id({
    	offset:30
    });

    //carousel

    $("#owl-demo").owlCarousel({

      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
//tabs
	$('#responsiveTabsDemo').responsiveTabs({
	    startCollapsed: 'tabs'
	});

});