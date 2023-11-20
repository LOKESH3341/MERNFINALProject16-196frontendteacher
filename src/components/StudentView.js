import Axios from "axios";
import { useEffect, useState } from "react";
import StudentViewRow from "./StudentViewRow";
import Logout from './Logout';


const h1styling = {
    color: 'darkred'
}

const h2styling = {
    color: 'darkblue'
}



function StudentView() {
    const [arr, setArr] = useState([]);

    useEffect(() => {
        Axios.get("https://mernfinalproject16-t-196backenddeployment.onrender.com/teacherRoute")
            .then((res) => {
                if (res.status === 200)
                    setArr(res.data)
                else
                    Promise.reject();
            })
            .catch((err) => alert(err))
    }, [])

    const ListItems = () => {
        return arr.map((val, ind) => {  //arr=[{_id,name,email,rollNo},{},{},{},...]
            return <StudentViewRow key={ind} obj={val} /> //key={ind} use this to resolve warning
        })
    }
    return (
        <div class="bg-secondary"><br></br>
            <h1 class="text-center my-2" style={h1styling}>All Work Details</h1><br></br>
            <table style={{ margin: "0px auto", maxWidth: "95%" }} class="table table-hover table-bordered border-dark table-info">
                <thead>
                    <tr>
                        <th class="text-center" style={h1styling}>School</th>
                        <th class="text-center" style={h1styling}>Phone No</th>
                        <th class="text-center" style={h1styling}>Link</th>
                        <th class="text-center" style={h1styling}>Subject Name</th>
                        <th class="text-center" style={h1styling}>Teacher Email</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {ListItems()}
                </tbody>
            </table>


            <center><br></br>
                <Logout />
            </center>



            <footer class="bg-warning mt-5"><br></br>
        <div style={h2styling} class="row">
            <div class="col-12 col-lg-3">
                <h3>&ensp;Quick Links</h3><strong><br></br>
                <p>&ensp;&ensp;About us</p>
                <p>&ensp;&ensp;Courses</p>
                <p>&ensp;&ensp;Resources</p>
                <p>&ensp;&ensp;Blog</p>
                <p>&ensp;&ensp;Support</p></strong>
            </div>

            <div style={h2styling} class="col-12 col-lg-3">
                <h3>Popular Courses</h3><strong><br></br>
                <p>Appian Developer</p>
                <p>AWS Solutions Architect Associate</p>
                <p>Full Stack MERN</p>
                <p>AWS Cloud Practitioner</p></strong>
            </div>

            <div style={h2styling} class="col-12 col-lg-3">
                <h3>Popular Blogs</h3><strong><br></br>
                <p>Appian Developer Certification Course in Bangalore: A Comprehensive Guide</p>
                <p>Exploring Different Types of AWS Jobs for Freshers</p>
                <p>Full Stack Developer Course in Bangalore</p>
                <p>Appian Certifications for Freshers: Which Level is Best? - List Included</p>
                <p>MEAN vs MERN: Choosing the Best JavaScript Stack for Web Development</p></strong>
            </div>

            <div style={h2styling} class="col-12 col-lg-3">
                <h3>&ensp;&ensp;&ensp;&ensp;&ensp;Powered by</h3><br></br>
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<img src={require('./ethnuslogo.png')} alt="logo" />
            </div>
        </div><br></br><br></br>

        <p><span class="text-light">&ensp;&copy; Learnmithra. All Rights Reserved</span>
        <span class="h4 text-light float-end">Privacy Policy Terms & Conditions&ensp;</span></p><br></br>
    </footer>



        </div>

    )
}
export default StudentView;

