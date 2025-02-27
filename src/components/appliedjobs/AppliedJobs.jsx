
import { Table } from 'react-bootstrap'
import './AppliedJobs.css'

const AppliedJobs = ({ userID }) => {

    return (
        <div className='job-table'>
        <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        </tbody>
        </Table>
       </div>

    )
}

export default AppliedJobs
