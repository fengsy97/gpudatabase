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
import { getGpus } from "../database/Database";


const $ = require('jquery');

const gpudata = await getGpus();

export default class Datatable  extends Component {
  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
    this.state = {
      "data": gpudata
    };
  }
  filter() {
    var fdata = [];
    var MaxTDP = Infinity;
    var MaxLength = Infinity;
    var MaxWidth = Infinity;
    var MaxHeight = Infinity;
    if(document.getElementById("MaxTDP").value !== ""){
      MaxTDP = Number(document.getElementById("MaxTDP").value);
    }
    if(document.getElementById("MaxLength").value !== ""){
      MaxLength = Number(document.getElementById("MaxLength").value);
    } 
    if(document.getElementById("MaxWidth").value !== ""){
      MaxWidth = Number(document.getElementById("MaxWidth").value);
    }
    if(document.getElementById("MaxHeight").value !== ""){
      MaxHeight = Number(document.getElementById("MaxHeight").value);
    }
    console.log(MaxTDP);
    console.log(MaxLength);
    console.log(MaxWidth);
    console.log(MaxHeight);
    for(var i = 0; i < gpudata.length; i++){
      var data = gpudata[i];
      if(data["TDP"] <= MaxTDP && data["Length"] <= MaxLength && data["Width"] <= MaxWidth && data["Height"] <= MaxHeight){
        fdata.push(data);
      }
    }
    this.table.clear();
    this.table.rows.add(fdata);
    this.table.draw();
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
                return '<a href="/detail?gpuId='+data+'">' + gpudata[data]['gpuname'] + '</a>';
                // return '<Link to={detail}>' + Gpus.gpudata[data]['gpuname'] + '</Link>';
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
        "bDestroy": true
    });
  }
  render() {
    return (
      <>  
        <Row>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter Max TDP" id="MaxTDP"/>
          </Form.Group>
          </Col>
          <Col>
            <Form.Control type="email" placeholder="Enter Max Length" id="MaxLength"/>
          </Col>
          <Col>
            <Form.Control type="email" placeholder="Enter Max Width" id="MaxWidth"/>
          </Col>
          <Col>
            <Form.Control type="email" placeholder="Enter Max Height" id="MaxHeight"/>
          </Col>
          <Col>
            <Button onClick={this.filter} variant="primary" type="submit">Apply Filter</Button>
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