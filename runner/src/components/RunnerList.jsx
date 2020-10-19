import React, { Component } from 'react'
// eslint-disable-next-line
import runnersService from '../services/runnersService';
import {Table} from 'react-bootstrap';
import axios from 'axios';
class RunnerList extends Component {
    constructor(){
      super();
        this.state = {
            Runners: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8080/runners').then((res) => {
            this.setState({ Runners: res.data})
        });
    }
  
    render() {
        return (
            <div>
                  <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Username</th>
                      <th>Age</th>
                      <th>Sex</th>
                      <th>Distance <i className="fa fa-sort"></i></th>
                      <th>Avg Pace <i className="fa fa-sort"></i></th>
                      <th>Total Time <i className="fa fa-sort"></i></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                    this.state.Runners.map(
                      runner =>

                      <tr key={runner.id}>
                      <td>{runner.id}</td>
                      <td>{runner.runnerName}</td>
                      <td>{runner.runnerAge}</td>
                      <td>{runner.runnerSex}</td>
                      <td>{runner.runnerDistance}</td>
                      <td>{runner.runnerAvgPace}</td>
                      <td><td>{runner.runnerTotalTime}</td></td>
                    </tr>
                    )
                  }
                  </tbody>
                </Table>
            </div>
        )
    }
}
export default RunnerList;