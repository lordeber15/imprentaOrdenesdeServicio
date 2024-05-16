

import { useState } from "react"
import {useNavigate} from "react-router-dom"
import Modal from "../components/modal";
function Dashboard() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col">
        
        <div className="flex flex-row  justify-center py-3">
          <h1 className="py-1 text-4xl font-bold text-cyan-500">Ordenes de Servicio</h1>
        </div>
        <div className="flex flex-row  justify-end py-1 px-24">
        <button className=" bg-cyan-600 px-3 py-2 rounded-md font-bold text-white text-lg" onClick={()=>{setOpen(true)}}>Agregar Orden</button>
        </div>
        <div className="w-full px-24 py-3">
        <table className="table-auto w-full  bg-white border border-gray-200 divide-y divide-gray-200 ">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-cyan-600 text-md leading-4 font-medium text-white uppercase tracking-wider text-center">
                N° de Orden
              </th>
              <th className="px-6 py-3 bg-cyan-600  text-center text-md leading-4 font-medium text-white uppercase tracking-wider">
                Fecha
              </th>
              <th className="px-6 py-3 bg-cyan-600  text-center text-md leading-4 font-medium text-white uppercase tracking-wider">
                Razon Social
              </th>
              <th className="px-6 py-3 bg-cyan-600 text-center text-md leading-4 font-medium text-white uppercase tracking-wider">
                Detalles de orden
              </th>
              <th className="px-6 py-3 bg-cyan-600  text-center text-md leading-4 font-medium text-white uppercase tracking-wider">
                Estado de la Orden
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr
              className="hover:bg-gray-50"
              onClick={() => { navigate("/detallesOrden") }}
              key={1}
            >
              <td className="px-6 py-4 whitespace-no-wrap cursor-pointer select-none text-center">
                1
              </td>
              <td className="px-6 py-4 whitespace-no-wrap cursor-pointer select-none text-center">
                09/05/2024
              </td>
              <td className="px-6 py-4 whitespace-no-wrap cursor-pointer select-none text-center">
                Olinda
              </td>
              <td className="px-6 py-4 whitespace-no-wrap cursor-pointer select-none text-center">
                Honorarios
              </td>
              <td className="px-6 py-4 whitespace-no-wrap cursor-pointer select-none text-center">
                      <label className=" bg-red-600 px-5 py-2 rounded-full text-white font-bold">Diseño</label>
                      <label className=" bg-amber-500 px-5 py-2 rounded-full text-white font-bold">Taller</label>
                      <label className=" bg-green-600 px-5 py-2 rounded-full text-white font-bold">Terminado</label>
              </td>
            </tr>
            
            
          </tbody>
        </table>
        </div>
        <Modal open={open} onClose={()=>{setOpen(false)}}>
          <div className="">
            <div className="flex justify-center text-cyan-600 font-bold text-2xl">Orden de Servicio</div>
            <div className=" flex flex-col">
            <label className="text-cyan-600 font-semibold text-lg py-1">Fecha</label>
            <input type="date" className=" px-3 py-2 text-cyan-600 font-semibold rounded-md border-2 border-solid focus:border-cyan-500  focus:outline-none"/>
            </div>
            <div className="flex flex-col">
            <label className="text-cyan-600 font-semibold text-lg py-1">Razon Social</label>
            <input type="text" className="px-3 py-2 text-cyan-600 font-semibold rounded-md border-2 border-solid focus:border-cyan-500  focus:outline-none"/>
            </div>
            <div className="flex flex-row gap-3">
            <div className="flex flex-col w-1/2">
            <label className="text-cyan-600 font-semibold text-lg">Telefono</label>
            <input type="number" min={0} className=" px-3 py-2 text-cyan-600 font-semibold rounded-md border-2 border-solid focus:border-cyan-500  focus:outline-none"/>
            </div>
            <div className="flex flex-col w-1/2">
            <label className="text-cyan-600 font-semibold text-lg">Estado</label>
            <select className=" px-3 py-2 text-cyan-600 font-semibold rounded-md border-2 border-solid focus:border-cyan-500  focus:outline-none">
              <option>Diseño</option>
              <option>Taller</option>
              <option>Terminado</option>
            </select>
            </div>

            </div>
            
            <div className="flex flex-col">
            <label className="text-cyan-600 font-semibold text-lg">Detalles de la Orden</label>
            <input type="text" className=" px-3 py-2 text-cyan-600 font-semibold border-2 rounded-md border-solid focus:border-cyan-500  focus:outline-none"/>
            </div>
            <div className="flex flex-row gap-3">
            <div className="flex flex-col w-1/2">
            <label className="text-cyan-600 font-semibold text-lg">Total</label>
            <input type="number" className=" px-3 py-2 text-cyan-600 font-semibold rounded-md border-2 border-solid focus:border-cyan-500  focus:outline-none"/>
            </div>

            <div className="flex flex-col w-1/2">
            <label className="text-cyan-600 font-semibold text-lg">Adelanto</label>
            <input type="number" className=" px-3 py-2 text-cyan-600 font-semibold rounded-md border-2 border-solid focus:border-cyan-500  focus:outline-none"/>
            </div>
            </div>
            
            
          </div>
        </Modal>
        </div>
  )
}

export default Dashboard