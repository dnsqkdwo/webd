window.addEventListener('DOMContentLoaded' , () => {
    const motto = [
        document.getElementById('motto1'),
        document.getElementById('motto2'),
        document.getElementById('motto3'),
        document.getElementById('motto4'),
        document.getElementById('motto5')
    ];

    const images = [
        '신뢰혁신.jpg',
        '나눔혁신.jpg',
        '환경혁신.jpg',
        '미래혁신.jpg',
        '보안혁신.jpg'
    ];

    motto.forEach((el,i) => {
        el.addEventListener('mouseenter' , () => {
            motto.forEach(m => {
                m.style.backgroundImage = `url(image/${images[i]})`
            });
        });

        el.addEventListener('mouseleave' , () => {
            motto.forEach((m, j) => {
                m.style.backgroundImage = `url(image/${images[j]})`
            });
        });
    });
});



