//import Axios from "axios";
//import { Link } from "react-router-dom";

function StudentViewRow(props)
{
    const {school,phoneNo,link,subName,teacherEmail} = props.obj; //Object destruction

    
    return(
        <tr>
            <td>{school}</td>
            <td>{phoneNo}</td>
            <td>{link}</td>
            <td>{subName}</td>
            <td>{teacherEmail}</td>
            
        </tr>
    )
}
export default StudentViewRow;