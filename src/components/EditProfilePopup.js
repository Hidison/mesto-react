import React from 'react';
import PopupWithForm from './PopupWithForm'

function EditProfilePopup({ isOpen, onClose }) {

    return (
        <PopupWithForm
            title="Редактировать профиль"
            name="edit-profile"
            isOpen={isOpen}
            onClose={onClose}
        >
            <input type="text" name="name" value="Жак-Ив Кусто" className="popup__form-text popup__form-text_type_name" id='name-input' minlength="2" maxlength="40" autocomplete="off" required />
            <span className='popup__form-text-error' id='name-input-error'></span>
            <input type="text" name="job" value="Исследователь океана" className="popup__form-text popup__form-text_type_job" id='job-input' minlength="2" maxlength="200" autocomplete="off" required />
            <span className='popup__form-text-error' id='job-input-error'></span>
            <input type="submit" value="Сохранить" className="popup__form-submit" />
        </PopupWithForm>
    );
}

export default EditProfilePopup;