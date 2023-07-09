
import { Form } from "components/Form/Form"
import { useState, useEffect } from 'react';
import dataJson from "../../../gsm-price.json"
import priceCss from "./price.module.css"
export function Price () {
    const data = dataJson.shop.items.item;
    const [searchQuery, setSearchQuery] = useState('');
    const [gsm, setGsm] = useState([]);
    gsm.sort((a, b) => (a.available < b.available ? 1 : -1));
    useEffect(() => {
        if (searchQuery === '') {
          return;
        }
        setGsm(
          data.filter(data =>
            data.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
      }, [data, searchQuery]);
      function formSubmit(query) {
        if (query === searchQuery) {
          return;
        }
        setSearchQuery(query.toLowerCase());
        setGsm([]);
       
      
      }
      console.log(gsm.length)
    return (
        <><Form onSubmit={formSubmit} />
        <table className={priceCss.priceTable}>
            <tr>
                <th className={priceCss.tableTitle}>Найменування</th>
                <th className={priceCss.tableTitle}>Ціна</th>
                <th className={priceCss.tableTitle}>Наявність</th>
            </tr>
            {gsm.map(item => {
                let priceLCD = Math.ceil(((item.price + 19) * 39) / 50) * 50;
                let priceCharge = Math.ceil(((item.price + 11) * 39) / 50) * 50;
                let glassCam = Math.ceil(((item.price + 11) * 39) / 50) * 50;
                // let promoPrice = Math.ceil(((item.price + 17) * 39) / 50) * 50;
                let iphoneRepair = Math.ceil(((item.price + 30) * 39) / 50) * 50;
                let newIphoneRepair = Math.ceil(((item.price + 40) * 39) / 50) * 50;
                let ICNewIphoneRepair = Math.ceil(((item.price + 50) * 39) / 50) * 50;
                let available = item.available;

                let newIphone = item.name.includes('iPhone X') ||
                    item.name.includes('iPhone XS') ||
                    item.name.includes('iPhone XS Max') ||
                    item.name.includes('iPhone 11') ||
                    item.name.includes('iPhone 11 Pro') ||
                    item.name.includes('iPhone 11 Pro Max') ||
                    item.name.includes('iPhone 12') ||
                    item.name.includes('iPhone 12 Mini') ||
                    item.name.includes('iPhone 12 Pro') ||
                    item.name.includes('iPhone 12 Pro Max') ||
                    item.name.includes('iPhone 13 Pro Max') ||
                    item.name.includes('iPhone 13 Pro') ||
                    item.name.includes('iPhone 13');

                if (item.price >= 25) {
                    priceLCD = Math.ceil(((item.price + 22) * 39) / 50) * 50;
                }
                if (item.price >= 90) {
                    // eslint-disable-next-line no-unused-vars
                    priceLCD = Math.ceil(((item.price + 30) * 39) / 50) * 50;
                }
                if (item.name.includes('Акумулятор')) {
                    return (
                        <tr key={item.vendorCode}>
                            <div className={priceCss.tableItem}>
                                <td> <img  className={priceCss.tableImage} src={item.image} alt="" width="50" height="40" />{' '}</td>
                                <td>  {item.name}</td>
                            </div>
                            {newIphone ? (
                                <td className={priceCss.tableTitle}>{iphoneRepair} грн</td>
                            ) : (
                                <td className={priceCss.tableTitle}>{priceCharge} грн</td>
                            )}
                                      {available ? (
                                <td className={priceCss.tableTitle}>На складі</td>
                            ) : (<td className={priceCss.unavailable}>Запит</td>)}

                        </tr>
                    );
                }
                if (item.name.includes('Бузер')) {
                    return (
                        <tr key={item.vendorCode}>
                            <div className={priceCss.tableItem}>
                                <td> <img className={priceCss.tableImage} src={item.image} alt="" width="50" height="40" />{' '}</td>
                                <td>  {item.name}</td>
                            </div>
                            {newIphone ? (
                                <td className={priceCss.tableTitle}>{iphoneRepair} грн</td>
                            ) : (
                                <td className={priceCss.tableTitle}>{priceCharge} грн</td>
                            )}
                            {available ? (
                                <td className={priceCss.tableTitle}>На складі</td>
                            ) : (<td className={priceCss.unavailable}>Запит</td>)}
                        </tr>
                    );
                }
                if (item.name.includes('Динамік')) {
                    return (
                        <tr key={item.vendorCode}>
                            <div className={priceCss.tableItem}>
                                <td> <img className={priceCss.tableImage} src={item.image} alt="" width="50" height="40" />{' '}</td>
                                <td>  {item.name}</td>
                            </div>
                            {newIphone ? (
                                <td className={priceCss.tableTitle}>{iphoneRepair} грн</td>
                            ) : (
                                <td className={priceCss.tableTitle}>{priceCharge} грн</td>
                            )}

{available ? (
                                <td className={priceCss.tableTitle}>На складі</td>
                            ) : (<td className={priceCss.unavailable}>Запит</td>)}
                        </tr>
                    );
                }
                if (item.name.includes('Дисплей')) {
                    return (
                        <tr key={item.vendorCode}>
                            <div className={priceCss.tableItem}>
                                <td> <img className={priceCss.tableImage} src={item.image} alt="" width="50" height="40" />{' '}</td>
                                <td>  {item.name}</td>
                            </div>
                            {newIphone ? (
                                <td className={priceCss.tableTitle}>{iphoneRepair} грн</td>
                            ) : (
                                <td className={priceCss.tableTitle}>{priceLCD} грн</td>
                            )}
                             {available ? (
                                <td className={priceCss.tableTitle}>На складі</td>
                            ) : (<td className={priceCss.unavailable}>Запит</td>)}
                        </tr>
                    );
                }
                if (item.name.toLowerCase().includes('задня частина') ||
                    item.name.toLowerCase().includes('кришка задня')) {
                    return (
                        <tr key={item.vendorCode}>
                            <div className={priceCss.tableItem}>
                                <td> <img className={priceCss.tableImage} src={item.image} alt="" width="50" height="40" />{' '}</td>
                                <td>  {item.name}</td>
                            </div>
                            {newIphone ? (
                                <td className={priceCss.tableTitle}>{iphoneRepair} грн</td>
                            ) : (
                                <td className={priceCss.tableTitle}>{priceCharge} грн</td>
                            )}
                             {available ? (
                                <td className={priceCss.tableTitle}>На складі</td>
                            ) : (<td className={priceCss.unavailable}>Запит</td>)}
                        </tr>
                    );
                }
                if (item.name.includes('Камера')) {
                    return (
                        <tr key={item.vendorCode}>
                            <div className={priceCss.tableItem}>
                                <td> <img className={priceCss.tableImage} src={item.image} alt="" width="50" height="40" />{' '}</td>
                                <td>  {item.name}</td>
                            </div>
                            {newIphone ? (
                                <td className={priceCss.tableTitle}>{newIphoneRepair} грн</td>
                            ) : (
                                <td className={priceCss.tableTitle}>{priceCharge} грн</td>
                            )}
                            {available ? (
                                <td className={priceCss.tableTitle}>На складі</td>
                            ) : (<td className={priceCss.unavailable}>Запит</td>)}
                        </tr>
                    );
                }
                if (item.name.includes('Корпус')) {
                    return (
                        <tr key={item.vendorCode}>
                            <div className={priceCss.tableItem}>
                                <td> <img className={priceCss.tableImage} src={item.image} alt="" width="50" height="40" />{' '}</td>
                                <td>  {item.name}</td>
                            </div>
                            {newIphone ? (
                                <td className={priceCss.tableTitle}>{newIphoneRepair} грн</td>
                            ) : (
                                <td className={priceCss.tableTitle}>{priceCharge} грн</td>
                            )}
                             {available ? (
                                <td className={priceCss.tableTitle}>На складі</td>
                            ) : (<td className={priceCss.unavailable}>Запит</td>)}
                        </tr>
                    );
                }
                if (item.name.includes('Скло камери')) {
                    return (
                        <tr key={item.vendorCode}>
                            <div className={priceCss.tableItem}>
                                <td> <img className={priceCss.tableImage} src={item.image} alt="" width="50" height="40" />{' '}</td>
                                <td>  {item.name}</td>
                            </div>
                            <td className={priceCss.tableTitle}>{glassCam} грн</td>
                            {available ? (
                                <td className={priceCss.tableTitle}>На складі</td>
                            ) : (<td className={priceCss.unavailable}>Запит</td>)}
                        </tr>
                    );
                }
                if (item.name.includes('Мікросхема')) {
                    return (
                        <tr key={item.vendorCode}>
                            <div className={priceCss.tableItem}>
                                <td><img className={priceCss.tableImage} src={item.image} alt="" width="50" height="40" />{' '}</td>
                                <td>  {item.name}</td>
                            </div>
                            {newIphone ? (
                                <td className={priceCss.tableTitle}>{ICNewIphoneRepair} грн</td>
                            ) : (
                                <td className={priceCss.tableTitle}>{priceCharge} грн</td>
                            )}
                             {available ? (
                                <td className={priceCss.tableTitle}>На складі</td>
                            ) : (<td className={priceCss.unavailable}>Запит</td>)}
                        </tr>
                    );
                }
                if (item.name.toLowerCase().includes("роз'єм заряд") ||
                    item.name.toLowerCase().includes('charge')) {
                    return (
                        <tr key={item.vendorCode}>
                            <div className={priceCss.tableItem}>
                                <td> <img className={priceCss.tableImage} src={item.image} alt="" width="50" height="40" />{' '}</td>
                                <td>  {item.name}</td>
                            </div>
                            {newIphone ? (
                                <td className={priceCss.tableTitle}>{iphoneRepair} грн</td>
                            ) : (
                                <td className={priceCss.tableTitle}>{priceCharge} грн</td>
                            )}
                           {available ? (
                                <td className={priceCss.tableTitle}>На складі</td>
                            ) : (<td className={priceCss.unavailable}>Запит</td>)}
                        </tr>
                    );
                }
                if (item.name.includes('Тачскрін')) {
                    return (
                        <tr key={item.vendorCode}>
                            <div className={priceCss.tableItem}>
                                <td> <img className={priceCss.tableImage} src={item.image} alt="" width="50" height="40" />{' '}</td>
                                <td>  {item.name}</td>
                            </div>
                            {newIphone ? (
                                <td className={priceCss.tableTitle}>{iphoneRepair} грн</td>
                            ) : (
                                <td className={priceCss.tableTitle}>{priceCharge} грн</td>
                            )}
                             {available ? (
                                <td className={priceCss.tableTitle}>На складі</td>
                            ) : (<td className={priceCss.unavailable}>Запит</td>)}
                        </tr>
                    );
                }
                if (item.name.includes('Шлейф')) {
                    return (
                        <tr key={item.vendorCode}>
                            <div className={priceCss.tableItem}>
                                <td> <img className={priceCss.tableImage} src={item.image} alt="" width="50" height="40" />{' '}</td>
                                <td>  {item.name}</td>
                            </div>
                            {newIphone ? (
                                <td className={priceCss.tableTitle}>{iphoneRepair} грн</td>
                            ) : (
                                <td className={priceCss.tableTitle}>{priceCharge} грн</td>
                            )}
                           {available ? (
                                <td className={priceCss.tableTitle}>На складі</td>
                            ) : (<td className={priceCss.unavailable}>Запит</td>)}
                        </tr>
                    );
                } else {
                    return null;
                }
            })}
        </table></>
 )
}

