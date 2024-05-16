import { useState , useEffect } from "react"
import { useNavigate } from "react-router-dom";

function DeteallesOrden() {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [adelanto, setAdelanto] = useState(0);
  const [saldo, setSaldo] = useState(0);

  useEffect(() => {
    setSaldo(total - adelanto);
  }, [total, adelanto]);

  const handletotal = (e) => {setTotal(parseFloat(e.target.value))}
  const handleadelanto = (e) => {setAdelanto(parseFloat(e.target.value))}
  return (
    <div className="w-screen py-5">
      <div className="w-full flex justify-between px-24">
        <button className=" text-lg font-bold flex justify-center content-center bg-cyan-600 text-white px-5 py-2 rounded-md " onClick={()=>{navigate("/dashboard")}}>{"<"}</button>
        <label className=" text-3xl font-bold text-cyan-600 ">Orden de Servicio</label>
        <label className="px-3 py-2 text-2xl text-cyan-600 font-bold" type="text">N° 000{"1"}</label>
      </div>
      <div className=" flex flex-row px-24 gap-3">
      <div className="w-full flex justify-end gap-3 py-2">
        <label className="text-lg font-bold text-cyan-600 content-center">Fecha</label>
        <input type="date" className="px-3 py-2 rounded-md border-2 border-solid focus:border-cyan-500  focus:outline-none font-bold  focus:transition-all text-cyan-600"/>
      </div>
      
      <div className="flex justify-end  gap-3 py-2">
        <label className="text-lg font-bold text-cyan-600 content-center">Telefono</label>
        <input type="number" min={0} className="px-3 py-2 rounded-md border-2 border-solid focus:border-cyan-500  focus:outline-none font-semibold focus:transition-all"/>
      </div>

      <div className="flex justify-end  gap-3 py-2">
        <label className="text-lg font-bold text-cyan-600 content-center">Estado  </label>
        <select className="px-3 py-2 text-cyan-600 rounded-md border-2 border-solid focus:border-cyan-500  focus:outline-none font-semibold focus:transition-all">
          <option>Diseño</option>
          <option>Impresion</option>
          <option>Terminado</option>
        </select>
      </div>
      
      </div>
      <div className="w-screen flex justify-center gap-3 px-24 items-center py-2">
        <label className="text-lg flex justify-center text-cyan-600 font-bold w-[12%] ">Razon Social</label>
        <input type="text" className="px-3 py-2 w-full rounded-md border-2 border-solid focus:border-cyan-500  focus:outline-none font-semibold focus:transition-all"/>
      </div>
      
      
      <div className="w-screen flex justify-center gap-3 px-24 items-center">
        <label className="text-lg flex justify-center text-cyan-600 font-bold w-[12%] px-2">Detalles</label>
        <input type="text" className="px-3 py-2 w-full rounded-md border-2 border-solid focus:border-cyan-500  focus:outline-none font-semibold focus:transition-all"/>
      </div>
      <div className="flex flex-row justify-end py-2 gap-3 px-24">
      <div className="flex gap-3">
        <label className="text-lg flex justify-center text-cyan-600 font-bold w-1/3 items-center">Total</label>
        <input type="number" min={0} className="px-3  py-2 w-full rounded-md border-2 border-solid focus:border-cyan-500  focus:outline-none font-semibold" value={total} onChange={handletotal} />
      </div>
      <div className="flex gap-3">
        <label className="text-lg flex justify-center text-cyan-600 font-bold w-1/3 items-center">Adelanto</label>
        <input type="number" min={0} className="px-3 py-2 w-full rounded-md border-2 border-solid focus:border-cyan-500  focus:outline-none font-semibold focus:transition-all" value={adelanto} onChange={handleadelanto}/>
      </div>
      <div className="flex gap-3">
        <label className="text-lg flex justify-center text-cyan-600 font-bold w-1/3 items-center">Saldo</label>
        <input type="number" disabled  min={0} className="px-3 py-2 w-full rounded-md border-2 border-solid focus:border-cyan-500  focus:outline-none font-semibold focus:transition-allfocus:transition-all" value={saldo} />
      </div>
      </div>
      <div className="w-full flex justify-end px-24">
      <button className="bg-cyan-600 w-1/6 py-2 rounded-md shadow-md hover:bg-cyan-800 text-white">Guardar</button>
      </div>
    </div>
  )
}

export default DeteallesOrden