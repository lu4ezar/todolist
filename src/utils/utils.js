import moment from 'moment';

const concatDateTime = (date, time) => {
	date = date
		? moment(date).format('DD/MM/YYYY')
		: moment().format('DD/MM/YYYY');
	time = time ? moment(time).format('HH:mm') : moment().format('HH:mm');
	const dateTime = moment(date + ' ' + time, 'DD/MM/YYYY HH:mm');
	const toDate = moment(dateTime).toDate();
	return toDate;
};

export const isExpired = ({ date, time }) => {
	if (date || time) {
		const now = moment();
		const dateTime = concatDateTime(date, time);
		if (moment(dateTime).isBefore(now)) {
			return 'expired';
		}
	}
	return '';
};
