import "./styles.css";
import carImg from '../../assets/car.png'
export default function Card() {
  return (
    <div className="dsc-card">
        
        <div className="dsc-catalog-card">
         <img src={carImg} alt="Carro" />
         <p>Lorem  ipsum dolor</p>
        </div>
    </div>
  );
}
