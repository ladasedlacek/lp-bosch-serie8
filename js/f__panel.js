const run_panel = () => {
    const engine = document.querySelector('.lpPanel')
    const panel_off = document.querySelector('.lpMode__image--off')
    const panel_on = document.querySelector('.lpMode__image--on')
    const items = document.querySelector('.lpMode__items')

    engine.addEventListener('click', () => {
        engine.remove()
        panel_off.classList.add('lpMode__image--hide')
        panel_on.classList.add('lpMode__image--active')
        items.classList.add('lpMode__items--active')
    })
}
run_panel()