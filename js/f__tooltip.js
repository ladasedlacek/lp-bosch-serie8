const pointerElements = document.querySelectorAll('.lpFeatures__pointer')
const tooltipElement = document.querySelector('.lpFeatures__tooltip')

pointerElements.forEach((element) => {
  element.addEventListener('mouseenter', function(e) {
    if (e.target.closest('.lpFeatures__pointer') !== element) {
      return;
    }

    const parentItem = element.parentNode
    const dataItem = parentItem.dataset.item

    const targetElement = document.querySelector('.' + dataItem)
    if (targetElement) {
      const clonedElement = targetElement.cloneNode(true)
      tooltipElement.innerHTML = ''
      tooltipElement.appendChild(clonedElement)
    }

    tooltipElement.style.display = 'block'
    tooltipElement.style.top = e.clientY + 'px'
    tooltipElement.style.left = e.clientX + 'px'
  })

  element.addEventListener('mouseleave', function() {
    tooltipElement.style.display = 'none'
    tooltipElement.innerHTML = ''
  })
})
