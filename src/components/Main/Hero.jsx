import heroCss from './Hero.module.css';
import phone from "./phone.jpg"
export function Hero() {
  return (
    <main className={heroCss.main}>
      <div>
        <ul className={heroCss.category}>
          <li>
            <p className={heroCss.title}>Apple</p>
          </li>
          <li>
            <p className={heroCss.title}>Huawei</p>
          </li>
          <li>
            <p className={heroCss.title}>Oppo</p>
          </li>
          <li>
            <p className={heroCss.title}>Realme</p>
          </li>
          <li>
            <p className={heroCss.title}>Samsung</p>
          </li>
          <li>
            <p className={heroCss.title}>Xiaomi</p>
          </li>
        </ul>
      </div>
    <div className={heroCss.serviceBlock}>
    <div>
        <h1 className={heroCss.repairTitle}>Ремонт та сервіс</h1>
        <p className={heroCss.repairTitleSecond}>Поремонтуємо твій гаджет швидко, якісно та надійно</p>
        <button className={heroCss.button}>Консультація</button>
      </div>
      <div className={heroCss.imgBlock}>
       <img className={heroCss.heroImg} src={phone} alt="phone" />
      </div>
    </div>
    </main>
  );
}
