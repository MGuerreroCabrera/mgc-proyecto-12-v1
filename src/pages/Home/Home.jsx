import { useForm } from "react-hook-form";
import "./Home.css";
import { useThemeContext } from "../../hooks/useThemeContext";
import { useContext } from "react";
import { GamerContext } from "../../contexts/GamerContext";
import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";

const Home = () => {  

  // Importar el contexto para los estilos al cambiar el tema
  const { themeContext } = useThemeContext(); 

  // Importar el contexto para manejar el nombre del jugador
  const { gamerName, setGamerName } = useContext(GamerContext);

  // Importar elementos necesarios del hook useForm
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Importar el hook useNavigate para dirigir al usuario a la página principal de selección de juegos
  const navigate = useNavigate();

  // Función que se ejecuta al hacer submit del formulario
  const submit = (data) => {
    setGamerName(data.gamername);
    navigate("./gameshome");
  }

  return (
    <div id="home-container">
      <div className="title-container">
        <h1>Bienvenid@ al salón de juegos Diverty Room { gamerName }</h1>
      </div>
      <div className="form-gamer-name-container">
        <h2>Introduce los datos</h2>
        <form onSubmit={handleSubmit(submit)} className="form-wrpr">
          <label htmlFor="gamername">Introduce tu nombre de jugador</label>
          <input id="gamername" {...register("gamername", { required: "Campo requerido" })} className={`gamer-name-input ${themeContext}`} placeholder={errors.gamername && errors.gamername.message} style={errors.gamername && {borderBottom: "2px solid red"}}/>
          {console.log(errors)}    
          <button className={ themeContext }>Registrar nombre</button>
        </form>
      </div>
    </div>
  )
}

export default Home;