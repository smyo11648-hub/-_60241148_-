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

// p1
$(".hit-area1").on("click", function (e) {
  e.stopPropagation();

  const $planet = $(this).closest(".planet1");
  const audioEl = $planet.find(".planet-sound1")[0];

  // 애니메이션 리셋 후 다시 실행
  $planet.removeClass("rotate");
  void $planet[0].offsetWidth;
  $planet.addClass("rotate");

  // 소리 재생
  if (audioEl) {
    audioEl.currentTime = 0;
    audioEl.play();

    // 🔸 회전이 끝나면 소리 멈춤
    const imgEl = $planet.find("img")[0];
    imgEl.addEventListener(
      "animationend",
      () => {
        audioEl.pause();
        audioEl.currentTime = 0; // 항상 처음으로 되돌림
      },
      { once: true } // 이벤트 한 번만 실행
    );
  }
});

//p2

$(".hit-area2").on("click", function (e) {
  e.stopPropagation();

  const $planet = $(this).closest(".planet2");
  const audioEl = $planet.find(".planet-sound2")[0];

  // 애니메이션 리셋 후 다시 실행
  $planet.removeClass("rotate");
  void $planet[0].offsetWidth;
  $planet.addClass("rotate");

  // 소리 재생
  if (audioEl) {
    audioEl.currentTime = 0;
    audioEl.play();

    // 🔸 회전이 끝나면 소리 멈춤
    const imgEl = $planet.find("img")[0];
    imgEl.addEventListener(
      "animationend",
      () => {
        audioEl.pause();
        audioEl.currentTime = 0; // 항상 처음으로 되돌림
      },
      { once: true } // 이벤트 한 번만 실행
    );
  }
});

//p3
$(".hit-area3").on("click", function (e) {
  e.stopPropagation();

  const $planet = $(this).closest(".planet3");
  const audioEl = $planet.find(".planet-sound3")[0];

  // 애니메이션 리셋 후 다시 실행
  $planet.removeClass("rotate");
  void $planet[0].offsetWidth;
  $planet.addClass("rotate");

  // 소리 재생
  if (audioEl) {
    audioEl.currentTime = 0;
    audioEl.play();

    // 🔸 회전이 끝나면 소리 멈춤
    const imgEl = $planet.find("img")[0];
    imgEl.addEventListener(
      "animationend",
      () => {
        audioEl.pause();
        audioEl.currentTime = 0; // 항상 처음으로 되돌림
      },
      { once: true } // 이벤트 한 번만 실행
    );
  }
});

//p4
$(".hit-area4").on("click", function (e) {
  e.stopPropagation();

  const $planet = $(this).closest(".planet4");
  const audioEl = $planet.find(".planet-sound4")[0];

  // 애니메이션 리셋 후 다시 실행
  $planet.removeClass("rotate");
  void $planet[0].offsetWidth;
  $planet.addClass("rotate");

  // 소리 재생
  if (audioEl) {
    audioEl.currentTime = 0;
    audioEl.play();

    // 🔸 회전이 끝나면 소리 멈춤
    const imgEl = $planet.find("img")[0];
    imgEl.addEventListener(
      "animationend",
      () => {
        audioEl.pause();
        audioEl.currentTime = 0; // 항상 처음으로 되돌림
      },
      { once: true } // 이벤트 한 번만 실행
    );
  }
});

//p5
$(".hit-area5").on("click", function (e) {
  e.stopPropagation();

  const $planet = $(this).closest(".planet5");
  const audioEl = $planet.find(".planet-sound5")[0];

  // 애니메이션 리셋 후 다시 실행
  $planet.removeClass("rotate");
  void $planet[0].offsetWidth;
  $planet.addClass("rotate");

  // 소리 재생
  if (audioEl) {
    audioEl.currentTime = 0;
    audioEl.play();

    // 🔸 회전이 끝나면 소리 멈춤
    const imgEl = $planet.find("img")[0];
    imgEl.addEventListener(
      "animationend",
      () => {
        audioEl.pause();
        audioEl.currentTime = 0; // 항상 처음으로 되돌림
      },
      { once: true } // 이벤트 한 번만 실행
    );
  }
});

//p6
$(".hit-area6").on("click", function (e) {
  e.stopPropagation();

  const $planet = $(this).closest(".planet6");
  const audioEl = $planet.find(".planet-sound6")[0];

  // 애니메이션 리셋 후 다시 실행
  $planet.removeClass("rotate");
  void $planet[0].offsetWidth;
  $planet.addClass("rotate");

  // 소리 재생
  if (audioEl) {
    audioEl.currentTime = 0;
    audioEl.play();

    // 🔸 회전이 끝나면 소리 멈춤
    const imgEl = $planet.find("img")[0];
    imgEl.addEventListener(
      "animationend",
      () => {
        audioEl.pause();
        audioEl.currentTime = 0; // 항상 처음으로 되돌림
      },
      { once: true } // 이벤트 한 번만 실행
    );
  }
});

//p7
$(".hit-area7").on("click", function (e) {
  e.stopPropagation();

  const $planet = $(this).closest(".planet7");
  const audioEl = $planet.find(".planet-sound7")[0];

  // 애니메이션 리셋 후 다시 실행
  $planet.removeClass("rotate");
  void $planet[0].offsetWidth;
  $planet.addClass("rotate");

  // 소리 재생
  if (audioEl) {
    audioEl.currentTime = 0;
    audioEl.play();

    // 🔸 회전이 끝나면 소리 멈춤
    const imgEl = $planet.find("img")[0];
    imgEl.addEventListener(
      "animationend",
      () => {
        audioEl.pause();
        audioEl.currentTime = 0; // 항상 처음으로 되돌림
      },
      { once: true } // 이벤트 한 번만 실행
    );
  }
});
//p8
$(".hit-area8").on("click", function (e) {
  e.stopPropagation();

  const $planet = $(this).closest(".planet8");
  const audioEl = $planet.find(".planet-sound8")[0];

  // 애니메이션 리셋 후 다시 실행
  $planet.removeClass("rotate");
  void $planet[0].offsetWidth;
  $planet.addClass("rotate");

  // 소리 재생
  if (audioEl) {
    audioEl.currentTime = 0;
    audioEl.play();

    // 🔸 회전이 끝나면 소리 멈춤
    const imgEl = $planet.find("img")[0];
    imgEl.addEventListener(
      "animationend",
      () => {
        audioEl.pause();
        audioEl.currentTime = 0; // 항상 처음으로 되돌림
      },
      { once: true } // 이벤트 한 번만 실행
    );
  }
});
