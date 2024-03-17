import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import {LAPTOPS} from "../data/data";
import { useLocalStorage } from '../Hooks/useLocalStorage';
import { useGeolocation } from '../Hooks/useGeolocation';
const ShopContext = createContext();
    function getDefaultCart(){
        let cart = {};
        for(let i = 1; i < LAPTOPS.length+1;i++){
            cart[i] = 0;
        }
        return cart;
    }
    const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client?"

    function convertToEmoji(countryCode) {
        const codePoints = countryCode
          .toUpperCase()
          .split("")
          .map((char) => 127397 + char.charCodeAt());
        return String.fromCodePoint(...codePoints);
      }
    const initialState={
        showDetails:false,
        LaptopId:null
    }
    function reducer(state,action){
        switch(action.type){
            case "opened":
                return {...state,showDetails:true,LaptopId:action.payload}
            case "closed":
                return {...state,showDetails:false,LaptopId:null}
            default:
                throw new Error("Unknown Action")
        }
    }
function ShopContextProvider({children}) {
    const [isOpened,setIsOpened] = useState(false);
    const [cartItems,setCartItems] = useLocalStorage(getDefaultCart(),"Cart");
    const [FavItems,setFavItems] = useLocalStorage([],"Favorites");
    const {position, getPosition, isLoading} = useGeolocation();
    const [myPosition,setMyPosition] = useState([0,0]);
    const [cityName, setCityName] = useLocalStorage("","City");
    const [country, setCountry] = useLocalStorage("","Country");
    const [emoji,setEmoji] = useState("","Emoji");
    const [lat,lng] = myPosition;
    const [{showDetails,LaptopId},dispatch]= useReducer(reducer,initialState);
    const [Brand,setBrand] = useState("")
    const [Processor,setProcessor] = useState("")
    const [Storage,setStorage] = useState("")
    const [Ram,setRam] = useState("")

    function handleOpen(){
        setIsOpened((isOpened) => !isOpened);
    }
function addToCart(itemId){
    setCartItems((prev) => ({...prev, [itemId] : prev[itemId] + 1}))
}
function removeFromCart(itemId){
    setCartItems((prev) => ({...prev,[itemId] : prev[itemId] - 1}))
}

function addToFav(itemId,img,brand,model,processor,ram,storage,graphicCard){
    
    setFavItems((prev) => ([...prev,{itemId,img,brand,model,processor,ram,storage,graphicCard}]))
    console.log(FavItems);
}
function deleteItemFromCart(itemId){
    setCartItems((prev) => ({...prev,[itemId] : 0}))
}

function removeFromFav(Id){
    setFavItems((prev) => prev.filter((item)=>item.itemId !== Id))
}
    function getTotalPrice(){
        let total = 0;
        for(let item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = LAPTOPS.find((lap) => lap.id === Number(item));
                total += itemInfo.price * cartItems[item] 
            }
        }
        return Math.round(total);
    }
    function getTotalAmount(){
        let total = 0;
        for(let item in cartItems){
            if(cartItems[item] > 0){
                total +=  cartItems[item] 
            }
        }
        return Math.round(total);
    }

    function getTotalFavs(){
        return FavItems.length;
    }
    useEffect(()=>{
        if(position){
            setMyPosition([position.lat,position.lng])
        }
    },[position])
    useEffect(()=>{
        if(!lat && !lng) return;
        async function fetchCityByPosition(){
          try{
            const res = await fetch(`${BASE_URL}latitude=${lat}&longitude=${lng}`);
            if(!res.ok) throw new Error("failed to fetch data");
            const data = await res.json();
            console.log(data);
            if(!data.countryCode) throw new Error("it doest'n seem to be a city. click somewhere else 🙂")
            setCityName(data.city || data.locality || "")
            setCountry(data.countryName)
            setEmoji(convertToEmoji(data.countryCode))
          }
          catch (err){
            console.log(err.message)
          }
          finally{
            console.log("success")
          }
        }
        fetchCityByPosition();
      },[lat,lng])

   

  return (
   <ShopContext.Provider value={
    {handleOpen,
        isOpened,
        addToCart,
        removeFromCart,cartItems,
        getTotalPrice,getTotalAmount,setRam,
        getDefaultCart,setCartItems,deleteItemFromCart,
        addToFav,removeFromFav,FavItems,setProcessor,setStorage,
        getTotalFavs,getPosition,dispatch,showDetails,LaptopId,setBrand,
        position,isLoading,cityName,country,emoji,Brand,Processor,Storage,Ram

    }}>
    {children}
   </ShopContext.Provider>
  )
}
function useShopContext(){
    const context = useContext(ShopContext);
    return context;
}

export { ShopContextProvider, useShopContext}
