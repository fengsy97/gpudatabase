import React, {Component}  from 'react';
import { Gpus } from "../database/Datatable";
import "../style/bootstrap.min.css";
const queryString = window.location.search;
// console.log(Gpus.gpudata[0]);
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('gpuId')
var gpuid = Number(product);
// console.log(Number(product));
var data = JSON.parse(JSON.stringify(Gpus.gpudata[gpuid]));
console.log(data);
var mainimage = data['mainimage'];
// remove mainimage from data
delete data['mainimage'];
var images = [mainimage];
var gpuname = data['gpuname'];
for (var image in data['images']) {
  images.push(data['images'][image]);
}
data['Performance'] = data['performance']+ "% of RTX 4090";
delete data['performance'];
delete data['images'];
delete data['gpuname'];
delete data['id'];
delete data['GPU Name'];
for (var key in data) {
  if (data[key] === null || data[key] === "") {
    data[key] = "N/A";
  }
}
export default class Detail  extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.match.params.name);
    this.state = {
      "name":  gpuname
    }
  }
  render() {
    var specs = Object.entries(data).map( ([key, value]) =><td>{key}: {value} </td> );
    var cols_ = 3;
    var arr = [];
    for (var i = 0; i < specs.length; i += cols_) {
      arr.push(specs.slice(i, i + cols_));
    }
    var renderedSpecs = arr.map(item => <tr> {item} </tr>)
    console.log(typeof(specs));
    return (
      <div>
        <h1>{this.state.name}</h1>
        <img src={mainimage} alt="img" height={250} />
        <hr className="mt-5 mb-4" /> 
        <div class="container text-center">
          <table class="table">
          <tbody>
          {renderedSpecs}
          </tbody>
          </table>
        </div>
      </div>
    )
  }
}