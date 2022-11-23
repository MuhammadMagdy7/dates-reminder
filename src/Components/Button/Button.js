import './Button.css'

const Button = ({deleteData, viewData}) => {
  return (
    <div className='p-3 flex justify-between w-4/6 mx-auto'>

      <button onClick={deleteData} className=' bg-orange-900 px-7 py-2 rounded-xl'>مسح الكل</button>
      <button onClick={viewData} className=' bg-orange-900 px-7 py-2 rounded-xl'>أضافة الكل</button>
    </div>
  )
}

export default Button