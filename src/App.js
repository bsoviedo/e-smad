import './App.css';
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import Renderdata from './components/renderdata';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import swal from 'sweetalert2'





let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});


L.Marker.prototype.options.icon = DefaultIcon;


//Import components



export class Map extends React.Component {


  position = [4, -74]

  render() {
    swal.fire({
      icon: 'info',
      title: 'Bienvenido/a',
      text: 'Si estas usando un dispositivo movil, usa dos dedos para desplazarte por el mapa :)'
    })
    return (
      <div>
        <div className='leftdiv'>
          <h1>Víctimas relacionadas con el ESMAD en Colombia </h1>

          <p className='text'> Bienvenido/a!
          En este proyecto, se despliegan los 45 casos documentados por Vidas Silenciadas de personas asesinadas en las que el Escuadrón
          Movil Antidisturbios (ESMAD) ha tenido participación (presunta o confirmada). Todos los datos
          presentados en este geovisor se extraen de la base de datos de Vidas Silenciadas.org, todos los datos
          fueron levantados por ese equipo de trabajo y en este proyecto solo se visibilizan.
        <br />
            <br />
        Desafortunadamente, estos datos se descargaron en 2019, cuando aún se tenia acceso a la base de datos
        mencionada, razón por la cual los hechos de los años 2020 y 2021, faltando incluso casos como el de <a href='https://es.wikipedia.org/wiki/Dilan_Cruz'
              target='blank' alt='wikipedia'>Dilan Cruz </a>, no obstante, todos los datos se encuentran en actualización con el fin de añadir las fuentes relacionadas
        a cada registro.
        <br />
            <br />
        Para conocer el detalle de cada caso, selecciona cada marcador en el mapa.
        Si estas usando un dispositivo movil, usa dos dedos para mover el mapa
        <br />
            <br />

        Si deseas conocer más del proyecto de vidas silenciadas, puedes revisar su cuenta de <a href='https://twitter.com/vidasilenciadas?lang=en' target='blank'
              alt='twitter vidas silenciadas'> twitter.</a>

          </p>


        </div>
        {/* Con las opciones de Dragging y de tap se intenta que no se pueda mover la página de leaflet en movil.
       Otra opción sería desplegar un botón o algo >.<
       */}

        <MapContainer center={this.position} zoom={6} dragging={!L.Browser.mobile} tap={!L.Browser.mobile}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
          />
          <Renderdata />

        </MapContainer>

      </div>


    )
  }
}


