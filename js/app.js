const startButton = document.querySelector('.startBtn');
const hunger = document.querySelector('.hungerBtn');
const sleep = document.querySelector('.sleepBtn');
const bored = document.querySelector('.boredBtn');

$('#mainContainer').hide();
let inputValue;

//====================================================
//========RenderSTats

function renderStat() {
  //   $('#nameChange').text(firstChoice.name);
  $('#ageChange').text(firstChoice.age);
  $('#hungerChange').text(firstChoice.hunger);
  $('#sleepChange').text(firstChoice.sleep);
  $('#boredChange').text(firstChoice.boredum);
}
//==============AGE Increase==========================

function whenStatsAreZero() {
  if (
    firstChoice.hunger <= 0 ||
    firstChoice.sleep <= 0 ||
    firstChoice.boredum <= 0
  ) {
    return true;
  } else {
    return false;
  }
}
function ageIncrease() {
  const ageTimer = setInterval(function () {
    if (whenStatsAreZero() === true) {
      $('#digmonImg').css('height', '25%');
      $('#digmonImg').css('width', '25%');
      clearInterval(ageTimer);
    } else if (firstChoice.age >= 3) {
      const morph = $(`<button id="morph">Its Morphin time.</button>`);
      $('.screen').append(morph);
      $('#morph').on('click', function () {
        $('#digmonImg').css('transform', 'scaleX(1)');
        $('#digmonImg').css('height', '45%');
        $('#digmonImg').css('width', '45%');
        $('#digmonImg').attr('src', './images/giphyRedDragon.gif');
      });
    } else {
      firstChoice.age++;
      $('#ageChange').text(firstChoice.age);
      renderStat();
    }
  }, 5000);
}

//==========Stats Decrease============================
function decrease() {
  firstChoice.hunger -= 5;
  firstChoice.sleep -= 4;
  firstChoice.boredum -= 10;
}

//=============Dieing Animation and Msg================
function diyingPet() {
  $('#digmonImg').addClass('deadPet');
  $('#digmonImg').attr(
    'src',
    'https://www.animatedimages.org/data/media/511/animated-grave-image-0028.gif'
  );
  $('#digmonImg').removeClass('animate');
  $('#digmonImg').removeClass('reverseAnimate');

  const restartBtn = $(
    `<button id="restartBtn">Game Over your ${inputValue} is dead</button>`
  );

  $('.screen').append(restartBtn);
  $('#restartBtn').on('click', function () {
    location.reload();
  });
}

//======= FEED SLEEP AND BORED Methods============
// ALL 3 Buttons
function increasesHunger() {
  if (
    firstChoice.hunger > 0 &&
    firstChoice.sleep > 0 &&
    firstChoice.boredum > 0
  ) {
    firstChoice.feedMe();
    renderStat();
    console.log(firstChoice.hunger);
  }
}

function increasesSleep() {
  if (
    firstChoice.hunger > 0 &&
    firstChoice.sleep > 0 &&
    firstChoice.boredum > 0
  ) {
    firstChoice.timeToSleep();
    renderStat();
    console.log(firstChoice.sleep);
  }
}
function increasesBoredum() {
  if (
    firstChoice.hunger > 0 &&
    firstChoice.sleep > 0 &&
    firstChoice.boredum > 0
  ) {
    firstChoice.letsPlay();
    renderStat();
    console.log(firstChoice.boredum);
  }
}

//==========INTERVAL TO CHECK WHEN AVATAR DIES=
//============START BUTTON=====================
function gameStart() {
  renderStat();
  const count = setInterval(function () {
    if (whenStatsAreZero() === true) {
      clearInterval(count);
    } else {
      decrease();
      renderStat();
    }
  }, 4000);
  const fastChecking = setInterval(function () {
    renderStat();
    if (whenStatsAreZero() === true) {
      clearInterval(fastChecking);
      diyingPet();
    }
  }, 100);
}

//====================Animation Effects==========
$('#digmonImg').on('animationend', function () {
  if ($('#digmonImg').hasClass('animate')) {
    $('#digmonImg').removeClass('animate');
    $('#digmonImg').addClass('reverseAnimate');
  } else {
    $('#digmonImg').removeClass('reverseAnimate');
    $('#digmonImg').addClass('animate');
  }
});

//===========EVENT LISTNERS JS=================
startButton.addEventListener('click', gameStart);
hunger.addEventListener('click', increasesHunger);
sleep.addEventListener('click', increasesSleep);
bored.addEventListener('click', increasesBoredum);
startButton.addEventListener('click', ageIncrease);

//=====Cover PAGE & Naming Option jQuery==============
$('#start').on('click', function () {
  if ($('.userInput').val() === '') {
  } else {
    $('#mainContainer').show();
    $('#coverPage').hide();
    inputValue = $('.userInput').val();
    $('#nameChange').text(inputValue);
  }
});

//============Lights On/OFF======================
$('.sleepBtn').on('click', function () {
  $('#night').css('opacity', 0.7);
  const nightWatch = setTimeout(function () {
    clearInterval(nightWatch);
    $('#night').css('opacity', 0);
  }, 4000);
});
//============Playing Image=====================
$('.boredBtn').on('click', function () {
  $('#playingImg').css('opacity', 1);
  const playTime = setTimeout(function () {
    clearInterval(playTime);
    $('#playingImg').css('opacity', 0);
  }, 4000);
});
