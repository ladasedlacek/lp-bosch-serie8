const run_products = () => {
    const stack_washes = [7688755, 7688752, 7688756, 7688753]
    const stack_dryers = [7688758, 7688759]

    // filling html content with product data
    const fill_content = (product) => {
        let headers = new Headers({
            "Content-Type": "application/json",
            "Accept-Language": langResult + ",en-GB;q=0.8,en-US;q=0.5,en;q=0.3"
        })

        let api = "/api/legacy/catalog/v14/external/product/" + product  
        console.log(api)
    }

    stack_washes.forEach(product => {
        fill_content(product)
    })
}
run_products()