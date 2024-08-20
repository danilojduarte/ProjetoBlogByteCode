// Filter Js
$('.filter-item').click(function(){
  const value = $(this).attr('data-flter')
  if (value == 'all') {
    $('post-box').show('1000')
  }
  else {
    $('.post-box').not('.' + value).hilde('10000')
  }
})