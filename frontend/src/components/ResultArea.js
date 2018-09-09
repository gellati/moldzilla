import React from 'react';
import styled from 'styled-components'

const ResultWrapper = styled.div`
padding-left: 10%;
padding-right: 10%;
border: 1px solid black;
margin: 0 auto;
height: 50px;
margin-bottom: 5%;
display: block;
`

const materials = ["Betoni",
"CLT",
"Selluvilla",
"Mineraalivilla"
]
var results = {}

function rect(props) {
  const {ctx, x, y, width, height} = props;
  ctx.fillRect(x, y, width, height);
}


class ResultArea extends React.Component{
  constructor(props){
    super(props)
    this.updateCanvas = this.updateCanvas.bind(this)
    this.initializeResults()
  }

  componentDidMount(){
    this.updateCanvas();
  }

  componentDidUpdate(){
    let e = this.props.data
    results[Object.entries(e)[0][0]] = Object.entries(e)[0][1]
    this.updateCanvas(results);
  }

  initializeResults(){
    for(let i = 0; i < materials.length; i++){
      results[materials[i]] = 20
    }
  }

  dataToHex(data){
    let a = Object.entries(data)[0][1]
    let b = Object.entries(data)[1][1]
    let c = Object.entries(data)[2][1]
    let d = Object.entries(data)[3][1]
    console.log(a + ":" + b + ":" + c + ":" + d)

    let a_ = (0.8 * a + 0.2 * b ) / (1000);
    let b_ = (0.6 * a + 0.4 * b ) / (1000);
    let c_ = (0.8 * c + 0.2 * d) / (1000);
    let d_ = (0.6 * c + 0.4 * d) / (1000);
    console.log(a_ + ":" + b_ + ":" + c_ + ":" + d_)

    let r = ((a_ + b_)+Math.pow(16, 2)).toString(16).slice(-2);
    let g = ((c_ + d_)+Math.pow(16, 0)).toString(16).slice(-2);
    console.log("r: ", r)
    console.log("g: ", g)
    let hexString = "#" + r.toString() + g.toString() + "00"
    console.log(hexString)
    return hexString
  }

  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.clearRect(0,0,10,50)
    console.log("updateCanvas",
    this.props.data)
    this.dataToHex(results)

    let gradientstyle = ctx.createLinearGradient(
      results['Betoni'],
      results['CLT'],
      results['Mineraalivilla'],
      results['Selluvilla']
    )

    gradientstyle.addColorStop(0,"black")
    gradientstyle.addColorStop(0.5,"red")
    gradientstyle.addColorStop(1,"white")

    ctx.fillStyle = this.dataToHex(results) //gradientstyle
    rect({ctx, x: 10, y: 10, width: 50, height: 50});
  }

  render(){
    return (
      <ResultWrapper>
      <canvas ref="canvas" />
      </ResultWrapper>
    );
  }
}

export default ResultArea;
