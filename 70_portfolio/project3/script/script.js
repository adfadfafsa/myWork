document.addEventListener('DOMContentLoaded', function () {

    const lst1 = document.querySelector("#lst1"),
        modal = document.querySelector(".modal"),
        closed = modal.querySelector("button");

    lst1.addEventListener("click", function () {
        // 클래스.classList.add("클래스명") : 클래스에 "클래스명" 추가
        modal.classList.add("active");
    });

    closed.addEventListener("click", function () {
        // 클래스.classList.remove("클래스명") : 클래스에서 "클래스명" 제거
        modal.classList.remove("active");
    });
});