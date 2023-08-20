const run_toBasket = () => {
    // wait until elements will exist
    const observer = new MutationObserver(() => {
        if (document.querySelector('#landingpage .lpProducts--washes .lpProductCard') && document.querySelector('#landingpage .lpProducts--dryers .lpProductCard')) {
            toBasket()
            observer.disconnect()
        }
    })

    const target = document.querySelector('body')
    observer.observe(target, {subtree: true, childList: true})
    
    const toBasket = () => {
        // find all buttons
        const wrappers = document.querySelectorAll('#landingpage .lpProductCards')
        const buttons = []

        wrappers.forEach(element => {
            const find_card = element.querySelectorAll('.lpProductCard')
            find_card.forEach(card => {
                const find_button = card.querySelector('.lpProductCard__toBasket')
                buttons.push(find_button)
            })
        })
        
        // add product to the basket
        buttons.forEach(button => {
            button.addEventListener('click', element => {
                element.stopPropagation()
                const product_id = button.getAttribute('data-product-id')

                const translations = {
                    text_add: {
                        "cs-CZ": "Přidáno do košíku",
                        "sk-SK": "Pridané do košíka",
                        "hu-HU": "Hozzáadva a kosárhoz",
                        "de-DE": "Im Warenkorb",
                        "de-AT": "Im Warenkorb",
                        "en-GB": "Added to cart"
                    }
                }

                const add_message = () => {
                    const select_country = document.querySelector('#landingpage').getAttribute('data-country')
                    const select_message = translations.text_add[select_country]
                    const create_element = `<div class="lpProductCard__messageWrapper"><p class="body-1">${select_message}</p></div>`
                    button.insertAdjacentHTML('afterend', create_element)
                    button.remove()
                }

                const api = "/api/basket/v1/items"
                const data = {
                    "Items": [
                        {
                            "CommodityId": product_id,
                            "Count": 1,
                            "PricePerItem": 0,
                            "Services": [0],
                            "Hooks": [0]
                        }
                    ]
                }

                fetch(api, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }).then(response => {
                    response.status === 422 ? 0 : add_message()
                }).catch(error => {
                    console.log("Nastala chyba při volání API:", error)
                })
            })
        })
    }
}
run_toBasket()