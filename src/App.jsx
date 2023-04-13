import React, { useState } from "react";
import Product from "./components/Product";
import ShoppingCart from "./components/ShoppingCart";

import "./App.css";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Cola",
      price: 6,
      image:
        "https://ayb.akinoncdn.com/products/2019/01/18/3544/5aa1ee14-1c83-4213-a62b-773c4785e187_size780x780_quality60_cropCenter.jpg",
      quantity: 0,
    },
    {
      id: 2,
      title: "Fanta",
      price: 5,
      image:
        "https://www.coca-cola.com.tr/content/dam/one/tr/tr/product-images/fanta-portakal_product_image.png",
      quantity: 0,
    },
    {
      id: 3,
      title: "Sprite",
      price: 5,
      image: "https://images.ofix.com/product-image/s99509_2.jpg",
      quantity: 0,
    },
    {
      id: 4,
      title: "Ayran",
      price: 3,
      image:
        "https://konyamevlana.com/florya/wp-content/uploads/2020/12/sutas-ayran-285ml.jpg",
      quantity: 0,
    },
    {
      id: 5,
      title: "Salgam",
      price: 4,
      image: "http://esenlik.com.tr//images/prod/5704.jpg",
      quantity: 0,
    },
    {
      id: 6,
      title: "Cay",
      price: 3,
      image:
        "https://evidea.akinoncdn.com/products/2021/08/05/62421/e5bda9ce-91bf-453a-96e1-acea983efb2a.jpg",
      quantity: 0,
    },
    {
      id: 7,
      title: "Kahve",
      price: 10,
      image:
        "https://media.istockphoto.com/photos/turkish-coffee-foamy-picture-id510413268?k=20&m=510413268&s=612x612&w=0&h=llBhDOUbNHaQXc-ch7UQ_OIWkmJAJUzaf6oZavKUrmQ=",
      quantity: 0,
    },
    {
      id: 8,
      title: "Soda",
      price: 4,
      image: "http://esenlik.com.tr//images/prod/2928.jpg",
      quantity: 0,
    },
    {
      id: 9,
      title: "Bisiklet",
      price: 1000,
      image:
        "https://productimages.hepsiburada.net/s/37/375/10567819821106.jpg",
      quantity: 0,
    },
    {
      id: 10,
      title: "Lüx Kol Saati",
      price: 25000,
      image:
        "https://www.dogansaatcilik.com.tr/ProductImages/118687/big/seiko-ssc719p-erkek-kol-saati__0296960735052182.jpg",
      quantity: 0,
    },
    {
      id: 11,
      title: "Bugatti Chiron",
      price: 2500000,
      image:
        "https://productimages.hepsiburada.net/s/34/375/10460429320242.jpg",
      quantity: 0,
    },
    {
      id: 12,
      title: "Iskender",
      price: 50,
      image:
        "https://img3.aksam.com.tr/imgsdisk/2020/10/31/t25_en-kolay-iskender-sosu-ta-744.jpg",
      quantity: 0,
    },
    {
      id: 13,
      title: "Lahmacun",
      price: 12,
      image:
        "https://cdn.yemek.com/mnresize/940/940/uploads/2020/04/lahmacun-yeni-one-cikan.jpg",
      quantity: 0,
    },
    {
      id: 14,
      title: "Malikane",
      price: 2500000000,
      image:
        "https://foto.haberler.com/haber/2020/12/07/israil-de-4-odali-malikane-250-milyon-dolarda-13784975_amp.jpg",
      quantity: 0,
    },
    {
      id: 15,
      title: "Helicopter",
      price: 28750000,
      image:
        "https://image.elitema.com.tr/db_images/224/4/11/arimg1138-8---bell-429-exter%C4%B1or.jpg",
      quantity: 0,
    },
    {
      id: 16,
      title: "Luxury Yatch",
      price: 17500000,
      image: "https://d.neoldu.com/news/57966.jpg",
      quantity: 0,
    },
    {
      id: 17,
      title: "Limosine",
      price: 1000000,
      image:
        "https://img.paratic.com/dosya/2015/03/dunyanin-en-pahali-limuzinleri-1024x683.jpg",
      quantity: 0,
    },
    {
      id: 18,
      title: "Ada",
      price: 125000000,
      image: "https://icdn.ensonhaber.com/resimler/galeri/1_11195.jpg",
      quantity: 0,
    },
    {
      id: 19,
      title: "Stadium",
      price: 2500000,
      image:
        "https://cdnuploads.aa.com.tr/uploads/Contents/2020/06/01/thumbs_b_c_dc24a18cc233bd960f410911f5d39bf2.jpg",
      quantity: 0,
    },
    {
      id: 20,
      title: "Bitcoin",
      price: 60000,
      image:
        "https://www.cumhuriyet.com.tr/Archive/2021/9/27/1872247/kapak_141123.jpg",
      quantity: 0,
    },
    {
      id: 21,
      title: "Messi Tshirt",
      price: 250,
      image:
        "https://st2.myideasoft.com/idea/fr/55/myassets/products/366/paris-saint-germain-cup-away-stadium-shirt-2021-22-kids-with-messi-30-printing-ss4-p-12087703-u-6v44pc9ht2ynaiyuv5uk-v-af3dfad2f9b44448a3068821419095db_min.jpg?revision=1628627354",
      quantity: 0,
    },
  ]);

  const [total, setTotal] = useState(128000000000);
  const [sumBuy, setSumbuy] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  let handleClick = (event) => {
    if (event.target.classList.contains("btn-add")) {
      let id = Number(event.target.id);
      let number = products[id - 1].quantity;
      let price = products[id - 1].price;
      let totalsum = total;
      let buy = sumBuy;
      if (number >= 0) {
        number++;
        totalsum = totalsum - price;
        buy = sumBuy + price;
        setProducts((products[id - 1].quantity = number));
        setProducts(() =>
          products.map((product) =>
            product.id == id ? { ...product, quantity: number } : product
          )
        );
        setTotal(totalsum);
        setSumbuy(buy);
        if (cartItems.length == 0) {
          let item = {
            id: id,
            title: products[id - 1].title,
            quantity: number,
            price: products[id - 1].price,
          };

          setCartItems([item]);
        } else {
          let itemId = cartItems.find((e) => e.id == id);
          if (itemId) {
            setCartItems(() =>
              cartItems.map((item) =>
                item.id == id ? { ...item, quantity: number } : item
              )
            );
          }
          if (!itemId) {
            let item = {
              id: id,
              title: products[id - 1].title,
              quantity: number,
              price: products[id - 1].price,
            };

            setCartItems([...cartItems, item]);
          }
        }
      }
    }
    //--
    if (event.target.classList.contains("btn-interest")) {
      let id = Number(event.target.id);
      let number = products[id - 1].quantity;
      let price = products[id - 1].price;
      let totalsum = total;
      let buy = sumBuy;

      if (number > 0) {
        number--;
        totalsum = totalsum + price;
        buy = sumBuy - price;
        setProducts((products[id - 1].quantity = number));
        setProducts(() =>
          products.map((product) =>
            product.id == id ? { ...product, quantity: number } : product
          )
        );
        setTotal(totalsum);
        setSumbuy(buy);
        if (cartItems.length == 0) {
          let item = {
            id: id,
            title: products[id - 1].title,
            quantity: number,
            price: products[id - 1].price,
          };
          // console.log(item);

          setCartItems([item]);
        } else {
          let itemId = cartItems.find((e) => e.id == id);
          console.log(itemId);
          if (itemId) {
            if (itemId.quantity > 0) {
              setCartItems(() =>
                cartItems.map((item) =>
                  item.id == id ? { ...item, quantity: number } : item
                )
              );
            }
            if (itemId.quantity == 1) {
              setCartItems(() =>
                cartItems.map((item, i) =>
                  item.id == id ? cartItems.splice(i, 1) : item
                )
              );
            }
          }
          if (!itemId) {
            let item = {
              id: id,
              title: products[id - 1].title,
              quantity: number,
              price: products[id - 1].price,
            };

            setCartItems([...cartItems, item]);
          }
        }
      }
      // console.log(products);
    }
  };

  const handleReset = () => {
    setCartItems([]);
    setSumbuy(0);
    setProducts(() =>
      products.map((product) =>
        product ? { ...product, quantity: 0 } : product
      )
    );
    setTotal(128000000000);
  };

  const handleAdjustQuantity = (event) => {
    if (event.target.classList.contains("btn-cong")) {
      let id = Number(event.target.id);
      let itemId = cartItems.find((e) => e.id == id);
      let quantity = itemId.quantity;
      let sumBuy1 = sumBuy;
      if (quantity >= 0) {
        quantity++;
        sumBuy1 = sumBuy1 + itemId.price;
        setCartItems(() =>
          cartItems.map((item) =>
            item.id == id ? { ...item, quantity: quantity } : item
          )
        );
        setProducts(() =>
          products.map((product) =>
            product.id == id ? { ...product, quantity: quantity } : product
          )
        );
        setSumbuy(sumBuy1);
      }
      console.log(sumBuy1);
    }
    if (event.target.classList.contains("btn-tru")) {
      let id = Number(event.target.id);
      let itemId = cartItems.find((e) => e.id == id);
      let sumBuy1 = sumBuy;
      let quantity = itemId.quantity;
      if (quantity > 0) {
        quantity--;
        sumBuy1 = sumBuy1 - itemId.price;
        setCartItems(() =>
          cartItems.map((item) =>
            item.id == id ? { ...item, quantity: quantity } : item
          )
        );
        setProducts(() =>
          products.map((product) =>
            product.id == id ? { ...product, quantity: quantity } : product
          )
        );

        setSumbuy(sumBuy1);
      }
      if (quantity == 0) {
        setCartItems(() =>
          cartItems.map((item, i) =>
            item.id == id ? cartItems.splice(i, 1) : item
          )
        );
      }
    }
  };

  return (
    <div className="App">
      <div className="header">
        To spent ${total.toLocaleString()} you have a lot of money!
      </div>
      <div className="productcart" onClick={handleClick}>
        <Product products={products}></Product>
      </div>
      <ShoppingCart
        cartItems={cartItems}
        sumBuy={sumBuy}
        handleReset={handleReset}
        handleAdjustQuantity={handleAdjustQuantity}
      />
    </div>
  );
}

export default App;
