import "./Rentals.css";
import  { useEffect, useState} from "react";
import axios from "axios";

export const Rentals = () => {
  const [data, setData] = useState([])
  useEffect(() =>{
    getData()
  },[]);

  const getData = () => {
    axios.get("https://localhost:8080/houses").then((res) =>{
      setData(res.data);
    })
  }
  const handleSort = (key, value = 1) =>{
    if (value == 1) {
      data.sort((a,b) => a[key] - b[key])
      setData([...data])
    }
    else{
      data.sort((a,b) => b[key] - a[key])
      setData([...data])
    } 
      
  }
  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById">Sort by ID</button>
        <button className="sortByRentAsc" onClick={() =>{
          handleSort("rent")
        }}>Rent Low to high</button>
        <button className="sortByRentDesc" onClick={() =>{
          handleSort("rent", -1)
        }}>Rent High to low</button>
        <button className="sortByAreaAsc" onClick={() =>{
          handleSort("areaCode")
        }}>Area Low to high</button>
        <button className="sortByAreaDesc" onClick={() =>{
          handleSort("areaCode", -1)
        }}>Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {[].map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  {/* Show text Both or Bachelors or Married based on values */}
                </td>
                <td className="houseImage">
                  <img src={house.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
