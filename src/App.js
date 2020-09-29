import React, { Fragment, useState, useEffect } from 'react';

import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoNoticias from "./components/ListadoNoticias"


function App() {

  //Definir la categoría

  const [ categoria, guardarCategoria ] = useState('')
  const [ noticias, guardarNoticias ] = useState([]) 

  useEffect(() => {

    const consultarApi = async() => {

      const url = `http://newsapi.org/v2/top-headlines?country=gb&category=${categoria}&apiKey=c36b6ae056b54b3a805904e589d114bf`

      const respuesta = await fetch(url)
      const noticias = await respuesta.json()

      guardarNoticias(noticias.articles)

    }
    consultarApi()
  }, [categoria])

  return (
    <Fragment>
      <Header 
        titulo = "Buscardor de Noticias"
      />
      <div className = "container white">
        <Formulario 
          guardarCategoria = {guardarCategoria}
        />
        <ListadoNoticias
          noticias = {noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
