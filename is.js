
    // InfiniteScroll Settings
var nextURL;
function updateNextURL( doc ) {
  nextURL = $( doc ).find('.aryapage-next').attr('href');
  
}
updateNextURL( document );
var $container = $('.main').infiniteScroll({
  path: function() {
    return nextURL;
  },

  append: '.myscroll',
  history: 'push',
  historyTitle: true,
  status: '.page-load-status',
  checkLastPage: '.aryapage-next'

});
$container.on( 'load.infiniteScroll', function( event, response, path ) {
  updateNextURL( response );
});
