import React from 'react';
import Slider from 'rc-slider';
import styled from 'styled-components'
import Checkbox from 'rc-checkbox'
// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const SliderWithTooltip = createSliderWithTooltip(Slider);

const MaterialWrapper = styled.div`
  margin: 0 auto;
  padding-left: 10%;
  padding-right: 10%;
  display: grid;
  grid-template-columns: 20% 10% 70%;
  grid-template-rows: 50px;
`
const NameWrapper = styled.div`
  display: block;
`

const SliderWrapper = styled.div`
  display: block;
`

const CheckboxWrapper = styled.div`
  display: block;
`

class Material extends React.Component{
  constructor(props){
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e){
//    console.log(this.props.name + " " + e)
  //  this.props.values[this.props.name] = e
    let kv = {}
    kv[this.props.name] = e
  //  this.props.sliderValues(kv)
    this.props.materialData(kv)
  }

  render(){
    return (
      <MaterialWrapper>
          <NameWrapper>
          <div>{this.props.name}</div>
          </NameWrapper>
          <CheckboxWrapper>
            <Checkbox />
          </CheckboxWrapper>
          <SliderWrapper>
            <SliderWithTooltip
                     min={20}
                     max={500}
                     onChange={this.onChange} />
          </SliderWrapper>
      </MaterialWrapper>
      );
  }
}

export default Material
