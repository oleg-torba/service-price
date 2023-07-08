import priceCss from "./Price.module.css"

export function Price () {
    return (
<div className={priceCss.search}>
<input className={priceCss.input} type="text" placeholder="Введіть модель телефону" />
<button className={priceCss.searchButton} type="button">Пошук</button>
</div>
    )
}