import React from 'react';
import PopupWithForm from './PopupWithForm'

function EditAvatarPopup({ isOpen, onClose }) {

    return (
        <PopupWithForm
            title="Обновить аватар"
            name="edit-avatar"
            isOpen={isOpen}
            onClose={onClose}
        >
            <input type="url" name="link" placeholder="Ссылка на картинку" className="popup__form-text popup__form-text_type_link" id='url-input' autocomplete="off" required />
            <span className='popup__form-text-error' id='url-input-error'></span>
            <input type="submit" value="Сохранить" className="popup__form-submit popup__form-submit_type_edit-avatar" />
        </PopupWithForm>
    );
}

export default EditAvatarPopup;