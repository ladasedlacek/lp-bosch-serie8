const pointerElements = document.querySelectorAll('.lpFeatures__pointer');

pointerElements.forEach((element) => {
  element.addEventListener('mouseenter', function() {
    console.log('Ahoj');
  });
});