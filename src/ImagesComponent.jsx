import { useParams } from "react-router"
import { ImageName } from "./utls/image";

export default function ImagesComponent(){
    const params = useParams();
    console.log(params["*"])
    const image = ImageName(params["*"])
    return (
        <div>
            <h1>Halaman Images</h1>
            <p>The name image: {image.filename}</p>
            <p>The extension image: {image.extension}</p>
        </div>
    )
}

// Saat menggunakan URL, kadang kita akan memanfaatkan Query Parameter untuk
// mengirim data
// React Router menyediakan Hook useSearchParams() yang bisa kita gunakan
// untuk mendapatkan data Query Parameter
// https://api.reactrouter.com/v7/functions/react_router.useSearchParams.html
// useSearchParams() akan mengembalikan Array yang berisi 
// object URLSearchParams dan setter function nya
// jadi kaya state gitu
// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams


