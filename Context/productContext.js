import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Notification from "../Components/Notification";

const ProductContext = createContext()

export const ProductProvider = ({children}) => {

    const [products, setProducts] = useState();
    const [showFirst, setShowFirst] = useState([]);
    const [showSecond, setShowSecond] = useState([]);
    const [showThird, setShowThird] = useState([]);
    const [category, setCategory] = useState('All');
    const [showMany, setShowMany] = useState(Array(3));
    const [filteredProducts, setFiltered] = useState('All')
    const [featured, setFeatured] = useState(Array(3))
    const [currency, setCurrency] = useState('RON')
    const [id, setID] = useState([])
    const [size, setSize] = useState('S')
    const [wishList, setWishList] = useState([])
    const [wishNCart, setWishNCart] = useState([])
    const [modalOff, setModalOff] = useState(false)
    const [topBtn, setTopBtn] = useState(false);
    const [addedToCart, setAdded] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [notification, setNotification] = useState(false)
    const [itemOnWish, setItemOnWish] = useState([])

    useEffect(() => {
      const oneItem = Math.floor(Math.random() * 31)
      const secondItem = Math.floor(Math.random() * 31)
      const thirdItem = Math.floor(Math.random() * 31)
      const getProducts = async () => {
        try {
          const response = await axios.get("https://advanced.vercel.app/api/shop");
          setShowFirst([response.data[30]]);
          setShowSecond([response.data[10]]);
          setShowThird([response.data[5]]);
          setShowMany([response.data[5], response.data[20], response.data[15]]);
          setFeatured([response.data[oneItem], response.data[secondItem], response.data[thirdItem]])
          setProducts(response.data)
          document.body.style.overflowX = "hidden"
        } catch (error) {
          console.log(error);
        }
      };
      getProducts();
    }, [category])


    useEffect(()=>{
      console.log()
      filterCategoryHandler()
    }, [products])
    useEffect(()=>{
      window.addEventListener('scroll', () => {
        if(window.scrollY > 30){
          setTopBtn(true)
        }else{
          setTopBtn(false)
        }
      })
    }, [])
    
    const currencyType = (e) => {
        setCurrency(e.target.value)
    }

    // Fetch one item
    const getOne = (item) => {
        setID(item)
      }
    //add to cart function
    const addToCart = (item) => {
      setAdded([...addedToCart, item])
      const exists = cartItems.find((x) => x.id === item.id);
      if (exists) {
        setCartItems(
          cartItems.map((x) =>
            x.id === item.id ? { ...exists, qty: exists.qty + 1 } : x
          )
        );
      } else {
        setCartItems([
          ...cartItems,
          {
            ...item,
            qty: 1,
            size: size,
          },
        ]);
      }
    };
    const sizeHandler = (e) => {
      setSize(e.target.value);
      const exists = cartItems.find((x) => x.id === e.id);
      if (exists) {
        setCartItems(
          cartItems.map((x) => (x.id === e.id ? { ...exists, size: size } : x))
        );
      }
    };
    const removeFromCart = (item) => {
      const exists = cartItems.find((x) => x.id === item.id);
      if (exists.qty === 1) {
        setCartItems(cartItems.filter((x) => x.id !== item.id));
      } else {
        setCartItems(
          cartItems.map((x) =>
            x.id === item.id ? { ...exists, qty: exists.qty - 1 } : x
          )
        );
      }
    };
    //add to whishList function
    const notificationHandler = () => {
      setNotification(true)
    }
    const addToWish = (item) => {
      const exists = wishList.find((x) => x.id === item.id);
      exists ? notificationHandler() : setWishList([...wishList, item]);
      setItemOnWish(item)
      } 
    notification === true ? setTimeout(() => setNotification(false), 5000) : null 
    const removeFromWish = (item) => {
        setWishList(wishList.filter((x) => x.id !== item.id));
        console.log(item);
    };
    const filterCategoryHandler = (e) => {
        switch (category) {
          case "All":
            setFiltered(products);
            break;
          case "women":
            setFiltered(
              products.filter((products) => products.category.women === true)
            );
            break;
          case "men":
            setFiltered(products.filter((products) => products.category.men === true));
            break;
          case "shoes":
            setFiltered(
              products.filter((products) => products.category.cat === "shoes")
            );
            break;
          case "dress":
            setFiltered(
              products.filter((products) => products.category.cat === "dress")
            );
            break;
          case "hatters":
            setFiltered(
              products.filter((products) => products.brand === "Hatters")
            );
            break;
        case "nnm":
            setFiltered(
                products.filter((products) => products.brand === "NNM")
            );
            break;
        case "hatters":
            setFiltered(
              products.filter((products) => products.brand === "Hatters")
            );
            break;
        case "coaters":
            setFiltered(
                products.filter((products) => products.brand === "COATERS")
            );
            break;
        case "eljeanos":
            setFiltered(
              products.filter((products) => products.brand === "elJeanos")
            );
            break;
        case "shoester":
            setFiltered(
                products.filter((products) => products.brand === "SHOSTER")
            );
            break;
        case "nike":
            setFiltered(
                products.filter((products) => products.brand === "Nike")
            );
            break;
        case "hatem":
            setFiltered(
                products.filter((products) => products.brand === "HATEM")
            );
            break;
        case "cote":
            setFiltered(
                products.filter((products) => products.brand === "COTE")
            );
            break;
        case "combers":
            setFiltered(
                products.filter((products) => products.brand === "COMBERS")
            );
            break;
        }
      };

      // check if product is in cart and wishlist too
    const checkProduct = (item) => {
      const itemExists = wishList.find((product) => product.id === item.id);
      setWishNCart(item)
      if(itemExists){
        setModalOff(true)
      }else{
        return
      }
    }
    const modalToggle = () => {
      setModalOff(!modalOff)
    }
    const goTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }

    return(
        <ProductContext.Provider value={{ 
            products: products, 
            showFirst: showFirst, 
            showSecond: showSecond, 
            showThird: showThird,
            featured: featured, 
            showMany: showMany,
            setCategory: setCategory,
            category: category,
            filteredProducts: filteredProducts,
            currency: currency,
            currencyType: currencyType,
            getOne: getOne,
            id: id,
            size: size,
            sizeHandler: sizeHandler,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            cartItems: cartItems,
            addToWish: addToWish,
            removeFromWish: removeFromWish,
            wishList: wishList,
            checkProduct: checkProduct,
            wishNCart: wishNCart,
            modalToggle: modalToggle,
            modalOff: modalOff,
            goTop: goTop,
            topBtn: topBtn,
            addedToCart: addedToCart,
            notification: notification,    
            itemOnWish: itemOnWish,  
            notificationHandler: notificationHandler,
            }}>
            {children}
        </ProductContext.Provider>
    )
}
export default ProductContext
