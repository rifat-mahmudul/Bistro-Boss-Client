/* eslint-disable react/prop-types */

const MenuBanner = ({title, heading, img, height}) => {
    return (
        <section style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backgroundImage: `url(${img})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundBlendMode: 'overlay',
            backgroundAttachment: 'fixed',
        }} className={`mb-16 ${height}`}>
            <div className="flex justify-center items-center h-full">
                <div className="text-white text-center bg-[#00000078] sm:w-[700px] mx-auto p-16 rounded-lg">
                    <h1 className="font-Cinzel text-4xl sm:text-5xl font-bold">{heading}</h1>
                    <p className="mt-2 text-gray-300">{title}</p>
                </div>
            </div>
        </section>
    )
}

export default MenuBanner
