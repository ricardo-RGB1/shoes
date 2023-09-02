
const Button = ({label}) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none hover:bg-black bg-slate-700 rounded-full text-white transition">
        {label}
     
    </button>
  )
}

export default Button