import { useState } from "react";
import formCss from "./Form.module.css"
export function Form ({onSubmit}){
    const [searchQuery, setSearchQuery] = useState('');
    const handleChange = e => {
      setSearchQuery(e.currentTarget.value.toLowerCase());
    };
    const handleSubmit = e => {
      e.preventDefault();
      if (searchQuery === '') {
        return;
      }
      onSubmit(searchQuery);
    };
    return (
        <form className={formCss.search} onSubmit={handleSubmit}>
        <input
          className={formCss.input}
          placeholder="Введіть модель телефону"
          name="data"
          value={searchQuery}
          onChange={handleChange}
        />
        
        <button className={formCss.searchButton} type="submit">
          Пошук
        </button>
        </form>
    )
}