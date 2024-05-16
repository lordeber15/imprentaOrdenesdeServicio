import ordenservicio from "../assets/ordendeservicio.svg"
import precios from "../assets/precios.svg"
import { useNavigate } from "react-router-dom"

function Dashboard() {
  const navigate = useNavigate();
  return(
    <div className="flex justify-center items-center gap-8 py-10">
      <div onClick={()=>{navigate("/ordendeservicio")}} className="flex flex-col w-[200px] h-[250px] px-10 py-5 rounded-lg border-2 shadow-lg cursor-pointer hover:scale-105 bg-white transition-all justify-center items-center">
        <img src={ordenservicio} className="w-24"/>
        <label className="text-black font-bold text-lg text-center py-1">Orden de Servicio</label>
      </div>
      <div onClick={()=>{navigate("/precios")}} className="flex flex-col w-[200px] h-[250px] px-10 py-5 rounded-lg border-2 shadow-lg cursor-pointer hover:scale-105 bg-white transition-all justify-center items-center">
        <img src={precios} className="w-24"/>
        <label className="text-black font-bold text-lg text-center py-2">Precios</label>
      </div>
      

    </div>
  )
}

export default Dashboard