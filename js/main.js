//slider

let curPos = 0;
let postion = 0;
const IMAGE_WIDTH = 1300;
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const images = document.querySelector(".images")

function prev(){
  if(curPos > 0){
    nextBtn.removeAttribute("disabled")
    postion += IMAGE_WIDTH;
    images.style.transform = `translateX(${postion}px)`;
    curPos = curPos - 1;
  }
  if(curPos == 0){
    prevBtn.setAttribute('disabled', 'true')
  }
}
function next(){
  if(curPos < 3){
    prevBtn.removeAttribute("disabled")
    postion -= IMAGE_WIDTH;
    images.style.transform = `translateX(${postion}px)`;
    curPos = curPos + 1;
  }
  if(curPos == 3){
    nextBtn.setAttribute('disabled', 'true')
  }
}

function init(){
  prevBtn.setAttribute('disabled', 'true')
  prevBtn.addEventListener("click", prev)
  nextBtn.addEventListener("click", next)
}

init();

//iframe api
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//플레이어 변수 설정
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '800',
    width: '1320',
    videoId: 'mmZj7U9iy_Y',
    playerVars: {
      'setVolume': 0,
      'rel': 0,
      'autohide': 1,
      'enablejsapi': 1,
      'disablekb': 1,
      'loop': 1,
      'frameborder': 0,
      // 'controls': 0
    },
    events: {
      'onReady': onPlayerReady, //로딩중에 이벤트 실행
      'onStateChange': onPlayerStateChange //플레이어 상태 변화 시 이벤트를 실행
    }
  });
}

function onPlayerReady(event) {
  //로딩된 후에 실행될 동작
  event.target.playVideo(); //자동재생
}

var done = false;

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    done = true;
    //플레이어가 재생중일 때 작성한 동작이 실행된다.
  }
}

//

// $(function() {
//   $(window).scroll(function(){
//     // 공통변수 선언
//     let wHeight = $(this).height();
//     let thisScrollTop = $(this).scrollTop();
//     if(thisScrollTop > 0 ) {
//       $(".submenu_container").css({display:"none"})
//     } else {
//       $(".submenu_container").css({display:"flex"})
//     }
//   });
// });
