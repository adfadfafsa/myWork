// 스와이프 기능은 아래에 있음

document.getElementsByClassName('slide2')[0].addEventListener('click', function(){
    document.getElementsByClassName('slide-container2')[0].style.transform = "translateX(-100vw)";
  })
  document.getElementsByClassName('slide3')[0].addEventListener('click',function(){
    document.getElementsByClassName('slide-container2')[0].style.transform = "translateX(-200vw)";
  })
  document.getElementsByClassName('slide1')[0].addEventListener('click',function(){
    document.getElementsByClassName('slide-container2')[0].style.transform = "translateX(0)";
  })

  const slideCont = document.getElementsByClassName('slide-container2')[0].style.transform;
  const trans0 = "translateX(0vw)";
  const trans1 = "translateX(-100vw)";
  const trans2 = "translateX(-200vw)";

  document.getElementsByClassName('prevBtn')[0].addEventListener('click', function(){
    if(document.getElementsByClassName('slide-container2')[0].style.transform == "translateX(-100vw)"){
      document.getElementsByClassName('slide-container2')[0].style.transform = "translateX(0)";
    } else if(document.getElementsByClassName('slide-container2')[0].style.transform == "translateX(-200vw)"){
      document.getElementsByClassName('slide-container2')[0].style.transform = "translateX(-100vw)";
    } else{
      document.getElementsByClassName('slide-container2')[0].style.transform = "translateX(-200vw)";
    }
  })

  document.getElementsByClassName('nextBtn')[0].addEventListener('click', function(){
    if(document.getElementsByClassName('slide-container2')[0].style.transform == "translateX(0vw)"){
      document.getElementsByClassName('slide-container2')[0].style.transform = "translateX(-100vw)";
    } else if(document.getElementsByClassName('slide-container2')[0].style.transform == "translateX(-100vw)"){
      document.getElementsByClassName('slide-container2')[0].style.transform = "translateX(-200vw)";
    } else {
      document.getElementsByClassName('slide-container2')[0].style.transform = "translateX(0vw)";
    }
  })

  
// 스와이프
// 마우스 드래그 하면 움직이는 캐러셀을 만들어보자
// 일단 HTML 이미지 draggable="false" 해주고 시작

// 마우스 누른 좌표를 선언해줄건데요
// 지역변수로는 못하니까 전역변수로 일단 선언 
// 전역변수로 선언하고 지역변수로 재할당하면 다른 함수에서도 쓸 수 있음 
  let 시작좌표 = 0;
  let 눌렀냐 = false;

// mousedown(딱 클릭 누르면 이벤트 발생)에서 클릭한 곳 좌표 구하기
// 인자 e 넣고 e.clientX 하면 X좌표 나옴, 마우스 누른곳 좌표 구해주기
  $('.slide-box').eq(0).on('mousedown', function(e){
    눌렀냐 = true;
    시작좌표 = e.clientX;
});

// mousemove(마우스 움직일때마다 이벤트 발생)에서 좌표 구하기, 거서 시작좌표 빼면 이동거리 나옴
// 그 이동거리만큼 X거리 이동해야하니까 transform translateX 해주자
$('.slide-box').eq(0).on('mousemove', function(e){
    if(눌렀냐 == true){
        $('.slide-container2').css('transform',`translateX(${e.clientX - 시작좌표}px)`)
    }
})

// 여기까지 하면 한번만 클릭해도 그뒤로 계속 mousemove상태라 안눌러도 스와이프됨 (눌렀냐==true 돼서 그럼)
// mouseup(마우스 떼면 이벤트 발생) 으로 마우스 떼면 눌렀냐 == false 해줍시다
  $('.slide-box').eq(0).on('mouseup', function(e){
    눌렀냐 = false;
});