import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [dataSet, setDataSet] = useState(null)
  const [photo, setPhoto] = useState(null)
  const [title, setTitle] = useState(null)
  const [explanation, setExplanation] = useState(null)
  const [date, setDate] = useState(null)
  const [copyrightName, setCopyrightName] = useState(null)

  useEffect(function(){
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=FdWNjvl9EW5kHSgFbuvQnaTdX4XIZxspGdxl5MLd')
    .then(function(res){
      console.log(res.data)
      setDataSet(res.data)
      setPhoto(res.data.hdurl)
      setTitle(res.data.title)
      setExplanation(res.data.explanation)
      setDate(res.data.date)
      setCopyrightName(res.data.copyright)
    })
    .catch(function(err){
      console.log(err)
    })
  }, [])

  const NasaImage = (props)=>{
    const {photo} = props
    return (
    <div>
      <img src={photo} alt='alt' width='70%'></img>
    </div>
  )}

  return (
    <div className="App">
        <Header title={title}/>
        <NasaImage photo={photo}/>
        <Footer explanation={explanation} date={date} copyrightName={copyrightName}/>
    </div>
  );
}

export default App;
