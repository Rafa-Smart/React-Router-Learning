import { useParams } from "react-router"

export default function ProductDetail(){

    // jadi untuk mgnakses url parameter, ktia bisa menggunakan  hooks useParams()
    // dan nanti dia akan mereturn sebuah obje dnenga atribut yang namanya
    // sesuai dnegna yang ada di pathnya
    // dan nanti itu returnnya pasti berupa string
    const params = useParams();
    return (
        <div>
            <h1>Halaman Detail Product</h1>
            <p>Detail Produk : {params.id_product}</p>
            <p>Name Produk : {params.name_product}</p>
        </div>
    )
}