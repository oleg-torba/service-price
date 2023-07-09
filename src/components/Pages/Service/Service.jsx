import serviceCss from "./service.module.css"

export function Service () {
    return (
        <div>
            <ul className={serviceCss.serviceBlock}>
                <li className={serviceCss.serviceList}>
                <p>м. Львів, вул. Кульпарківська, 59 </p>
                <p><a href="tel:+38091882858">+38 (098) 18 85 828</a></p>
                </li>
                <li className={serviceCss.serviceList}>
                <p>м. Львів, вул. Городоцька, 177</p>
                <p><a href="tel:+380676917827">+38 (067) 69 17 827 </a></p>
                </li>
                <li className={serviceCss.serviceList}>
                <p>м. Бібрка, Ринкова, 2а</p>
                <p><a href="tel:+380678629919">+38 (067) 86 29 919 </a></p>
                </li>
                <li className={serviceCss.serviceList}>
                <p>м. Мостиська, пл.Ринок, 17/б</p>
                <p><a href="tel:+38091882849">+38 (098) 18 82 849</a></p>
                </li>
                <li className={serviceCss.serviceList}>
                <p>м. Новояворівськ, Бандери, 18</p>
                <p><a href="tel:+380973652842">+38 (097) 36 52 842</a></p>
                </li>
                <li className={serviceCss.serviceList}>
                <p>м. Недригайлів, Незалежності, 8</p>
                <p><a href="tel:+380674394679">+38 (067) 439 46 79</a></p>
                </li>
                <li className={serviceCss.serviceList}>
                <p>м. Рогатин, Шевченка, 3а</p>
                <p><a href="tel:+380685882928">+38 (068) 588 29 28</a></p>
                </li>
                <li className={serviceCss.serviceList}>
                <p>м. Сарни</p>
                <p><a href="tel:+380676714938">+38 (067) 671 49 38</a></p>
                </li>
                <li className={serviceCss.serviceList}>
                <p>м. Трускавець, Стебницька, 58</p>
                <p><a href="tel:+380677460390">+38 (067) 746 03 90</a></p>
                </li>
            </ul>
           
            <iframe className={serviceCss.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d330469.2944965156!2d23.26691614624829!3d49.677068601144555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add24dbde6085%3A0xaf1b24cc91f0cb8c!2sZhzhuk%20Servis!5e0!3m2!1sru!2sua!4v1688921554577!5m2!1sru!2sua"  loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="service"></iframe>
            
        </div>
    )
} 