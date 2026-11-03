// 메뉴 버튼: 모바일 화면에서 내비게이션 열기/닫기
const menuToggle = document.querySelector('#menuToggle');
const mainNav = document.querySelector('#mainNav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '×' : '☰';
});

// 메뉴 링크를 누르면 모바일 메뉴 닫기
mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

// data-modal 속성에 지정된 팝업을 열기
document.querySelectorAll('[data-modal]').forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.getElementById(button.dataset.modal);
    if (modal) modal.showModal();
  });
});

// 팝업 닫기 버튼 및 바깥 영역 클릭 처리
document.querySelectorAll('.modal').forEach((modal) => {
  modal.querySelector('.modal-close').addEventListener('click', () => modal.close());
  modal.addEventListener('click', (event) => {
    if (event.target === modal) modal.close();
  });
});
