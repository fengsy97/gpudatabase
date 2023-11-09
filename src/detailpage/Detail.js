import React, {Component}  from 'react';
import { Gpus } from "../database/Datatable";
import "../style/bootstrap.min.css"

// const $ = require('jquery');
const queryString = window.location.search;
console.log(Gpus.gpudata[0]);
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('gpuId')
var gpuid = Number(product);
// console.log(Number(product));
export default class Detail  extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.match.params.name);
    this.state = {
      "name":  Gpus.gpudata[gpuid]['gpuname']
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        {/* <img src={Gpus.gpudata[gpuid]['mainimage']} alt="img" /> */}
        <div class="card" style ={{width: "50%"}}>
          <img src={Gpus.gpudata[gpuid]['mainimage']} class="card-img-top" alt="..."/>
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        {/* <table id="example" className="display" width="100%"></table> */}
      </div>
    )
  }
}