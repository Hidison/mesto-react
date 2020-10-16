import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup.js';
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";


function App() {
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
	const [selectedCard, setSelectedCard] = React.useState({ card: {}, isOpen: false });
	const [currentUser, setCurrentUser] = React.useState({});
	const [cards, setCards] = React.useState([]);

	React.useEffect(() => {
		const promises = [api.getInitialCards(), api.getPersonInfo()]

		Promise.all(promises)
			.then(([resCard, resUser]) => {
				setCurrentUser(resUser);
				setCards(resCard);
			})
			.catch((error) => {
				console.log(error)
			});
	}, []);


	function handleEditAvatarClick() {
		setIsEditAvatarPopupOpen(true);
	}

	function handleEditProfileClick() {
		setIsEditProfilePopupOpen(true)
	}

	function handleAddPlaceClick() {
		setIsAddPlacePopupOpen(true)
	}

	function handleCardClick(card) {
		setSelectedCard({ card, isOpen: true });
	}

	function closeAllPopups() {
		setIsEditAvatarPopupOpen(false);
		setIsEditProfilePopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setSelectedCard({ ...selectedCard, isOpen: false });
	}

	function handleUpdateUser(data) {
		api.sendUserInformation({ name: data.name, about: data.about }).then((result) => {
			setCurrentUser(result);
			closeAllPopups();
		})
			.catch((err) => {
				console.log(err);
			})
	}

	function handleUpdateAvatar(data) {
		api.editAvatar({ avatar: data.avatar }).then((result) => {
			setCurrentUser(result);
			closeAllPopups();
		})
			.catch((err) => {
				console.log(err);
			})
	}

	function handleCardLike(card) {
		const isLiked = card.likes.some(i => i._id === currentUser._id);

		if (!isLiked) {
			api.likeCard(card._id, !isLiked).then((newCard) => {
				const newCards = cards.map((c) => c._id === card._id ? newCard : c);
				setCards(newCards)
			})
				.catch((err) => {
					console.log(err);
				})
		} else {
			api.removelikeCard(card._id, isLiked).then((newCard) => {
				const newCards = cards.map((c) => c._id === card._id ? newCard : c);
				setCards(newCards)
			})
				.catch((err) => {
					console.log(err);
				})
		}
	}

	function handleCardDelete(card) {
		api.delCard(card._id)
			.then(() => {
				const newCards = cards.filter(с => с._id !== card._id)
				setCards(newCards)
			})
			.catch((err) => {
				console.log(err);
			})
	}

	function handleAddPlaceSubmit(data) {
		api.addNewCard({ name: data.imageName, link: data.imageLink }).then((newCard) => {
			setCards([...cards, newCard]);
			closeAllPopups();
		})
			.catch((err) => {
				console.log(err);
			})
	}

	return (
		<div className="page">
			<CurrentUserContext.Provider value={currentUser}>
				<Header />
				<Main
					onEditProfile={handleEditProfileClick}
					onAddPlace={handleAddPlaceClick}
					onEditAvatar={handleEditAvatarClick}
					onCardClick={handleCardClick}
					cards={cards}
					onCardLike={handleCardLike}
					onCardDelete={handleCardDelete}
				/>
				<Footer />
				<EditAvatarPopup
					isOpen={isEditAvatarPopupOpen}
					onClose={closeAllPopups}
					onUpdateAvatar={handleUpdateAvatar}
				/>
				<EditProfilePopup
					isOpen={isEditProfilePopupOpen}
					onClose={closeAllPopups}
					onUpdateUser={handleUpdateUser}
				/>
				<AddPlacePopup
					isOpen={isAddPlacePopupOpen}
					onClose={closeAllPopups}
					onAddPlace={handleAddPlaceSubmit}
				/>
				<ImagePopup
					card={selectedCard}
					onClose={closeAllPopups}
				/>
			</CurrentUserContext.Provider>
		</div>
	);
}

export default App;
