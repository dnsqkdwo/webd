// DOMContentLoaded 이벤트는 HTML 문서의 로딩이 완료되었을 때 실행되는 이벤트입니다.
// 페이지의 모든 HTML이 로드되면 아래 코드가 실행됩니다.
window.addEventListener('DOMContentLoaded', function() {

    // 'motto'라는 배열을 선언하고, 각각 id가 'motto1', 'motto2', 'motto3', 'motto4', 'motto5'인
    // HTML 요소들을 가져와서 배열로 저장합니다.
    const motto = [
        document.getElementById('motto1'),
        document.getElementById('motto2'),
        document.getElementById('motto3'),
        document.getElementById('motto4'),
        document.getElementById('motto5')
    ];
    
    // 'images'라는 배열을 선언하고, 배경에 사용할 이미지 파일들을 문자열로 저장합니다.
    const images = [ 
        '신뢰혁신.jpg',  // 첫 번째 이미지
        '나눔혁신.jpg',   // 두 번째 이미지
        '환경혁신.jpg',   // 세 번째 이미지
        '미래혁신.jpg',   // 네 번째 이미지
        '보안혁신.jpg'    // 다섯 번째 이미지
    ];

    // 'non' 함수는 모든 .motto_text 클래스의 요소들의 opacity(불투명도)를 '0'으로 설정하여
    // 요소들을 화면에서 보이지 않게 만듭니다.
    function non() {
        const motto_text = document.querySelectorAll('.motto_text'); // .motto_text 클래스가 있는 모든 요소 선택
        motto_text.forEach((tex) => {  // 각 요소들에 대해 반복문을 실행
            tex.style.opacity = '0';  // opacity를 0으로 설정하여 요소를 숨깁니다.
        });
    }

    // 'yes' 함수는 모든 .motto_text 클래스의 요소들의 opacity(불투명도)를 '1'로 설정하여
    // 요소들이 다시 보이게 만듭니다.
    function yes() {
        const motto_text = document.querySelectorAll('.motto_text'); // .motto_text 클래스가 있는 모든 요소 선택
        motto_text.forEach((tex) => {  // 각 요소들에 대해 반복문을 실행
            tex.style.opacity = '1';  // opacity를 1로 설정하여 요소를 보이게 만듭니다.
        });
    }

    // 페이지가 로드되자마자 'yes()' 함수가 실행되어 .motto_text 요소들이 보이게 설정됩니다.
    yes();

    // 'mouente' 함수는 인덱스를 받아서, 그에 맞는 이미지를 'motto' 요소들의 배경으로 설정합니다.
    // 또한 'non()' 함수를 호출하여 .motto_text 요소들을 숨깁니다.
    function mouente(index) {
        const image = images[index];  // 인덱스를 이용해 images 배열에서 해당 이미지를 가져옵니다.
        motto.forEach(mott => {  // 'motto' 배열의 각 요소에 대해 반복문을 실행
            mott.style.backgroundImage = `url(image/${image})`;  // 배경 이미지를 변경합니다.
        });
        non();  // .motto_text 요소들을 숨깁니다.
    }

    // 'mounone' 함수는 모든 'motto' 요소들의 배경 이미지를 원래 상태로 되돌리고,
    // .motto_text 요소들을 다시 보이게 설정합니다.
    function mounone() {
        motto.forEach((mott, i) => {  // 'motto' 배열의 각 요소에 대해 반복문을 실행
            mott.style.backgroundImage = `url(image/${images[i]})`;  // 배경 이미지를 원래 이미지로 되돌립니다.
        });
        yes();  // .motto_text 요소들을 다시 보이게 만듭니다.
    }

    // 각 'motto' 요소에 대해 마우스가 올라갔을 때('mouseenter')와 마우스가 떠날 때('mouseleave') 
    // 이벤트를 추가합니다.
    motto.forEach((mott, index) => {  
        mott.addEventListener('mouseenter', () => mouente(index));  // 마우스가 올라가면 'mouente' 함수 실행
        mott.addEventListener('mouseleave', mounone);  // 마우스가 떠나면 'mounone' 함수 실행
    });

});
