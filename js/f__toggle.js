const run_toggle = () => {
  const items = document.querySelectorAll('.lpFeatures__switcher-tab');

  items.forEach((item) => {
    item.addEventListener('click', (event) => {
      const active_item = document.querySelector('.lpFeatures__switcher-tab--active')
      const clicked_item = event.target
  
      if (!clicked_item.classList.contains('lpFeatures__switcher-tab--active')) {
        active_item?.classList.remove('lpFeatures__switcher-tab--active')
        clicked_item.classList.add('lpFeatures__switcher-tab--active')
      }
  
      const product = clicked_item.dataset.product
      document.querySelector('.lpFeatures__model--active').classList.remove('lpFeatures__model--active')
      document.querySelector('#landingpage .' + product).classList.add('lpFeatures__model--active')
    })
  })
}
run_toggle()
