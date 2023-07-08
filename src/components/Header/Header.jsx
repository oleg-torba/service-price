import headerCss from "./Header.module.css"

export function Header () {
    return (
        <header className={headerCss.header}>
            <h3 className={headerCss.mainTitle}>Сервіс</h3>
      <div className={headerCss.navigation}>
      <p className={headerCss.title}>Прайс</p>
        <p className={headerCss.title}>Сервіс-центри</p>
        <p>Про компанію</p>
      </div>
       <div className={headerCss.contacts}>
       <a className={headerCss.title} href="tel:0686868599">+38 (068) 68 68 599</a>
        <p>09:00-18:00 (пн-пт)</p>
       </div>
        </header>
    )
}