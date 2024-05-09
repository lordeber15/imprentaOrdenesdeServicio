
import Navbar from "../components/navbar"

function dashboard() {
  
  return (
    <div className="flex flex-col">
        <Navbar/>
        <div className="flex flex-row  justify-center py-3">
          <h1 className="py-1 text-4xl font-bold text-cyan-500">Ordenes de Servicio</h1>
        </div>
        <div className="flex flex-row  justify-end py-1 px-24">
        <button className=" bg-cyan-600 px-3 py-2 rounded-md font-bold text-white text-lg">Agregar Orden</button>
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
              onClick={() => {   }}
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
        </div>
  )
}

export default dashboard