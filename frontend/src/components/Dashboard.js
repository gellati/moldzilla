import React from 'react';
import Material from './Material'
import ResultArea from './ResultArea'

// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';

const materials = ["Betoni",
                   "CLT",
                   "Selluvilla",
                   "Mineraalivilla"
                 ]
var results = {}

class Dashboard extends React.Component{
  constructor(props){
    super()
    this.materialData = this.materialData.bind(this)
    this.state = {
      data: {}
    }
  }
  // send to material.js
  materialData(params){
    this.setState({
      data: params
    })
  }

  render(){
    var props = {}
    props.materialData =  this.materialData
    props.data = this.state.data

    var headerStyle = {
      width: '80%', margin: '0 auto',
      paddingLeft: '10%', paddingRight: '10%'
    }


    return (
      <div>
      <div style={headerStyle}>
      <h1>
       MoldZilla
      </h1>
      <p>
      Please enter the width of the material layer in your wall.
      The color will indicate the mold risk.
      </p>
      </div>
      <div>
        <div>
          <ResultArea {...props}/>
          <Material name="Betoni" {...props} />
          <Material name="CLT" {...props} />
          <Material name="Selluvilla" {...props} />
          <Material name="Mineraalivilla" {...props} />
        </div>
        </div>
        </div>
      );
  }
}


export default Dashboard;
