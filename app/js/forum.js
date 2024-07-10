document.querySelector('.logo').addEventListener('click', function() {
    location.reload();
});

//Функция для поля формы регистрации

document.addEventListener('DOMContentLoaded', function() {
    var headerIcon = document.querySelector('.user');
    var registrationForm = document.querySelector('.registration-form');
  
    headerIcon.addEventListener('click', function() {
      registrationForm.classList.toggle('login');
    });
  });

//Поле поиска 

  document.addEventListener('DOMContentLoaded', function() {
    var headerIcon = document.querySelector('.search_icon');
    var registrationForm = document.querySelector('.search');
  
    headerIcon.addEventListener('click', function() {
      registrationForm.classList.toggle('search_form');
    });
  });