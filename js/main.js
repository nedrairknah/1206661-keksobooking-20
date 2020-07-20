'use strict';

//  1
//  объект
var TYPES = ['palace', 'flat', 'house', 'bungalo'];
var CHECKINS = ['12:00', '13:00', '14:00'];
var CHECKOUTS = ['12:00', '13:00', '14:00'];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
// var DESCRIPTION =
// var PHOTOS =
// var LOCATION_X = от 130 до 630
// var LOCATION_Y = от 130 до 630
var similarUser = document.querySelector('.map__pins');
var mapWidth = similarUser.offsetWidth;

var getUrl = function (i) {
  return 'img/avatars/user0' + (i + 1) + '.png';
};

var getRandomNumber = function (min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

//  ты
var getRandomArray = function (array) { //  функция для определенияя случайного массива //  старый ящик
  var randomLength = getRandomNumber(0, array.length); // рандомная длина нового массива // человек который загадал число
  var tmp = []; // новый ящик

  for (var i = 0; i < randomLength; i++) { // действия руками
    var randomElement = array[getRandomNumber(0, array.length)]; // cтарый ящик[хватаешь рандомный шар]
    tmp.push(randomElement); // ложим в новый ящик
  }

  return tmp; // возвращаем ящик
};

// var getPhotos = function (i) {
//   return 'http://o0.github.io/assets/images/tokyo/hotel' + (i + 1) + '.jpg';
// };

var getUser = function (index) {
  return {
    author: {
      avatar: getUrl(index),
    },
    offer: {
      title: 'строка, заголовок предложения',
      address: '"строка, адрес предложения. Для простоты пусть пока представляет собой запись вида" "{{location.x}}, {{location.y}}", "например," "600, 350"',
      price: getRandomNumber(1000, 5000),
      type: TYPES[getRandomNumber(0, TYPES.length)],
      rooms: getRandomNumber(1, 5),
      guests: getRandomNumber(1, 8),
      checkin: CHECKINS[getRandomNumber(0, CHECKINS.length)],
      checkout: CHECKOUTS[getRandomNumber(0, CHECKOUTS.length)],
      features: getRandomArray(FEATURES),
      description: 'строка с описанием,',
      photos: getRandomArray(PHOTOS),
    },
    location: {
      x: getRandomNumber(0, mapWidth),
      y: getRandomNumber(130, 630)//  'случайное число, координата y метки на карте от 130 до 630.',
    }
  };
};

var createUsers = function () {
  var users = [];
  for (var i = 0; i < 8; i++) {
    users.push(getUser(i));
  }
  return users;
};

var addUserTemplate = document.querySelector('#pin')
  .content
  .querySelector('.map__pin');

var renderUser = function (u) {
  var userElement = addUserTemplate.cloneNode(true);

  userElement.style.left = u.location.x + 'px';
  userElement.style.top = u.location.y + 'px';
  userElement.querySelector('img').src = u.author.avatar;
  userElement.querySelector('img').alt = u.offer.title;

  return userElement;
};

var renderUsers = function () {
  var users = createUsers();
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < users.length; i++) {
    fragment.appendChild(renderUser(users[i]));
  }
  similarUser.appendChild(fragment);

};

renderUsers();

//
//  var renderUsers = document.createDocumentFragment();
//  for (var i = 0; i < u.length; i++) {
//  fragment.appendChild(renderUser(u[i]));
//  }
//
//   var users = createUsers()// [{...}]

//   //renderUser(users[0]).querySelector('.map-pin')

//   domElement.appendChild()
// }

//  функция создания массива из 8 сгенерированных JS-объектов.
// var renderAdvertisment = function (object) {
//   var advertismentElement = similarAdvertismentTemplate.cloneNode(true);

//   advertismentElement.querySelector('.popup__text--price').textContent = object.price;

//   return advertismentElement;
// };

// 2 У блока .map уберите класс .map--faded.
var map = document.querySelector('.map');
map.classList.remove('.map--fadded');

//  3 Создать DOM-элементы, соответсвующие меткам на карте
// Заполнить их данными

//  4 Отрисуйте сгенерированные DOM-элементы в блок .map__pins.
//  Для вставки элементов используйте DocumentFragment

