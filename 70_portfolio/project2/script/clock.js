// HTML DOM의 모든 요소를 읽고 나서 함수를 실행시킨다
document.addEventListener('DOMContentLoaded', function () {

    // 변수 선언
    // document.querySelector('CSS선택기');
    // const yy = document.getElementsByClassName('yy');
    const yy = document.querySelector('.yy'),
        mm = document.querySelector('.mm'),
        dd = document.querySelector('.dd'),
        we = document.querySelector('.we'),
        hh = document.querySelector('.hh'),
        mi = document.querySelector('.mi'),
        ss = document.querySelector('.ss');

    // setInterval(함수, 시간);
    // 시간은 밀리초
    setInterval(timer, 1000);

    function timer() {
        let date = new Date();

        yy.innerHTML = date.getFullYear() + '년';

        mm.innerHTML = date.getMonth() + 1 + '월';
        dd.innerHTML = date.getDate() + '일';

        let week = date.getDay();

        if (week === 0) {
            wk = '일';
        } else if (week === 1) {
            wk = '월';
        } else if (week === 2) {
            wk = '화';
        } else if (week === 3) {
            wk = '수';
        } else if (week === 4) {
            wk = '목';
        } else if (week === 5) {
            wk = '금';
        } else {
            wk = '토';
        }

        we.innerHTML = wk + '요일';

        // 시
        let hour = date.getHours();

        if (hour > 12) {
            hour = '오후 0' + (hour - 12);
        } else if (hour > 9) {
            hour = '오전 ' + hour;
        } else {
            hour = '오전 0' + hour;
        }

        hh.innerHTML = hour;

        // 분
        let minute = date.getMinutes();

        if (minute < 10) {
            minute = '0' + minute;
        }

        mi.innerHTML = ': ' + minute;

        // 초
        let second = date.getSeconds();

        if (second < 10) {
            second = '0' + second;
        }

        ss.innerHTML = ': ' + second;
    }
});