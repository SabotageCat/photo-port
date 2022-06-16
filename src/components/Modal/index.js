import React from 'react';

function Modal({currentPhoto}) {
    const {name, category, description, index} = currentPhoto;

    return (
        <div className='modalBackDrop'>
            <div className='modalContainer'>
                <h3 className='modalTitle'>{name}</h3>
                <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt='currentCategory' />
                <p>{description}</p>
                <button type='button'>
                    Close this modal
                </button>
            </div>
        </div>
    );
}

export default Modal;