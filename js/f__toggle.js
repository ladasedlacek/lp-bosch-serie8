const run_toggle = () => {
  const listItems = document.querySelectorAll('.lpFeatures__switcher-tab');

  listItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      const activeItem = document.querySelector('.lpFeatures__switcher-tab--active');
      const clickedItem = event.target;
  
      if (!clickedItem.classList.contains('lpFeatures__switcher-tab--active')) {
        activeItem?.classList.remove('lpFeatures__switcher-tab--active');
        clickedItem.classList.add('lpFeatures__switcher-tab--active');
      }
  
      const productData = clickedItem.dataset.product;
      console.log(productData);
    });
  });  
}
run_toggle()
