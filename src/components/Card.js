import React from 'react';

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
      }  

    return (
        <div className="element">
			<img className="element__image" src={props.card.link} onClick={handleClick} />
			<div className="element__info">
				<h4 className="element__title">{props.card.name}</h4>
				<div className="element__place-like">
					<button type="button" className="element__button-like"></button>
					<span className="element__like-count">{props.card.likes.length}</span>
				</div>
			</div>
			<button type="button" className="element__remove_image"></button>
		</div>
    );
}

export default Card;