import PropTypes from 'prop-types'

const Title = ({title, heading}) => {
    return (
        <div className='text-center'>
            <p className='text-yellow-600'>---{title}---</p>
            <h1 className='font-Cinzel font-bold text-2xl border-t-2 border-b-2 py-2 max-w-sm mx-auto mt-2 mb-8 border-gray-300 uppercase'>{heading}</h1>
        </div>
    )
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
}

export default Title
