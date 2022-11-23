import './Hero.css'
import Item from '../Item/Item'
import Button from '../Button/Button'


const Hero = ({Data, viewData, deleteData}) => {




  return (
    <>
    <div className=' container mx-auto mt-5 max-w-[70%]'>
      <div className='hero bg-slate-400 h-1/2 w-9/10 mx-auto rounded-xl '>

      {
        Data.length ? (Data.map((item) => {
          return (
            <div key={item.id}>
            <Item data={item}/>
            </div>)
        })) : (<h1 className='text-center my-12 text-4xl font-extrabold'> لا يوجد بيانات لعرضها</h1>)
      }

        </div> 
    </div>
        <div className='container mx-auto'>

          <Button deleteData={deleteData} viewData={viewData}/>
        </div>
        </>
  )
}

export default Hero