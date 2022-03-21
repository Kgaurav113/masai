import {useState,useEffect} from 'react'
import axios from 'axios'

export const Forms =()=>{
    const [formData, setFormData] = useState({
        name :"",
        age:"",
        address:"",
        department:"",
        salary:"",
        status:"",
    });

    const [data,setData] = useState([])

    useEffect(()=>{
        getData();
    },[])

    const getData =()=>{
        axios.get(`http://localhost:3100/employee`).then(res=>{
            setData(res.data);
        })
    }

    const handleChange =(e)=>{
        // console.log(e.target)
        // console.log(e.target.id,e.target.value)
        // console.log(e.target.type,e.target.placeholder)
        const {id,value} =e.target;
        setFormData({
            ...formData,
            [id]:value,
        })
    }

    const handleCheckbox = (e)=>{
        const {id,value} =e.target;
        const checked = e.target.checked;
        if(checked){
            setFormData({
                ...formData,
                [id]:value,
            })
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData)
        axios.post("http://localhost:3100/employee",formData).then(()=>{
            alert("Employee Successfully registered");
            setFormData({
                name :"",
                age:"",
                address:"",
                department:"",
                salary:"",
                status:"",
            });
        }).then(res=>{
            getData();
        });
    };
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Signup</h3>
                <input  
                    id="name" 
                    type="text" 
                    value={formData.name}
                    onChange={handleChange} 
                    placeholder="Enter Name">
                </input>
                <input 
                    id="age"
                    type="number" 
                    value={formData.age}
                    onChange={handleChange} 
                    placeholder="Enter Age">
                </input>
                <input 
                    id="address"
                    type="text" 
                    value={formData.address}
                    onChange={handleChange} 
                    placeholder="Enter Address">
                </input>
                <select 
                    id="department"
                    type="text"
                    onChange={(e)=>{
                        handleChange(e)
                    }}> 
                    <option>-----</option>
                    <option value="Finance">Finance</option>
                    <option value="Management">Management</option>
                    <option value="Technical">Technical</option>
                    <option value="HR">HR</option>
                </select>
                <input 
                    id="salary"
                    type="number" 
                    value={formData.salary}
                    onChange={handleChange} 
                    placeholder="Enter Salary">
                </input>

                <input 
                    id="status"
                    type="checkbox" 
                    value="married"
                    onChange={(e)=>{
                        handleCheckbox(e)
                    }}>
                </input>
                <label>Married</label>

                <input 
                    id="status"
                    type="checkbox"
                    value="single"
                    onChange={(e)=>{
                        handleCheckbox(e)
                    }}>
                </input>
                <label>Single</label>

                <input type="submit" value="Submit data"></input>
            </form>
            <div>
                {data.map(employee =>
                    <div key={employee.id}>
                        <tr id="employee_list">
                            <th>{employee.name}</th>
                            <th>{employee.age}</th>
                            <th>{employee.salary}</th>
                            <th>{employee.department}</th>
                            <th>{employee.status}</th>
                        </tr>
                    </div>)}
            </div>
                
        </div>
    )
}