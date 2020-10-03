import React from 'react';
import PopupWithForm from './PopupWithForm'

function AddPlacePopup({ isOpen, onClose }) {

    return (
        <PopupWithForm
            title="Новое место"
            name="add-card"
            isOpen={isOpen}
            onClose={onClose}
        >
            <input type="text" name="title" placeholder="Название" className="popup__form-text popup__form-text_type_title" id='title-input' minlength="1" maxlength="30" autocomplete="off" required />
            <span className='popup__form-text-error' id='title-input-error'></span>
            <input type="url" name="link" placeholder="Ссылка на картинку" className="popup__form-text popup__form-text_type_link" id='url-input' autocomplete="off" required />
            <span className='popup__form-text-error' id='url-input-error'></span>
            <input type="submit" value="Создать" className="popup__form-submit popup__form-submit_type_add-card" />
        </PopupWithForm>
    );
}

export default AddPlacePopup;