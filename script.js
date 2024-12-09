// スライドショーの要素を取得
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// スライドを自動的に切り替える関数
function changeSlide() {
    slides[currentSlide].style.left = '-100%'; // 現在のスライドを隠す
    currentSlide = (currentSlide + 1) % slides.length; // 次のスライドに移動
    slides[currentSlide].style.left = '0%'; // 新しいスライドを表示
}

// ページ読み込み後にスライドショーを開始
document.addEventListener('DOMContentLoaded', () => {
    setInterval(changeSlide, 5000); // 5秒ごとにスライドを切り替え
});
