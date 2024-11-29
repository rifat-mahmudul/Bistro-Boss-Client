import PropTypes from 'prop-types'

const Item = ({item}) => {

    const {image, name, recipe, price} = item;

    return (
        <div className='flex gap-6'>
            <div>
                <img style={{borderRadius : "0px 200px 200px 200px"}} className='h-20 w-28' src={image} alt="" />
            </div>

            <div>
                <div className='flex gap-5'>
                    <h3 className='font-bold text-xl'>{name}---</h3>
                    <p className='text-yellow-600'>${price}</p>
                </div>

                <p className='text-gray-500 mt-3'>{recipe}</p>
            </div>
        </div>
    )
}

Item.propTypes = {
    item : PropTypes.object
}

export default Item
