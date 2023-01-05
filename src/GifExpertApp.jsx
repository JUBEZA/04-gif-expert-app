import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState( ['One Punch', 'Dragon Ball']);

    const onAddCategory = ( newCategory ) => {
      // console.log(newCategory);
      // categories.push(newCategory);
      if ( categories.includes(newCategory) ) return;

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

      {
      categories.map( category => (
        <GifGrid
          key={ category }
          category={ category }/>

      ))
      }

        {/* <li>ABC</li> */}



      {/* Gif Item */}

    </>
  )
}
