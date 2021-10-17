function hambugerMenu(label, nav, link){
    const d = document;

    d.addEventListener("click", e =>{
        if (e.target.matches(label)){
            d.querySelector(nav).classList.toggle("nav")
        }
        if (e.target.matches(link)){
            d.querySelector(nav).classList.remove("nav")
        }
    })
}