import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

export default function ProductSearch() {
  const [searchparams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState(searchparams.get('search') || "");

  function handleSearchOnclick(e) {
    if(search){
        navigate({
            pathname:`/data/products/search`,
            search:`?search=${search}`
        })
    }else {
      setSearch(null)
      navigate({
            pathname:`/data/products/search`,
        })
    }
  }

  // jadi keitka tidak ada inputan seacrh di inputan, maka akn muncul seacrh dlu
  // tapi jika ada maka ak di tampilan seacrhnya
  // tapi ini tuh kalo misalkan udah sekali kita seacrh yag ada an / ga null
  // /ketika kita klik lagi seacrh maka tidka akna ke sacrh ulang dan juga tidak muncul si seacrh dulu nya
  // jadi

  return (
    <div>
    <h1>Search Products</h1>
        <input type="text" placeholder="search..." value={search} onChange={(e) => setSearch(e.target.value)}></input>
        <button onClick={handleSearchOnclick}>search</button>
      <hr></hr>
      <p>
        data search: {searchparams.get('search') ?? 'search dulu'}
      </p>
    </div>
  );
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



// Untuk mendapatkan URL saat ini, sebenarnya kita bisa menggunakan
// window.location.href
// Tapi React Router menyediakan Hook useLocation(), yang bisa digunakan untuk
// mendapatkan lokasi path saat ini
// https://api.reactrouter.com/v7/functions/react_router.useLocation.html
// Hasil return dari useLocation() adalah object Location, sehingga kita bisa dapat
// informasi lengkap dari location, seperti path, query sampai ke #fragment
// https://api.reactrouter.com/v7/interfaces/react_router.Location.html