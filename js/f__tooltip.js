const run_tooltip = () => {
  const pointerElements = document.querySelectorAll('.lpFeatures__pointer')
  const tooltipElement = document.querySelector('.lpFeatures__tooltip')
  let hovered = false
  
  pointerElements.forEach((element) => {
    element.addEventListener('mouseenter', function(e) {
      const add_content = () => {
        if (e.target.closest('.lpFeatures__pointer') !== element) {
          return
        }

        const parentItem = element.parentElement
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
        hovered = true
      }

      hovered === true ? 0 : add_content()
    })
  
    element.addEventListener('mouseleave', function() {
      tooltipElement.style.display = 'none'
      tooltipElement.innerHTML = ''
      hovered = false
    })
  })
}
run_tooltip()
