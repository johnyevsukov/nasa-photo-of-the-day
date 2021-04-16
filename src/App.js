import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled, { keyframes } from 'styled-components'

const nasaAPI = 'https://api.nasa.gov/planetary/apod?api_key=FdWNjvl9EW5kHSgFbuvQnaTdX4XIZxspGdxl5MLd'

function App() {
  const [API, setAPI] = useState(nasaAPI)
  const [data, setData] = useState({})

  useEffect(function(){
    axios
    .get(API)
    .then(function(res){
      console.log(res)
      setData(res.data)
    })
    .catch(function(err){
      console.log(err)
    })
  }, [API])
  
  const StyledDiv = styled.div`
    img {
      border-radius: 4%;
      border: orange 4px dashed;
    }
  `
  const StyledAppDiv = styled.div`
  background-image: url(https://wallpapershome.com/images/pages/pic_v/6592.jpg)
  `

  const NasaImage = (props)=>{
    const {photo} = props
    return (
    <StyledDiv>
      <img src={photo} alt='alt' width='70%'></img>
    </StyledDiv>
  )}

  return (
    <StyledAppDiv className="App">
        <Header title={data.title}/>
        <NasaImage photo={data.hdurl}/>
        <Footer explanation={data.explanation} date={data.date} copyrightName={data.copyright || ' ¯\_(ツ)_/¯'}/>
    </StyledAppDiv>
  );
}

export default App;
