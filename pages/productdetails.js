window.onbeforeunload = function() { window.scrollTo(0, 0); };
// scripts.js
function modalWindow() {
  const modal = document.querySelector("#myModal")
  const sliderContainer = document.querySelector(".slider-container")
  const modalContent = document.querySelector(".modal-content")
  const shadow = document.querySelector(".shadow_div")
  const slides = document.querySelectorAll('.slide');
  const thumbnails = document.querySelectorAll('.thumbnail');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  let currentIndex = 0;
  document.body.classList.add('modal-open');
  modal.style.display = "block";
  shadow.style.display = "none";

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.style.display = i === index ? 'block' : 'none';
      });
      thumbnails.forEach((thumbnail, i) => {
          thumbnail.classList.toggle('active', i === index);
      });
  }

  function onThumbnailClick(e) {
      currentIndex = parseInt(e.target.getAttribute('data-index'));
      showSlide(currentIndex);
  }

  function showNextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
  }

  function showPreviousSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
  }
  showSlide(currentIndex);

  // Клик по миниатюрам
  thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', onThumbnailClick);
  });

  // Клик по стрелкам
  leftArrow.addEventListener('click', showPreviousSlide);
  rightArrow.addEventListener('click', showNextSlide);
  
  //Закрытие модального окна по нажатию вне окна//
  function closeModal() {
    const modal = document.querySelector(".modal")
    modal.style.display = "none";
    document.body.classList.remove('modal-open');
  }
  function outsideClickListener(event) {
    if (event.target === sliderContainer || event.target === modal || event.target === modalContent) {
        closeModal();
        shadow.style.display = "block";
        document.body.classList.remove('modal-open');
    }
  }
  window.addEventListener('click', outsideClickListener);
};


function modalWindowNewsDetails() {
    const modal = document.querySelector("#myModalnewsDetails")
    const sliderContainer = document.querySelector(".slider-container-newsDetails")
    const modalContent = document.querySelector(".modal-content-newsDetails")
    const shadow = document.querySelector(".shadow_div")
    const slides = document.querySelectorAll('.slide-newsDetails');
    const thumbnails = document.querySelectorAll('.thumbnail-newsDetails');
    const leftArrow = document.querySelector('.left-arrow-newsDetails');
    const rightArrow = document.querySelector('.right-arrow-newsDetails');
    let currentIndex = 0;
    document.body.classList.add('modal-open-newsDetails');
    modal.style.display = "block";
    // shadow.style.display = "none";
  
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
        thumbnails.forEach((thumbnail, i) => {
            thumbnail.classList.toggle('active', i === index);
        });
    }
  
    function onThumbnailClick(e) {
        currentIndex = parseInt(e.target.getAttribute('data-index'));
        showSlide(currentIndex);
    }
  
    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }
  
    function showPreviousSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }
    showSlide(currentIndex);
  
    // Клик по миниатюрам
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', onThumbnailClick);
    });
  
    // Клик по стрелкам
    leftArrow.addEventListener('click', showPreviousSlide);
    rightArrow.addEventListener('click', showNextSlide);
    
    //Закрытие модального окна по нажатию вне окна//
    function closeModal() {
      const modal = document.querySelector(".modalnewsDetails")
      modal.style.display = "none";
      document.body.classList.remove('modal-open');
    }
    function outsideClickListener(event) {
      if (event.target === sliderContainer || event.target === modal || event.target === modalContent) {
          closeModal();
        //   shadow.style.display = "block";
          document.body.classList.remove('modal-open');
      }
    }
    window.addEventListener('click', outsideClickListener);
  };


function clickAboutButton1() {
    const aboutForm1 = document.querySelector("#content-about-form1");
    const aboutForm2 = document.querySelector("#content-about-form2");
    const aboutForm3 = document.querySelector("#content-about-form3");
    // const aboutForm3 = document.querySelector("#content-about-form3");
    if (aboutForm2.style.display === "none") {
        aboutForm2.style.display = "block";
        aboutForm1.style.display = "none";
    }
}
// Функция для отображения форм по нажатию на кнопки
function showForm(formId) {
    // Скрыть все формы
    const forms = document.querySelectorAll('.content-about-form');
    forms.forEach(form => {
      form.style.display = 'none';
    });
  
    // Отобразить выбранную форму
    document.getElementById(formId).style.display = 'block';
  }
  
  // Привязываем кнопки к функциям
  document.getElementById('radio1').addEventListener('click', () => showForm('content-about-form1'));
  document.getElementById('radio2').addEventListener('click', () => showForm('content-about-form2'));
  document.getElementById('radio3').addEventListener('click', () => showForm('content-about-form3'));
  