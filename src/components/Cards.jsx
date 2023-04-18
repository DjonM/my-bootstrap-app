import React from 'react'

//Основаная карточка.
const Cards = () => {
    return (
        <div className='conteiner py-3'>
            <main>
                <div className='row row-cols-1 row-cols-md-3 row-cols-sm-2 text-center justify-content-center'>
                    <div className='col py-3'>
                        <div className='card md-6 rounded'>
                            <div className='card-header'>
                                <p>СПА ОТЕЛЬ ВЕРШИНЫ</p>
                                <img className='rounded' src="img/1.jpeg" alt="Картинка гор" width={'85%'} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Cards