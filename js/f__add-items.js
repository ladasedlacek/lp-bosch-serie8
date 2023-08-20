const run_add_items = () => {
    const items = {
        7688755: {
            'cs-CZ': {
                'item1': '10 kg, 1600 ot/min.',
                'item2': 'en. třída A',
                'item3': 'i-DOS – automatické dávkovaní detegrentu'
            },
            'sk-SK': {
                'item1': '10 kg, 1600 ot/min.',
                'item2': 'en. trieda A',
                'item3': 'i-DOS – automatické dávkovanie detegrentu'
            }
        },
        7688752: {
            'cs-CZ': {
                'item1': '9 kg, 1400 ot/min.',
                'item2': 'en. třída A -20 %',
                'item3': 'i-DOS – automatické dávkovaní detegrentu'
            },
            'sk-SK': {
                'item1': '9 kg, 1400 ot/min.',
                'item2': 'en. trieda A -20 %',
                'item3': 'i-DOS – automatické dávkovanie detegrentu'
            }
        },
        7688756: {
            'cs-CZ': {
                'item1': '10 kg, 1600 ot/min.',
                'item2': 'en. třída A',
                'item3': 'bez i-DOS'
            },
            'sk-SK': {
                'item1': '10 kg, 1600 ot/min.',
                'item2': 'en. trieda A',
                'item3': 'bez i-DOS'
            }
        },
        7688753: {
            'cs-CZ': {
                'item1': '10 kg, 1400 ot/min.',
                'item2': 'en. třída A -20 %',
                'item3': 'i-DOS – automatické dávkovaní detegrentu'
            },
            'sk-SK': {
                'item1': '10 kg, 1400 ot/min.',
                'item2': 'en. trieda A -20 %',
                'item3': 'i-DOS – automatické dávkovanie detegrentu'
            }
        },
        7688758: {
            'cs-CZ': {
                'item1': '9 kg',
                'item2': 'en. třída A+++',
                'item3': 's parním programem Iron Assist'
            },
            'sk-SK': {
                'item1': '9 kg',
                'item2': 'en. trieda A+++',
                'item3': 's parným programom Iron Assist'
            }
        },
        7688759: {
            'cs-CZ': {
                'item1': '9 kg',
                'item2': 'en. třída A+++',
                'item3': 'bez parního programu Iron Assist'
            },
            'sk-SK': {
                'item1': '9 kg',
                'item2': 'en. trieda A+++',
                'item3': 'bez parného programu Iron Assist'
            }
        }
    }
    
    const product_id = Object.keys(items)
    const observer = new MutationObserver(() => {
        if (document.querySelector('#landingpage .lpProducts--washes .lpProductCard') && document.querySelector('#landingpage .lpProducts--dryers .lpProductCard')) {
            add_items()
            observer.disconnect()
        }
    })

    const target = document.querySelector('body')
    observer.observe(target, {subtree: true, childList: true})

    const add_items = () => {
        const select_country = document.querySelector('#landingpage').getAttribute('data-country')

        product_id.forEach(id => {
            const find_card = document.querySelector('#landingpage .lpProductCard--' + id)
            const find_name = find_card.querySelector('.lpProductCard__name')
            const items_data = items[id][select_country] 
            const set_items = Object.values(items_data).map(text => {
                const create_item = document.createElement('li')
                create_item.classList.add('lpProductCard__item')
                create_item.textContent = text
                return create_item.outerHTML
            })
            
            const items_element = `<ul class="lpProductCard__items">${set_items.join('')}</ul>`
            find_name.insertAdjacentHTML('afterend', items_element)
        })
    }
}
run_add_items()