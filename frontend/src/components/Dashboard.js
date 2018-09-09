import React from 'react';
import Material from './Material'
import ResultArea from './ResultArea'

// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';

const materials = ["Concrete",
                   "CLT",
                   "Wood fiber",
                   "Mineral wool"
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
      The color will indicate the mold risk. <a href="https://github.com/gellati/moldzilla">Source</a>
      </p>
      </div>
      <div>
        <div>
          <ResultArea {...props}/>
          <Material name="Concrete" {...props} />
          <Material name="CLT" {...props} />
          <Material name="Wood fiber" {...props} />
          <Material name="Mineral wool" {...props} />
        </div>
        </div>
        </div>
      );
  }
}


export default Dashboard;
