import './Item'

const Item = ({data}) => {
    return (
        <>
            <div className='flex p-2' >
                <div className='pl-2'>
                    <img className='h-16 w-16 object-cover rounded-full mr-5' src='p1.jpg' />
                </div>
                <div className='mr-4'>
                    <h1 className='p-1'>{data.Name}</h1>
                    <p>{data.Date}</p>

                </div>

            </div>
            <hr className='w-4/5 mx-auto' />
        </>
    )
}

export default Item