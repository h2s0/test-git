// Editing file for practicing git


// 유저 아이콘 버튼, 유저 정보 창
const userIcon = document.querySelector('.user__button');
const userInfo = document.querySelector('.user');
// 모바일 크기 일때만 클릭으로 유저 정보 active

function asdf() {
  if (window.innerWidth < 768) {
    userInfo.classList.toggle('is--active');
  }
}
userIcon.addEventListener('click', asdf);
// 유저 아이콘 버튼과 유저 정보 창을 제외한 나머지 영역 클릭시 유저 정보 창 닫기
document.addEventListener('click', e => {
  const isUserIcon = e.target.classList.contains('user__button');
  const isUserInfo = e.target.closest('.user');
  if (!isUserIcon && !isUserInfo) {
    userInfo.classList.remove('is--active');
  }
});

// 검색 버튼, 검색 창, 헤더
const searchBtn = document.querySelector('.search__button');
const searchPop = document.querySelector('.search');
const overlay = document.querySelector('.overlay');
const header = document.querySelector('.header');

function modal() {
  searchBtn.classList.toggle('is--active');
  searchPop.classList.toggle('is--active');
  overlay.classList.toggle('is--active');
  header.classList.toggle('is--active');
  if (searchPop.classList.length == 2) {
    document.body.style.overflow = 'hidden';
  } else document.body.style.overflow = 'auto';
}
// 검색버튼 클릭시 모달 열기
searchBtn.addEventListener('click', () => {
  modal();
});
// esc 버튼늘러서 모달 닫기
function asdf2(e) {
  if (e.keyCode === 27) {
    modal();
  }
}

document.addEventListener('keydown', asdf2);

// 모달창 오버레이 뒤쪽 클릭 제어
// 모달창 열렸을때 input에 포커스 가게하기

// 실시간 인기 검색어 날짜
const dateEl = document.querySelector('.search__date');
const timeEl = document.querySelector('.search__time');
const today = new Date();
dateEl.innerHTML = today.toLocaleDateString();
timeEl.innerHTML = today.toLocaleTimeString();

// 캐러셀 이미지와 desc 배열, 이전 다음 버튼, 재생 정지 버튼, 이미지 숏컷 버튼
const imgArr = [
  './images/banner01__header.png',
  './images/banner02__header.png',
  './images/banner03__header.png',
  './images/banner04__header.png',
];
const shortcut = document.querySelectorAll('.banner__shorcut');
const subtext = document.querySelector('.banner__subtext');
const subtextArr = [
  '리얼 초밀착 법정 드라마',
  '짜릿한 공조 사기극',
  '괴이한 소문의 실체가 공개된다.',
  'UFC 패더급매치 에멧 vs 토푸리아',
];
const prev = document.querySelector('.banner__prev');
const next = document.querySelector('.banner__next');
const banner = document.querySelector('.banner__image');
const play = document.querySelector('.banner__play__btn');
const stop = document.querySelector('.banner__stop__btn');

const imgNum = 0;

// 캐러셀 이전 버튼 조작
prev.addEventListener('click', () => {
  imgNum = (imgNum - 1 + imgArr.length) % imgArr.length;
  banner.setAttribute('src', imgArr[imgNum]);
  shortcut.forEach(e => e.classList.remove('is--active'));
  shortcut[imgNum].classList.add('is--active');
  subtext.innerHTML = subtextArr[imgNum];
});
// 캐러셀 이전 버튼 조작
next.addEventListener('click', () => {
  imgNum = (imgNum + 1) % imgArr.length;
  banner.setAttribute('src', imgArr[imgNum]);
  shortcut.forEach(e => e.classList.remove('is--active'));
  shortcut[imgNum].classList.add('is--active');
  subtext.innerHTML = subtextArr[imgNum];
});
// 캐러셀 숏컷 버튼
shortcut.forEach((e, n) => {
  e.addEventListener('click', () => {
    shortcut.forEach(e => e.classList.remove('is--active'));
    e.classList.add('is--active');
    banner.setAttribute('src', imgArr[n]);
    subtext.innerHTML = subtextArr[n];
  });
});
// 캐러셀 중지
play.addEventListener('click', () => {
  play.classList.add('is--active');
  stop.classList.add('is--active');
  clearInterval(autoBanner);
});
// 캐러셀 재시작
stop.addEventListener('click', () => {
  play.classList.remove('is--active');
  stop.classList.remove('is--active');
  autoBanner = setInterval(() => {
    imgNum++;
    if (imgNum == 4) {
      imgNum = 0;
    }
    banner.setAttribute('src', imgArr[imgNum]);
    shortcut.forEach(e => e.classList.remove('is--active'));
    shortcut[imgNum].classList.add('is--active');
    subtext.innerHTML = subtextArr[imgNum];
  }, 5000);
});
// 캐러샐 자동
const autoBanner = setInterval(() => {
  imgNum++;
  if (imgNum == 4) {
    imgNum = 0;
  }
  banner.setAttribute('src', imgArr[imgNum]);
  shortcut.forEach(e => e.classList.remove('is--active'));
  shortcut[imgNum].classList.add('is--active');
  subtext.innerHTML = subtextArr[imgNum];
}, 5000);

// footer 숏컷 그룹
const footerShortcut = document.querySelectorAll('.shortcut__btn');
const shorthCutList = document.querySelectorAll('.shortcut__group');

// 버튼 클릭시 클릭한 버튼 제외 닫기
footerShortcut.forEach((e, i) => {
  e.addEventListener('click', () => {
    if (shorthCutList[i].classList.contains('is--active')) {
      shorthCutList[i].classList.remove('is--active');
    } else {
      shorthCutList.forEach((j, k) => {
        if (k === i) {
          j.classList.add('is--active');
        } else {
          j.classList.remove('is--active');
        }
      });
    }
  });
});
// 버튼과 숏컷 그룹을 제외한 나머지 영역 클릭시 닫기
document.addEventListener('click', e => {
  const isBtn = e.target.classList.contains('shortcut__btn');
  const isGroup = e.target.classList.contains('shortcut__group');

  if (!isBtn && !isGroup) {
    shorthCutList.forEach(function (e) {
      e.classList.remove('is--active');
    });
  }
});
