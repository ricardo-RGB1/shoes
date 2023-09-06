
const Button = ({label, backgroundColor, borderColor, textColor, secondTransGray, trans }) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none

    ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : ` text-white border-transparent`}

    hover:bg-black bg-slate-700 rounded-full transition`}>
     
        {label}
    </button>
  )
}

export default Button