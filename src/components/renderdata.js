import React from 'react';
import data from '../data/data.json';
import { GeoJSON } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import swal from 'sweetalert2'




export default class Renderdata extends React.Component {
    state = {
        data: data,
        showPopup: false,
        name: '',
        date: '',
        fuente: '',
        edad: null


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


        layer.on({
            click: this.tooglepopup
        })
    }

    Showalert = () => {
        const { name } = this.state
        const { date } = this.state
        swal.fire(
            {
                title: name,
                html: ("<strong> Fecha: </strong>" + date + "<br> <br>" +
                    "<strong> Fuente primaria: </strong> En verificación... <br> <br>" +
                    "<strong> Fuente secundaria: </strong>  <a href='https://twitter.com/vidasilenciadas?lang=en' target='blank' alt='twitter vidas silenciadas'>Vidas silenciadas </a>"

                ),

                confirmButtonText: 'Cerrar'



            }
        )
    }



    render() {
        return (

            <div>
                {
                    this.state.showPopup ? this.Showalert()
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
