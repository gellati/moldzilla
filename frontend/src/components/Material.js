import React from 'react';
import Slider from 'rc-slider';
import styled from 'styled-components'
import Checkbox from 'rc-checkbox'

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
    this.checkClick = this.checkClick.bind(this)
    this.state = {
      clicked: false
    }
  }

  checkClick(e, checked){
    console.log("e", e)
    console.log("checked", e.target.checked)
    this.setState({
      clicked: e.target.checked,
      startValue: 20
    })
  }

  onChange(e){
    let kv = {}
    if(this.state.clicked){
      kv[this.props.name] =  e
      this.setState({
        startValue: e
      })
    }else{
      kv[this.props.name] =  this.state.startValue;
    }
    this.props.materialData(kv)
  }

  render(){
    return (
      <MaterialWrapper>
          <NameWrapper>
          <div>{this.props.name}</div>
          </NameWrapper>
          <CheckboxWrapper
             onChange={this.checkClick}>
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
