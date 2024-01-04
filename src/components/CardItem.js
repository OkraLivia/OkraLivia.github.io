import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
	return (
		<>
			<li className="cards__item">
			<figure className="cards__item__pic-wrap">
						<img src={props.src} alt='card_img' className="cards__item__img"/>
					</figure>
					<div className="cards__item__info">
						<div className="tags">{props.tags}</div>
						<h5 className="cards__item__text">{props.text}</h5>
						<div className="item_summary">{props.summary}</div>
						<Link className="cards__item__link" to={props.path}>
							View project
						</Link>
					</div>

			</li>
				
		</>
	);
}

export default CardItem;
