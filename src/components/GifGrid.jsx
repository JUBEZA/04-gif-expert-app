import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifs'
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState(10)

  const newImages = await getGifs( category );
  setImages(newImages)

  useEffect( () => {
    getImages();
  },[])



  return (
    <>
      <h3>{ category }</h3>

      <ol>
        {
          images.map( ({ id, title }) => (
            <GifItem />
          ))
        }
      </ol>

    </>
  )
}
