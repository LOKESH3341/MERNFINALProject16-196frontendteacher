import Axios from "axios";
import { Link } from "react-router-dom";

function WorkListRow(props)
{
    const {_id,school,phoneNo,link,subName,teacherEmail} = props.obj; //Object destruction

    const handleClick = () => {
        Axios.delete("https://mernfinalproject16-t-196backenddeployment.onrender.com/teacherRoute/delete-work/" + _id)
        .then((res)=>{
            if(res.status === 200){
                alert("Work deleted successfully");
                window.location.reload();
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err))
    }
    return(
        <tr>
            <td>{school}</td>
            <td>{phoneNo}</td>
            <td>{link}</td>
            <td>{subName}</td>
            <td>{teacherEmail}</td>
            {/* d-flex */}
            <td class="">
                <center><button class="btn btn-sm btn-success">
                    <Link class="text-decoration-none text-light" to={"/edit-work/" + _id}>Edit</Link>
                </button>
                <button onClick={handleClick} class="btn btn-sm btn-danger mx-3">Delete</button></center>
            </td>
        </tr>
    )
}
export default WorkListRow;
