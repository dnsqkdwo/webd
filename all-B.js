// 모달 열기
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// 모달 닫기
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// 모달 클릭 외부 영역에서 닫기
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// 탭 내용 표시 함수
function showTab(tabName) {
    // 모든 탭 숨기기
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // 탭 버튼의 활성화 상태 변경
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(button => button.classList.remove('active'));

    // 해당 탭 내용만 보이기
    const activeTab = document.getElementById(tabName);
    activeTab.classList.add('active');

    // 클릭된 탭 버튼 활성화
    const activeButton = Array.from(buttons).find(button => button.textContent.includes(tabName));
    activeButton.classList.add('active');
}

// 처음에는 '회원정보영역' 탭만 보이도록 설정
window.onload = () => {
    showTab('회원정보');
};
