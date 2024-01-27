
//============================== SaideBar ==============================
$(document).ready(function() {
	$(".btnSlider").click(function(){
    $("aside").toggleClass('toggleSlide')
    });
	});
//============================== alert button Support ==============================
$(".icon-support").click(function () {
  $(".box-support").addClass("d-flex");
  $(".box-support").removeClass("d-none");
});
$(".btn-close-support").click(function () {
  $(".box-support").addClass("d-none");
  $(".box-support").removeClass("d-flex");
});
//============================== alert button rating plans ==============================
$(document).ready(function () {
  // عند الضغط على زر الإشعارات
  $('#notification-button').click(function () {
      $('#notification-modal').toggle(); // إظهار/إخفاء نافذة الإشعارات
  });

  // عند النقر في أي مكان على الصفحة
  $(document).click(function (e) {
      if (!$(e.target).closest('#notification-button, #notification-modal').length) {
          // إذا كان النقر خارج زر الإشعارات ونافذة الإشعارات، قم بإخفاء النافذة
          $('#notification-modal').hide();
      }
  });
});
//============================== NavBar ==============================

let theEnd = 0;
navbar = document.getElementById('navbar');
const debounce = (func, delay) => {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, delay);
  };
};
const handleScroll = debounce(() => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > theEnd) {
    navbar.style.top = '-70px';
  } else {
    navbar.style.top = '0';
  }
  theEnd = scrollTop;
}, 10);
window.addEventListener('scroll', handleScroll);

//============================== LOADING ==============================
window.addEventListener('load', function() {
  var loadingOverlay = document.getElementById('loadingOverlay');
  loadingOverlay.style.display = 'none'; // يخفي شاشة التحميل عندما تحمل الصفحة بالكامل
});