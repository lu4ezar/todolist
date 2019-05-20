// @flow
import moment from 'moment';
import type { CreationDate, Time, Status, Todo } from '../types/todos';

export const stringToDate = (str: string): CreationDate => moment(str).toDate();

const concatDateTime = (date: CreationDate, time: Time): Date => {
	date = date
		? moment(date).format('DD/MM/YYYY')
		: moment().format('DD/MM/YYYY');
	time = time ? moment(time).format('HH:mm') : moment().format('HH:mm');
	const dateTime = moment(date + ' ' + time, 'DD/MM/YYYY HH:mm');
	const toDate = moment(dateTime).toDate();
	return toDate;
};

export const isExpired = ({ status, date, time }: Todo): Status => {
	if (date || time) {
		const now: moment = moment();
		const dateTime: moment = concatDateTime(date, time);
		if (moment(dateTime).isBefore(now)) {
			return 'expired';
		}
	}
	return status;
};
