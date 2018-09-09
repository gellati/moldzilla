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

    return (
        <div>
          <ResultArea {...props}/>
          <Material name="Betoni" {...props} />
          <Material name="CLT" {...props} />
          <Material name="Selluvilla" {...props} />
          <Material name="Mineraalivilla" {...props} />
        </div>
      );
  }
}


export default Dashboard;
