import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Product from "./data/Product.jsx";
import Customer from "./data/Customer.jsx";
import Seller from "./data/Seller.jsx";
import Data from "./Data.jsx";
import ProductDetail from "./data/ProductDetail.jsx";
import ImagesComponent from "./ImagesComponent.jsx";
import NotFound from "./NotFound.jsx";
import ProductSearch from "./data/ProductSearch.jsx";

// jadi routingnya ini mirip kaya di laravel jadi akan ambil yan paling atasnya dulu

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* 1 */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        {/* 2 */}
        {/* ini route yang pertama akan jadi prefix
        dan untuk childdernya itu engga usah pake / lagi, karena sudah otomatis 
        hasilnya : http://localhost:5173/data/product      
        */}
        {/* nah jadi ini tuh si path /data itu hanya sebagai prefix. */}
        {/* <Route path="/data"> 
          <Route path="Product" element={<Product></Product>}></Route>
          <Route path="Customer" element={<Customer></Customer>}></Route>
          <Route path="Seller" element={<Seller></Seller>}></Route>
        </Route> */}
        {/* 4. layouting, jadi kita bisa pake template gitu
        jadi nanti si elemen route parentnya ini akna mempunyai komponen yang namanya adalah
        Outlet, ini tuh sperti childnrednya gitu, jad komponenyang ada dalam tag route parentnya ini
        akn emnampilkan si komponen data + komponen produk
        sebenarnya kita bisa aja pake atribut children, tapi react route punya cara ini*/}
        {/* kalo ini si pat /datanya itu sebagai layouting / template */}
        <Route path="/data" element={<Data></Data>}>
          <Route path="product-detail/:id_product/:name_product" element={<ProductDetail></ProductDetail>}></Route>
          <Route path="products" element={<Product></Product>}></Route>
          <Route path="customers" element={<Customer></Customer>}></Route>
          <Route path="sellers" element={<Seller></Seller>}></Route>
          <Route path="products/search" element={<ProductSearch></ProductSearch>}></Route>
          {/* buat images */}
          <Route path="images/*" element={<ImagesComponent></ImagesComponent>}></Route>
        </Route>

        {/* untuk not found */}
        <Route path="/*" element={<NotFound></NotFound>}></Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>
);

// 1. // jadi routing adalah pemetaan antar url dengna komponen yang akan di tampilkan

// Routing adalah pemetaan antara URL path dan komponen yang akan ditampilkan
// Untuk melakukan Routing, kita bisa menggunakan komponen <Routes>
// https://api.reactrouter.com/v7/functions/react_router.Routes.html
// Dan untuk pemetaan tiap Routing nya, kita bisa gunakan komponen <Route>
// https://api.reactrouter.com/v7/functions/react_router.Route.html

// jadi routes itu fungisnya untuk menaruh route routenya
// dan untuk route itu nanti untuk mengatur path / url dan komponen yang di tampilkan

// jadi kalo path / urlnya '/', maka akan menampilkan element home

// 2.nested route, jadi nanti ktia bisa pake prefix
// · Saat nanti kita membuat routing, kadang terdapat routing yang memiliki prefix
// yang sama
// · Jika kita harus buat satu per satu, maka akan tidak efektif ketika pembuatan kode
// nya
// · Untungnya, React Router mendukung Nested Route
// · Kita bisa membuat komponen Route di dalam komponen Route, dan secara
// otomatis Route path di atasnya akan digunakan sebagai prefix path untuk child
// Route nya


// 3. star segmen -> * jadi dia ini maksudnya adalah
// ketiak /* => maka dia kan cocok dengna karakter apapun, termasuk dengna karakter / sekalipun

// jadi misal kita punya path files/*
// maka dia kana cocok dnegan files/contoh-1, files/contoh-anjay/lagi/test
// nah ini tuh bisa di buat untuk page not found, jadi kal ad usser ngetik url yang kita engga punya
// maka kita bisa tampilkan page not found pake star segmen ini

// tapi harus di taruhnya itu di akhir, karena kan ketika user ngetikan url path di url bar
// maka akan di cocokan dengan route pathnya itu dari atas ke bawah


// 4.navigation
// Salah satu yang biasa kita lakukan saat membuat web, adalah berpindah dari satu
// halaman ke halaman yang lainnya
// Biasanya untuk perpindahan halaman, kita biasanya akan menggunakan Anchor
// Element, yaitu menggunakan tag <a>
// Namun permasalahannya adalah, ketika menggunakan Anchor Element, maka
// browser akan melakukan reload ke halaman baru, yang artinya halaman akan
// dimuat ulang, termasuk object React juga akan dibuat ulang semuanya
// Hal ini mungkin akan memperlambat proses perpindahan halaman

// oleh karena itu kita 