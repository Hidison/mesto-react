import React from 'react';
import api from "../utils/Api";
import Card from "./Card.js";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
    const [userName, setUserName] = React.useState('Жак-Ив Кусто')
    const [userDescription, setUserDescription] = React.useState('Исследователь океана')
    const [userAvatar, setUserAvatar] = React.useState('images/zhak-iv_kusto.png')
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        const promises = [api.getInitialCards(), api.getPersonInfo()]

        Promise.all(promises)
            .then(([resCard, resUser]) => {
                setUserName(resUser.name);
                setUserDescription(resUser.about);
                setUserAvatar(resUser.avatar);
                setCards(resCard);
            })
            .catch((error) => {
                console.log(error)
            });
    }, []);

    return (
        <main>
            <section className="profile">
                <div className="profile__avatar" onClick={onEditAvatar}>
                    <img src={userAvatar} alt="портрет человека" className="profile__avatar-icon" />
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">{userName}</h1>
                    <button type="button" className="profile__edit-button" onClick={onEditProfile}></button>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button type="button" className="button_add-card" onClick={onAddPlace}></button>
            </section>
            <section className="elements">
                {cards.map((card) =>
                    <Card
                        card={card}
                        onCardClick={onCardClick}
                    />
                )}
            </section>
        </main>
    );
}

export default Main;