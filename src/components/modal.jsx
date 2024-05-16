function Modal({open, onClose, children}) {
  return (
    <div onClick={onClose} className= {`min-h-screen w-screen backdrop-blur-sm fixed insert-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "invisible" }`}>
      <div onClick={(e)=>{e.stopPropagation()}} className={`bg-white w-96 rounded-xl mt-[-5rem] shadow p-6 transition-all ${open? "scale-100 opacity-100":" scale-125 opacity-0"}`}>
        <button onClick={onClose} className=" absolute top-2 right-2 p-1 rounded-lg text-gray400 bg-white hover:bg-gray-50 hover:text-gray-600">
          X
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal 