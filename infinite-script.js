var nextURL;
function updateNextURL( doc ) {
  nextURL = $( doc ).find('.infinite-next').attr('href');
  
}
updateNextURL( document );
var $container = $('.myscroll').infiniteScroll({
  path: function() {
    return nextURL;
  },

  append: '.myscroll',
  history: 'push',
  historyTitle: true,
  status: '.page-load-status',
  checkLastPage: '.infinite-next'

});
$container.on( 'load.infiniteScroll', function( event, response, path ) {
  updateNextURL( response );
});
