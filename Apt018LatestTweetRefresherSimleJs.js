let last_known_scroll_position = 0;
let mouse_movment = parseInt(new Date().getTime() / 1000);
let ticking = false;

function DoScrollTop(scroll_pos) {
	if(parseInt(new Date().getTime() / 1000) >= mouse_movment ){
  		document.body.scrollTop = 0; document.documentElement.scrollTop = 0;
	}
	console.log( parseInt(new Date().getTime() / 1000));
}

window.addEventListener('mousemove', function(e) {
	mouse_movment = parseInt((new Date().getTime() / 1000)+15);
});

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      DoScrollTop(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});
document.body.style.border="2px solid red";
setInterval(function(){ TempPath = window.location.href.substring((window.location.href.length)-7, (window.location.href.length));  if(TempPath == '&f=live'){if(parseInt(new Date().getTime() / 1000) >= mouse_movment ){document.querySelector('.r-oucylx').click();document.querySelector('.r-oucylx').click();}}else{window.location.replace = 'https://twitter.com/search?q=%23India&src=typeahead_click&f=live'}},10000);

