import './Navber.css'

const Navber = ({Data}) => {
  return (
    <div className='container mx-auto pt-20 pr-6 w-4/6'>
      <h1 className=' text-3xl font-bold '>لديك اليوم {Data.length ? Data.length : 0} مواعيد</h1>
    </div>
  )
}

export default Navber