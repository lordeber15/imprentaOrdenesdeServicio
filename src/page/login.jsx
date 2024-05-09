import logo from "../assets/logo.jpg"
function login() {
  return (
    <div className="flex place-content-center h-screen">
        <div className="flex flex-col justify-center items-center border-black rounded-md shadow-lg p-5 m-20">
        <img src={logo} className=" w-52 flex items-center"/>
        <input type="text" placeholder="Usuario" className="w-80 my-2  px-2 py-3 rounded-md border-2 border-solid focus:border-cyan-500  focus:outline-none"/>
        <input type="password"placeholder=" Contraseña" className="w-80 my-2  px-2 py-3 rounded-md border-2 border-solid focus:border-cyan-500  focus:outline-none"/>
        <button className=" w-full bg-cyan-500 rounded-md py-2 my-2 font-bold text-blue-50 text-lg">Ingresar</button>
        </div>

    </div>
  )
}

export default login