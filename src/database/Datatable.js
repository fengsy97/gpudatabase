import React, {Component}  from 'react';
import DataTable from 'datatables.net-dt';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
// import {useNavigate} from 'react-router-dom';
import "../style/jquery.dataTables.min.css"
import "../style/datatables.min.css"
import "../style/flags32.css"
import {Link} from 'react-router-dom';

// import "../style/select.dataTables.min.css"
const $ = require('jquery');
const Gpus = {
  gpudata : []
};

var AMDjson = require('./GPUs.json');
// var gpudata = [];
var id = 0;
for(var key in AMDjson){
  var data = AMDjson[key];
  if(data["Memory Size"] === -1){
    data["Memory Size"] = "N/A";
  }
  if(data["Length"] === -1){
    data["Length"] = "N/A";
  }
  if(data["TDP"] === -1){
    data["TDP"] = "N/A";
  }
  if(data["Width"] === -1){
    data["Width"] = "N/A";
  }
  if(data["Height"] === -1){
    data["Height"] = "N/A";
  }
  data["id"] = id;
  id++;
  Gpus.gpudata.push(data);
  // gpudata.push(data);
}

export default class Datatable  extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "data": Gpus.gpudata
    }
  }
  
  // <Link to="/signup"></Link>
  componentDidMount() {
    this.table = $('#example').DataTable({
        displayLength: 25,
        columns: [
            {
              title: 'Name',
              data: 'id',
              render: function (data) {
                return '<a href="/detail?gpuId='+data+'">' + Gpus.gpudata[data]['gpuname'] + '</a>';
              }
            },
            {
              title: 'TDP(W)',
              data: 'TDP',
              render: function (data) {
                // return '<a href="http://cloudtables.com">' + data + '</a>';
                let color = 'green';
                if(data > 150 && data <= 300){
                  color = 'orange';
                }
                else if(data > 300){
                  color = 'red';
                }
                return '<span style="color: '+color+';">'+data+'</span>';
              }
            },
            {
              title: 'Memory Size(GB)',
              data: 'Memory Size'
            },
            { 
              title: 'Length(mm)' ,
              data: 'Length'
            },
            { 
              title: 'Width(mm)' ,
              data: 'Width'
            },
            { 
              title: 'Height(mm)' ,
              data: 'Height'
            },
            {
              title: 'Performance',
              data: 'performance',
              render: function (data, type, row, meta)  {
                return '<progress value="' + data + '" max="100">'+data+'</progress>';
              }
            },
        ],
        data: this.state["data"],
    });
  }
  render() {
    return (
      <>  
        <Row>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter Max TDP" />
          </Form.Group>
          </Col>
          <Col>
            <Form.Control type="email" placeholder="Enter Max Length" />
          </Col>
          <Col>
            <Form.Control type="email" placeholder="Enter Max Width" />
          </Col>
          <Col>
            <Form.Control type="email" placeholder="Enter Max Height" />
          </Col>
          <Col>
            <Button variant="primary" type="submit">Apply Filter</Button>
          </Col>
        </Row>
        <hr className="mt-5 mb-4" />
        <div>
            {/* <table className="display" width="100%" ref={el => this.el = el}></table> */}
            <table id="example"  className="display" width="100%" ></table>
        </div>
        <hr className="mt-5 mb-4" />
        <p className="text-muted">Created by Sion.</p>
      </>
    )
  }
}
export { Gpus };