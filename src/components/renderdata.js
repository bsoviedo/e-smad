import React from 'react';
import data from '../data/data.json';
import { GeoJSON } from 'react-leaflet';
import "leaflet/dist/leaflet.css";


class Displaypopup extends React.Component {
    render() {
        return (
            <div className='popup' >
                <div className='popup_inner'>
                    <h1> Nombre: {this.props.text}</h1>
                    <p className='card'> <strong> Fecha: </strong> {this.props.date} </p>
                    <p className='card'> <strong> Fuente primaria: </strong> En verificación...</p>
                    <p className='card'> <strong> Fuente secundaria: </strong>  <a href='https://twitter.com/vidasilenciadas?lang=en' target='blank' alt='twitter vidas silenciadas'>Vidas silenciadas </a></p>


                    <button className='cerrar' onClick={this.props.closePopup}>Cerrar</button>
                </div>
            </div>
        );
    }
}




export default class Renderdata extends React.Component {
    state = {
        data: data,
        showPopup: false,
        name: '',
        date: ''

    }

    closepopup = () => {
        this.setState({
            showPopup: !this.state.showPopup
        })
    }

    tooglepopup = (e) => {
        this.setState({
            showPopup: !this.state.showPopup,
            name: e.target.feature.properties.PopupInfo,
            date: e.target.feature.properties.Name
        });
    }

    onEachFeature = (feature, layer) => {
        /*  const Name = feature.properties.PopupInfo;
         const date = feature.properties.Name  */


        layer.on({
            click: this.tooglepopup
        })
        /* layer.bindPopup(
    
            "<p> <strong> Nombre: </strong>" + Name + "</p>" +
            "<p> <strong> Fecha: </strong>" + date + "</p>" +
            "<p> <strong> Fuente primaria: </strong> En verificación </p>" +
            "<p> <strong> Fuente secundaria: </strong>" +
            " <a href='https://twitter.com/vidasilenciadas?lang=en' target= blank> Vidas silenciadas </a>", "</p>"
        ); */
    }



    render() {
        return (

            <div>
                {
                    this.state.showPopup ?
                        <Displaypopup
                            text={this.state.name}
                            date={this.state.date}
                            closePopup={this.closepopup.bind(this)}

                        />
                        : null
                }
                <GeoJSON attribution="Vidas silenciadas.org"
                    data={data.features}
                    onEachFeature={this.onEachFeature}
                >

                </GeoJSON>

            </div>




        )

    }
}
//console.log(this.state.data.features[0].properties.PopupInfo)

//<Marker position={[0, 0]} icon={this.icon} />
/*                 {features.map(feature => (
                    <Popup ><pre key={feature.id}>{feature.properties.PopupInfo}</pre></Popup>

                ))} */

/*  */