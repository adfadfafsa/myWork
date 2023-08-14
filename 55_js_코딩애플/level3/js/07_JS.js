// 과제1

let 출석부 = ['흥민', '영희', '철수', '재석'];

// 1. 배열 싹 돌려보기
// 2. 인자가 배열 요소랑 같은 값이 있다면 있어요 출력

function 이름찾기(name){
    for (i=0; i<출석부.length; i++){
        if(name === 출석부[i]){
            console.log('있어요');
        }
    }
}

// 과제2

function 구구단1(a){
    for(i=1; i<10; i++){
        console.log(a*i);
    }
}

function 구구단2(){
    for(i=2; i<10; i++){
        for(k=1; k<10; k++){
            console.log(i*k);
        }
    }
}

// 과제3

// 1. 인자는 배열이고 두개인데 첫번째는 지금까지 성적, 두번째는 이번 성적
// 2. 둘다 평균 수치로 표기
// 3. 첫번째 인자(지난성적)에 비해 두번째는 얼마나 올랐는지 말해줌

// 다르게 해보려다 망한것들 주석처리함
// function prevResult(){
//     let 지난성적합계 = 0;
//     for(i=0; i<지난성적.length; i++){
//         지난성적합계 += 지난성적[i];
//     }
//     return 지난성적합계/지난성적.length; 
// }

// function curResult(){
//     let 이번성적합계 = 0;
//     for(i=0; i<이번성적.length; i++){
//         이번성적합계 += 이번성적[i];
//     }
//     return 이번성적합계/이번성적.length;
// }

// function Comparer(){
//     let compare = prevResult() - curResult();
//     if(compare > 0){
//         console.log('지난 번 보다' + compare + '점 오르셨네요.');
//     } else if (compare = 0){
//         console.log('평균치가 지난번과 똑같네요.');
//     } else {
//         console.log('지난 번 보다' + compare + '점 떨어졌네요. 재수추천');
//     }
// }

function comparer(prev, cur){
    let 지난성적합계 = 0;
    for(i=0; i<prev.length; i++){
        지난성적합계 += prev[i]
    }
    prevAverage = 지난성적합계/prev.length;
    
    let resultDiff = cur - prevAverage;
    let resultDiff2 = prevAverage - cur;
    if(prevAverage < cur){
        console.log('평균보다 ' + resultDiff + '점 올랐습니다.')
    } else if (prevAverage = cur){
        console.log('이번 성적은 평균과 같습니다.')
    } else {
        console.log('평균보다 ' + resultDiff2 + '점 떨어졌습니다. 재수추천')
    }
}