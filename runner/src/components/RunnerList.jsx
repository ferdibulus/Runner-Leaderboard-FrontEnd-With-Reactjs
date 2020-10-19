import React, { Component } from 'react'
import runnersService from '../services/runnersService';
import {Table} from 'react-bootstrap';
class RunnerList extends Component {
    constructor(props){
      super(props);
        this.state = {
            Runners: []
        }
    }

    componentDidMount(){
        runnersService.getRunners().then((res) => {
            this.setState({ Runners: res.json})
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
export default RunnerList;