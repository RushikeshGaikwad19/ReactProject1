/*git init
git add .
git commit -m "message"
git branch -M main
git remote add origin URL
git push -u origin main*/
import React from "react";
import Person from './Person'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Footer from './components/Footer'
import "./App.css"
const App=()=>{
  return (
    <>
    <Navbar/>
    <Hero/>
    <Footer/>
    </>
  )

}
export default App