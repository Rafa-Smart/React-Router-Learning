import { Link, Outlet, NavLink, useLocation } from "react-router";
// ini untuk yang navlink
// jadinavlinkn ity akan deteksi kalo misalkan lagi di klik atau sedang klik nav yang itu
// maka akan otomatis mempunyai class active, dan kalo udah ganti maka akan dihapus lagi si class activenya
// penting
// jadi navlink ini hanya mengecek path nya aja, jadi engga peduli untuk yang hash dan juga seacrhnya
import './data/style.css'
export default function Data() {
  const location = useLocation();
  return (
    <div>
      <div>
        <h1>ini adalah header</h1>

        {/* 1. ini pake tag a */}
        {/* ini kalo pake tag a, jai dia akna selalu reload ulang */}
        {/* jadi meskipun spa tapi dia tetep reloa ulang ketika pindah halaman / komponen */}
        {/* ini kan kelebihan si spa jadi engga reaload, tpi kalo pake ini jadinya ennga bagus */}
        {/* <nav>
            <ul style={{display:'flex','flexDirection':'row'}}>
                <li style={{marginRight:'30px'}}><a href="/data/products">Products</a></li>
                <li style={{marginRight:'30px'}}><a href="/data/customers">Customers</a></li>
                <li style={{marginRight:'30px'}}><a href="/data/sellers">Sellers</a></li>
            </ul>
        </nav> */}

        {/* 2. ini pake link */}
        {/* <nav>
            <ul style={{display:'flex','flexDirection':'row'}}>
                <li style={{marginRight:'30px'}}><Link to={'/data/sellers'}>Sellers</Link></li>
                <li style={{marginRight:'30px'}}><Link to={'/data/customers'}>Customers</Link></li>
                <li style={{marginRight:'30px'}}><Link to={{
                    pathname:'/data/products',
                    hash:'#top', // ini tuh kaya ancor gitu nanti pake id, jadi misla bisa lanusngke bagian bagiantertentu pada sebuah halaman jadi gausah scroll dulu
                    search:'?category=fashion'

                    // hasil : http://localhost:5173/data/products?category=fashion#top
                }}>Products</Link></li>
            </ul>
        </nav> */}


        {/* 3.NavLink */}
        <nav>
            <ul style={{display:'flex','flexDirection':'row'}}>
                <li style={{marginRight:'30px'}}><NavLink to={'/data/sellers'}>Sellers</NavLink></li>
                <li style={{marginRight:'30px'}}><NavLink to={'/data/customers'}>Customers</NavLink></li>
                <li style={{marginRight:'30px'}}><NavLink to={{
                    pathname:'/data/products',
                    hash:'#top', // ini tuh kaya ancor gitu nanti pake id, jadi misla bisa lanusngke bagian bagiantertentu pada sebuah halaman jadi gausah scroll dulu

                    // ini tuh query paramnya
                    search:'?category=fashion'

                    // hasil : http://localhost:5173/data/products?category=fashion#top
                }}>Products</NavLink></li>
            </ul>
        </nav>



        <hr></hr>
      </div>
      {/* outlet ini akan di ganti oleh si chilsnya secara dinamis     */}
      <Outlet></Outlet>
      <div>
        <hr></hr>
        <br></br>
        <h1>ini adalah footer</h1>
        <p>Location: {location.pathname}{location.search}{location.hash}</p>
      </div>
    </div>
  );
} 

// kalo di main.jsxnya gini, berati nanti si komponen product, customer dan seller
// akan masuk secara dinamis ke si outletnya

// dan kalo misalkan di komponen Data itu kita tidak menyertakan Outlet
// maka ketika kita akses /data/product
// maka yang akna di tmapilakn hanya lah si komponen data ini saja
// jadi komponen si produknya akna tertimpa atau ter override

{
  /* <Route path="/data" element={<Data></Data>}>
  <Route path="Product" element={<Product></Product>}></Route>
  <Route path="Customer" element={<Customer></Customer>}></Route>
  <Route path="Seller" element={<Seller></Seller>}></Route>
</Route>; */
}


// 2. link
// React Router menyediakan komponen Link
// Komponen Link ini digunakan sebagai pengganti Anchor Element
// Berbeda dengan Anchor Element, komponen Link ini tidak akan melakukan
// reload halaman
// https://api.reactrouter.com/v7/functions/react_router.Link.html

// 3. navlink
// Salah satu yang biasa kita lakukan ketika membuat Link adalah, membedakan
// style Link yang sedang aktif dan yang tidak aktif
// Biasanya, kita lakukan pengecekan, jika URL path yang sedang dikunjungi sama
// dengan tujuan Link, maka kita ubah style nya menjadi aktif
// React Router menyediakan komponen khusus untuk mempermudah hal ini, cara
// penggunaannya sama seperti komponen Link, namun bedanya jika URL path saat
// ini sama dengan tujuan dari NavLink, maka secara otomatis NavLink akan
// menggunakan style a.active
// https://api.reactrouter.com/v7/functions/react_router.NavLink.html

// 4. use navigate
// Pada kasus tertentu, mungkin kita ingin melakukan navigasi dari satu halaman ke
// halaman lain menggunakan JavaScript
// Untuk melakukan ini, React Router menyediakan Hooks useNavigate()
// https://api.reactrouter.com/v7/functions/react_router.useNavigate.html
// useNavigate() akan mengembalikan function yang bisa kita gunakan untuk
// berpindah ke halaman lain

// jadi dia tuh akan mereturn sebauh fungsi yang paramnya itu mirip kaya link dan navlink
// https://api.reactrouter.com/v7/interfaces/react_router.NavigateFunction.html
// Kita bisa gunakan parameter Path
// https://api.reactrouter.com/v7/interfaces/react_router.Path.html
// Atau number (untuk maju/mundur) bhh

// atau bisa juga kit masukan -1, jadi ini tuh kaya balik ke halaman sebelumnya / redirect gitu lah


// 5.useLocation()
// Untuk mendapatkan URL saat ini, sebenarnya kita bisa menggunakan
// window.location.href
// Tapi React Router menyediakan Hook useLocation(), yang bisa digunakan untuk
// mendapatkan lokasi path saat ini
// https://api.reactrouter.com/v7/functions/react_router.useLocation.html
// Hasil return dari useLocation() adalah object Location, sehingga kita bisa dapat
// informasi lengkap dari location, seperti path, query sampai ke #fragment
// https://api.reactrouter.com/v7/interfaces/react_router.Location.html