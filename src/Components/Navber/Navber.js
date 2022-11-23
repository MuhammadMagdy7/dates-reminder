import './Navber.css'

const Navber = ({data}) => {
  return (
    <div className='container mx-auto pt-20 pr-6 w-4/6'>
      <h1 className=' text-3xl font-bold '>لديك اليوم {data.length} مواعيد</h1>
    </div>
  )
}

export default Navber