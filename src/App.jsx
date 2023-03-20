import "./App.css";
import { dogs } from "./data";
function App() {
  console.log(dogs);

  return (
    <div className="App">
      <div className="dog-card">
        <div className="header">
          <h1>Clase de react components</h1>
        </div>
      </div>
      <div className="lista-dogs">
        <div className="container-cards">
          <div className="card-dog">
            <img src={dogs[0].image} alt="foto-1" style={{ width: "50%" }} />
            <div>
              <h3>Nombre: {dogs[0].name}</h3>
              <p>Raza: {dogs[0].breed}</p>
              <p>Edad: {dogs[0].age}</p>
              <p>Nombre del propietario: {dogs[0].owner}</p>
              <p>Vacunas: {dogs[0].vaccines}</p>
              <button>Vacunar</button>
            </div>
          </div>
          <div className="card-dog">
            <img src={dogs[1].image} alt="foto-1" style={{ width: "50%" }} />
            <div>
              <h3>Nombre: {dogs[1].name}</h3>
              <p>Raza: {dogs[1].breed}</p>
              <p>Edad: {dogs[1].age}</p>
              <p>Nombre del propietario: {dogs[1].owner}</p>
              <p>Vacunas: {dogs[1].vaccines}</p>
              <button>Vacunar</button>
            </div>
          </div>
          <div className="card-dog">
            <img src={dogs[2].image} alt="foto-1" style={{ width: "50%" }} />
            <div>
              <h3>Nombre: {dogs[2].name}</h3>
              <p>Raza: {dogs[2].breed}</p>
              <p>Edad: {dogs[2].age}</p>
              <p>Nombre del propietario: {dogs[2].owner}</p>
              <p>Vacunas: {dogs[2].vaccines}</p>
              <button>Vacunar</button>
            </div>
          </div>
          <div className="card-dog">
            <img
              src={dogs[3].image}
              alt="foto-1" /* style={{ width: "50%" }} */
            />
            <div>
              <h3>Nombre: {dogs[3].name}</h3>
              <p>Raza: {dogs[3].breed}</p>
              <p>Edad: {dogs[3].age}</p>
              <p>Nombre del propietario: {dogs[3].owner}</p>
              <p>Vacunas: {dogs[3].vaccines}</p>
              <button>Vacunar</button>
            </div>
          </div>
          <div className="card-dog">
            <img src={dogs[4].image} alt="foto-1" style={{ width: "50%" }} />
            <div>
              <h3>Nombre: {dogs[4].name}</h3>
              <p>Raza: {dogs[4].breed}</p>
              <p>Edad: {dogs[4].age}</p>
              <p>Nombre del propietario: {dogs[4].owner}</p>
              <p>Vacunas: {dogs[4].vaccines}</p>
              <button>Vacunar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
