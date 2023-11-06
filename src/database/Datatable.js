import React, {Component}  from 'react';
import DataTable from 'datatables.net-dt';
import "../style/jquery.dataTables.min.css"
import "../style/datatables.min.css"
import "../style/flags32.css"
// import "../style/select.dataTables.min.css"
const $ = require('jquery');
export default class Datatable  extends Component {
  constructor(props) {
    super(props);
    var AMDjson = require('./GPUs.json');
    var gpudata = [];
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

      gpudata.push(data);
    }
    // console.log(gpudata);
    this.state = {
      "data": gpudata
    }
  }
  componentDidMount() {
    this.table = $('#example').DataTable({
        columns: [
            {
              title: 'Name',
              data: 'gpuname',
              render: function (data) {
                return '<a href="http://cloudtables.com">' + data + '</a>';
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
        // "bDestroy": true
    });
  }
  render() {
    return (
      <>
          <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <div className="form-floating">
                            <textarea  className="form-control" placeholder="Leave a comment here" id="MinTDP"></textarea>
                            <label >Min TDP</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="MaxTDP"></textarea>
                            <label >Max TDP</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="MinLength"></textarea>
                            <label >Min Length</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="MaxLength"></textarea>
                            <label >Max Length</label>
                        </div>
                    </div>
                    <div className="col">
                        <button onClick={this.filter} type="button" className="btn btn-primary">Apply Filter</button>
                    </div>
                </div>
            </div>
            <hr className="mt-5 mb-4" />
            <div>
                {/* <table className="display" width="100%" ref={el => this.el = el}></table> */}
                <table id="example"  className="display" width="100%" ></table>
            </div>
      </>
    )
  }
}
