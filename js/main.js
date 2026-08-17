/* 카드 스크롤 애니메이션*/
gsap.registerPlugin(ScrollTrigger);

const newsCtx = gsap.context(() => {
  const newsWraps = gsap.utils.toArray('.holiday-article__news .news__itm-wrap');

  gsap.to(newsWraps, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: 'power2.out',
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.holiday-article__news',
      start: 'top 75%',
      once: true,
    },
  });
});

/* 어필 카운트*/
const textarea = document.querySelector('.survey__textarea');
const count = document.querySelector('.survey__textarea-count-current');

count.textContent = textarea.value.length;

textarea.addEventListener('input', function () {
  count.textContent = textarea.value.length;
});

/* 영상 재생 */
const videoThumbnail = document.querySelector('.history-article__video .video__thumbnail');
const playBtn = videoThumbnail.querySelector('.video__play-btn');
const videoEl = videoThumbnail.querySelector('.video__player');

playBtn.addEventListener('click', () => {
  videoThumbnail.classList.add('is-playing');
  videoEl.play();
});

videoEl.addEventListener('ended', () => {
  videoThumbnail.classList.remove('is-playing');
  videoEl.currentTime = 0;
});

/* 여름방학 탭 과목 슬라이더 */
const subjectBtns = document.querySelectorAll('.subject-article .subject-tab__btn');

const subjectSwiper = new Swiper('.subject-article .subject-tab__panels-swiper .swiper', {
  slidesPerView: 1,
  autoHeight: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.subject-article .subject-tab__arrow--next',
    prevEl: '.subject-article .subject-tab__arrow--prev',
  },
});

subjectSwiper.on('slideChange', function () {
  const nowIndex = subjectSwiper.activeIndex; 
  for (let i = 0; i < subjectBtns.length; i++) {
    subjectBtns[i].classList.remove('is-active');
  }
  subjectBtns[nowIndex].classList.add('is-active');
});

for (let i = 0; i < subjectBtns.length; i++) {
  subjectBtns[i].addEventListener('click', function () {
    subjectSwiper.slideTo(i);
  });
}