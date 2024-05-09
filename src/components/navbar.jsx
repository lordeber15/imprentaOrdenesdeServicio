import logo from "../assets/logodial.svg"
function navbar() {
  return (
    <div className=" h-20 w-full bg-cyan-600 shadow-md flex justify-between px-10 items-center">
        <img src={logo} className="h-16"/>
        <div>nombre Admin</div>
        </div>
  )
}

export default navbar