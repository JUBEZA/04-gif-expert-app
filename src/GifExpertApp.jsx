import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState( ['One Punch', 'Dragon Ball']);

    const onAddCategory = ( newCategory ) => {
      // console.log(newCategory);
      // categories.push(newCategory);

      setCategories([ newCategory, ...categories]);

    }

  return (
    <>
      {/* titulo  */}
      <div>GifExpertApp</div>

      {/* Input */}
      <AddCategory
        // setCategories={ setCategories }
        onNewCategory={ onAddCategory }
      />


      {/* Listado de Gif */}
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {
        categories.map( category => {
            return <li key={ category }>{ category }</li>
          })
        }

        {/* <li>ABC</li> */}

      </ol>

      {/* Gif Item */}

    </>
  )
}
