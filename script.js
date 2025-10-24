$(document).ready(function () {
  const $container = $(".star-field");
  if (!$container.length) return;

  const starCount = 1000;

  for (let i = 0; i < starCount; i++) {
    // 별 하나 생성
    const $star = $("<div>").addClass("star");

    // 랜덤 위치
    const top = Math.random() * 100;
    const left = Math.random() * 100;

    // 랜덤 크기
    const size = Math.random() * 1 + 0.1;

    // 랜덤 반짝 주기 & 딜레이
    const duration = 1.5 + Math.random() * 3;
    const delay = Math.random() * 2;

    // 스타일 적용
    $star.css({
      top: `${top}%`,
      left: `${left}%`,
      width: `${size}px`,
      height: `${size}px`,
      "animation-duration": `${duration}s`,
      "animation-delay": `${delay}s`,
    });

    // 컨테이너에 추가
    $container.append($star);
  }
});

// 터치 영역을 클릭할때마다 planet 클래스가 적용된 친구들한테 rotate라는 (spin 애니메이션이 추가된) 클래스를 껏다 켰다 해줘
$(".hit-area1").on("click", function (e) {
  e.stopPropagation();
  $(".planet1").toggleClass("rotate");
});

//hit-area2 클래스가 적용된 영역을 클릭하면 haehae 클래스가 적용된 영역(해해.png)한테 rotate 클래스를 껐다 켰다 해줘
$(".hit-area2").on("click", function (e) {
  e.stopPropagation();
  $(".planet2").toggleClass("rotate");
});

//hit-area2 클래스가 적용된 영역을 클릭하면 haehae 클래스가 적용된 영역(해해.png)한테 rotate 클래스를 껐다 켰다 해줘
$(".hit-area3").on("click", function (e) {
  e.stopPropagation();
  $(".planet3").toggleClass("rotate");
});

//hit-area2 클래스가 적용된 영역을 클릭하면 haehae 클래스가 적용된 영역(해해.png)한테 rotate 클래스를 껐다 켰다 해줘
$(".hit-area4").on("click", function (e) {
  e.stopPropagation();
  $(".planet4").toggleClass("rotate");
});

//hit-area2 클래스가 적용된 영역을 클릭하면 haehae 클래스가 적용된 영역(해해.png)한테 rotate 클래스를 껐다 켰다 해줘
$(".hit-area5").on("click", function (e) {
  e.stopPropagation();
  $(".planet5").toggleClass("rotate");
});

//hit-area2 클래스가 적용된 영역을 클릭하면 haehae 클래스가 적용된 영역(해해.png)한테 rotate 클래스를 껐다 켰다 해줘
$(".hit-area6").on("click", function (e) {
  e.stopPropagation();
  $(".planet6").toggleClass("rotate");
});

//hit-area2 클래스가 적용된 영역을 클릭하면 haehae 클래스가 적용된 영역(해해.png)한테 rotate 클래스를 껐다 켰다 해줘
$(".hit-area7").on("click", function (e) {
  e.stopPropagation();
  $(".planet7").toggleClass("rotate");
});
//hit-area2 클래스가 적용된 영역을 클릭하면 haehae 클래스가 적용된 영역(해해.png)한테 rotate 클래스를 껐다 켰다 해줘
$(".hit-area8").on("click", function (e) {
  e.stopPropagation();
  $(".planet8").toggleClass("rotate");
});
