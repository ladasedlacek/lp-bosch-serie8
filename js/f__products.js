// print products
const run_products = (lang) => {
    const set_wasches = () => {
        const api = "/services/restservice.svc/v3/pack/?id=28033"
        /* const api = "https://cdn.alza.cz/Foto/or/lp/bosch-serie-8/build/js/28033.json" */
        const target_wasches = document.querySelector('#landingpage .lpProducts--washes .lpProductCards')
        set_data(api, target_wasches)
    }
    
    const set_dryers = () => {
        const api = "/services/restservice.svc/v3/pack/?id=28034"
        /* const api = "https://cdn.alza.cz/Foto/or/lp/bosch-serie-8/build/js/28034.json" */
        const target_dryers = document.querySelector('#landingpage .lpProducts--dryers .lpProductCards')
        set_data(api, target_dryers)
    }
    
    const set_data = (api, target) => {
        let headers = new Headers({
            "Accept-Language": lang + ",en-GB;q=0.8,en-US;q=0.5,en;q=0.3"
        })

        fetch(api, {
            method: 'GET',
            headers: headers
        })
        .then(response => response.json())
        .then(data => {
            data.data.forEach(item => {
                let product_id, product_link, product_image, product_name, product_price, product_rating, product_reviews, rating_width
    
                product_id = item.oid
                product_link = item.url
                product_image = item.img 
                product_image = product_image.replace('/f5/', '/f8/')
                product_name = item.name
                product_name.length > 40 ? product_name.substring(0, 37) + "..." : 0
                product_price = item.unitPriceWithVat
                product_rating = item.rating
                product_reviews = item.ratingCount + 'x'
                rating_width = (product_rating / 5.0) * 100
    
                const no_rating = () => product_rating == 0 ? 'display:none;' : '';

                const translations = {
                    text_add: {
                        "cs-CZ": "Do košíku",
                        "sk-SK": "Do košíka",
                        "hu-HU": "Kosárba",
                        "de-DE": "Kaufen",
                        "de-AT": "Kaufen",
                        "en-GB": "Add to Cart"
                    }
                }

                let product_card =  `<div class="lpProductCard lpProductCard--${product_id}">
                    <div class="lpProductCard__content">
                        <a href="${product_link}" class="lpProductCard__link"></a>
                        <div class="lpProductCard__photo">
                            <img src="${product_image}" alt="${product_name}" width="130" height="130" class="lpProductCard__image">
                        </div>
                        <div class="lpProductCard__rating">
                            <div class="lpProductCard__stars" style="${no_rating()}"><div class="lpProductCard__stars-cover" style="width:${rating_width}%"></div></div>
                            <p class="lpProductCard__value" style="${no_rating()}">${product_rating}</p>
                            <p class="lpProductCard__count" style="${no_rating()}">${product_reviews}</p>
                        </div>
                        <p class="lpProductCard__name">${product_name}</p>
                    </div>
                    <div class="lpProductCard__footer">
                        <div class="lpProductCard__price">
                            <p class="lpProductCard__actual-price">${product_price}</p>
                            <!-- <p class="lpProductCard__cross-price">29 990,-</p> -->
                        </div>
                        <button class="lpProductCard__toBasket" data-product-id="${product_id}">
                            <p class="lpProductCard__basketName">${translations.text_add[lang]}</p>
                        </button>
                    </div>
                </div>`
    
                target.insertAdjacentHTML('beforeend', product_card)
            })
        })
        .catch(error => console.error("LandingPage - Chyba při načítání dat:", error))
    }
    set_wasches()
    set_dryers()
}

// get language of the page
const run_lang_selector = () => {
    let langResult
    const get_language = () => {
        try { 
            if (Alza.Shared.PageData.culture) 
            return Alza.Shared.PageData.culture
        } catch(e) {}
        try { 
            if (document.documentElement.getAttribute("lang").length > 3)
            return document.documentElement.getAttribute("lang")
        } catch(e) {}
        try { 
            if (Alza.hasOwnProperty("Mobile")) 
            return Alza.Mobile.Page.data().countryLocale 
            return Alza.Web.Page.Data.countryLocale 
        } catch(e) { return window.navigator.language }
    }
    
    langResult = get_language()
    if (langResult === 'en-GB') {
        langResult = ""
    }
    document.querySelector('#landingpage').setAttribute('data-country', langResult)
    run_products(langResult)
}
run_lang_selector()