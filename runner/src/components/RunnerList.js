import React, { Component } from 'react'
import runnersService from './services/runnersService';
import {Table} from 'react-bootstrap';
export default class RunnerList extends Component {
    constructor(){
        this.state = {
            runners:[]
        }
    }

    componentDidMount(){
        runnersService.getRunners().then((response) => {
            this.setState({ runners: response.data})
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
                    this.state.runners.map(
                      runner =>

                      <tr key={runner.id}>
                      <td>{runner.runnerName}</td>
                      <td>{runner.runnerSex}</td>
                      <td>{runner.runnerAge}</td>
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
