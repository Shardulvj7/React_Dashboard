// import { useEffect, useState } from "react";
// import "./App.css";
// import useWebSocket from "react-use-websocket";

// type SensorData = {
//   id: number;       
//   value: number;           
//   humidity: number;  
//   temperature: number;  
//   location: { lat: number; lon: number };
// };

// function App() {
//   const { lastMessage } = useWebSocket(
//     "wss://se9eygg4bh.execute-api.eu-west-2.amazonaws.com/dev"
//   );  
//   const [sensors, setSensors] = useState<SensorData[]>([]);
//   const [filterValue, setFilterValue] = useState<number | null>(null);
//   const [filterHumidity, setFilterHumidity] = useState<number | null>(null); // New state for humidity filter
  
//   useEffect(() => {
//     if (lastMessage !== null) {
//       const parsedMessage = JSON.parse(lastMessage.data);
//       if (
//         parsedMessage.action === "msg" &&
//         parsedMessage.type === "sensorData"
//       ) {
//         const newSensorData: SensorData = {
//           id: parsedMessage.body.id,
//           value: parsedMessage.body.value,
//           humidity: parsedMessage.body.humidity,
//           temperature: parsedMessage.body.temperature,
//           location: parsedMessage.body.location,
//         };
      
//         setSensors((prevSensors) => {
//           const existingSensorIndex = prevSensors.findIndex(
//             (sensor) => sensor.id === newSensorData.id
//           );
//           if (existingSensorIndex !== -1) {
//             const updatedSensors = [...prevSensors];
//             updatedSensors[existingSensorIndex] = newSensorData;
//             return updatedSensors;
//           } else {
//             return [...prevSensors, newSensorData];
//           } 
//         });
//       }
//     }
//   }, [lastMessage]);

//   const handleClick = () => {
//     const sensorData = JSON.stringify(sensors);
//     window.location.href = `map.html?sensorData=${encodeURIComponent(
//       sensorData
//     )}`;
//   };

//   const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const value = parseInt(e.target.value);
//     setFilterValue(value);
//   };

//   const handleHumidityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const humidity = parseInt(e.target.value);
//     setFilterHumidity(humidity);
//   };

//   const filteredSensors = sensors.filter((sensor) => {
//     if (filterValue && filterHumidity) {
//       return sensor.value >= filterValue && sensor.humidity >= filterHumidity;
//     } else if (filterValue) {
//       return sensor.value >= filterValue;
//     } else if (filterHumidity) {
//       return sensor.humidity >= filterHumidity;
//     }
//     return true;
//   });                                                                                                
  
//   return (
//     <div className="App">
//       <div className="nav">
//         <nav className="navbar js-navbar">
//           <ul className="menu">
//             <li>
//               <h1>SmartBin.</h1>
//             </li>
//             <li>
//               <select
//                 className="hasDropdown"
//                 onChange={handleFilterChange}
//                 value={filterValue || ""}
//               >
//                 <option value="">Filter by Value</option>
//                 <option value="100">100%</option>
//                 <option value="90">90%</option>
//                 <option value="80">80%</option>
//                 <option value="70">70%</option>
//                 <option value="60">60%</option>
//                 <option value="50">50%</option>
//                 <option value="40">40%</option>
//                 <option value="30">30%</option>
//                 <option value="20">20%</option>
//                 <option value="10">10%</option>
//               </select>
//             </li>
//             <li>
//               <button className="map-btn" onClick={handleClick}>
//                 Maps
//               </button>
//             </li>

//             <li>
//               <select
//                 className="hasDropdown"
//                 onChange={handleHumidityChange}
//                 value={filterHumidity || ""}
//               >
//                 <option value="">Filter by Humidity</option>
//                 <option value="100">100%</option>
//                 <option value="90">90%</option>
//                 <option value="80">80%</option>
//                 <option value="70">70%</option>
//                 <option value="60">60%</option>
//                 <option value="50">50%</option>
//                 <option value="40">40%</option>
//                 <option value="30">30%</option>
//                 <option value="20">20%</option>
//                 <option value="10">10%</option>
//               </select>
//             </li>
//             <li>
//               <a href="#">Contact us</a>
//             </li>
//             <li>
//               <a href="#">PPT</a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//       <div className="bins">
//         {filteredSensors.length > 0 ? (
//           filteredSensors.map((sensor) => (
//             <div key={sensor.id} className="sensor-box">
//               <p>ID: {sensor.id}</p>
//               <p>Humidity: {sensor.humidity}</p>
//               <p>Temperature: {sensor.temperature} </p>
              
//               <div
//                 className="circular-progress"
//                 data-inner-circle-color="lightgrey"
//                 data-percentage="55"
//                 data-progress-color="crimson"
//                 data-bg-color="black"
//               >
//                 <div className="inner-circle">
//                   <p className="percentage">{sensor.value}%</p>
//                 </div>
//               </div>
//               <button className="siu">Compress</button>
//             </div>
//           ))
//         ) : (
//           <p>Waiting for data...</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;
