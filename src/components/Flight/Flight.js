import React from 'react';
import {Link} from 'react-router-dom'
import * as moment from 'moment';
import 'moment/locale/ru'
import cn from 'classnames';

import './Flight.css'


moment.locale('ru');

const Flight = (props) => {
	const { flight, direction } = props;
	const { i_id, mar: { city }, t_at, t_st, vip_status, term_gate,
		term, gate_id, flt, co: { code, name, livreiImageId } } = flight;
	const { id: imageId, extension } = livreiImageId;

	const imgClassez = cn({
		'flight-row__airline-image': true,
		departure: direction === 'departure',
	});

	const getTerm = () => direction === 'departure' ? term_gate : term;

	const getDayAndMonth = (time) => moment(time).format('DD MMM');
	const getTime = (time) => moment(time).format('HH:mm');

	return (
		<li
			_ngcontent-c34="true" devicetapanimation="true" _nghost-c35="true"
			className="ng-tns-c34-16 ng-star-inserted"
		>
			<Link
				to={`/timetable/${direction}/flight/${i_id}/info`}
				className="row-wrapper"
				devicetapanimation=".table-row__wrapper"
			>
				<div className="row-hover">
					<div className="table-row flight-row loaded">
						<div className="table-row__wrapper">
							<div className="table-row__cell flight-row__time-cell" role="cell">
								<div className="table-row__inner">
									<div className="flight-row__date-time">
										<time className="flight-row__time real-time">{getTime(t_at)}</time>
										<div className="flight-row__time-old loaded rescheduled ng-star-inserted">
											<div style={{position: 'relative', height: '100%'}}>
												<time>{getTime(t_st)}</time>
												<div className="flight-row__tomorrow-date old loaded ng-star-inserted">
													<time>{getDayAndMonth(t_st)}</time>
												</div>
											</div>
										</div>
										<div className="flight-row__tomorrow-date loaded ng-star-inserted real-date">
											<time>{getDayAndMonth(t_at)}</time>
										</div>
									</div>
								</div>
							</div>

							<div className="table-row__cell table-row__primary-text flight-row__city" role="cell">
								<div className="table-row__inner">
									<span className="flight-row__city-name">{city}</span>
								</div>
							</div>

							<div className="table-row__cell flight-row__airline-cell" role="cell">
								<div className="table-row__inner">
									<div className="flight-row__airline">
										<div
											serversizes="100:100"
											className={imgClassez}>
											<img
												className="not-lazyload-image ng-tns-c38-292 loaded contain ng-star-inserted"
												alt={name}
												// src={`/bitrix/upload/apiresize/${imageId}/100/100/crop/img.${extension}`}
												src='http://placekitten.com/g/50/50'
											/>
										</div>
										<span className="flight-row__airline-name">{code}</span>
										<span className="flight-row__airline-flight-number">{flt}</span>
									</div>
								</div>
							</div>

							<div className="table-row__cell flight-row__terminal" role="cell">
								<div className="table-row__inner">{getTerm()}&nbsp;{gate_id}</div>
							</div>

							<div className="table-row__cell table-row__secondary-text flight-row__status-cell" role="cell">
								<div className="table-row__inner">
									<span>{vip_status}</span>
								</div>
							</div>

							<div className="table-row__cell flight-row__arrow-cell" role="cell">
								<div className="table-row__inner">
									<div className="flight-row__arrow ng-star-inserted">
										<div className="arrow-trans">
											<div className="arrow-transition">
												<span className="arrow-transition__line"/>
												<svg viewBox="0 0 4 7" className="arrow-right-small" xmlns="http://www.w3.org/2000/svg">
													<path d="M4 3.5L0 0v1l3 2.5L0 6v1z"/>
												</svg>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</li>
	)
};
export default Flight
