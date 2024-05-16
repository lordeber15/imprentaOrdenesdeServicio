
import { useNavigate } from "react-router-dom"
import back from "../assets/fechaback.svg"
function Precios() {
    const navigate = useNavigate();
  return (
    <div>
        <div className="flex flex-row justify-between px-24 py-5">
            <div className=" text-lg font-bold flex justify-center content-center bg-cyan-600 text-white px-3 py-2 rounded-md " onClick={()=>{navigate("/dashboard")}}>
                <img src={back} className="w-6"/>
                </div>
            <div className=" text-4xl font-bold">Precios</div>
            <div></div>
        </div>
    </div>
  )
}

export default Precios