import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import ButtonPanel from '../buttonPanel';
import Item from '../../Item';

const props = {
	item: {
		id: 0,
		status: ''
	},
	functions: {
		view: jest.fn(),
		edit: jest.fn(),
		completed: jest.fn(),
		deleteItem: jest.fn()
	}
};

afterEach(cleanup);

describe('Button Panel', () => {
	it('renders and every button has bound function', () => {
		const container = render(<ButtonPanel {...props} />);

		fireEvent.click(container.getByTitle(/view/i));
		expect(props.functions.view).toBeCalled();

		fireEvent.click(container.getByTitle(/edit/i));
		expect(props.functions.edit).toBeCalled();

		fireEvent.click(container.getByTitle(/completed/i));
		expect(props.functions.completed).toBeCalled();

		fireEvent.click(container.getByTitle(/delete/i));
		expect(props.functions.deleteItem).toBeCalled();
	});

	it('does not render "View" button in View mode', () => {
		const container = render(<ButtonPanel {...props} mode="view" />);

		expect(container.queryByTitle(/view/i)).toBeNull();
	});

	it('renders disabled "Edit" and "Mark as Completed" buttons when item.status equals "completed" ', () => {
		const item = {
			id: 1,
			status: 'completed'
		};
		const container = render(<ButtonPanel {...props} item={item} />);
		const editButton = container.getByTitle(/edit/i);
		const completedButton = container.getByTitle(/completed/i);
		expect(editButton).toHaveAttribute('disabled');
		expect(completedButton).toHaveAttribute('disabled');
	});
});
