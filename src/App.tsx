 
 
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Loading from "./loading/loading";
import Home from "./components/home";
import Collection from "./components/Collection";
import ProductDetail from "./pages/PRoductDetail";
import FragranceFinderPage from "./pages/fragnanceFinder";
import About from "./components/About";
import CustomBlendPage from "./pages/customBlend";
import StoryPage from "./pages/StoryPage";
import Header from "./common/navbar";
import Newsletter from "./components/Newsletter";
import GiftGuidePage from "./pages/GiftGuidePage";
import BlogPage from "./pages/BlogPage";
import Contact from "./pages/Contact";



const App = () => {
  const [isloading,setisloading]=useState(true)
 
  useState(()=>{
    const timer= setTimeout(()=>{
      setisloading(false)
    },3000)
    return ()=>clearTimeout(timer)
  })
   
if(isloading){
    return <Loading />
  }
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/collection/:id" element={<ProductDetail/>}/>
        <Route path="fragrance-finder" element={<FragranceFinderPage/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="custom-blend" element={<CustomBlendPage/>}/>
        <Route path="gift-guide" element={<GiftGuidePage/>}/>
        <Route path="story" element={<StoryPage/>}/>
        <Route path="blog" element={<BlogPage/>}/>
        <Route path="contact" element={<Contact/>}/>
        
        
      </Routes>
      <Newsletter />
    </>
  );
};

export default App;
