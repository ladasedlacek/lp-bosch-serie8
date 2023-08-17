// get language of the page
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