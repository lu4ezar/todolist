import React from 'react';
import AddTodoForm from '../containers/FormContainer';
import VisibleList from '../containers/ListContainer';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../elements/Header';
import Notification from '../containers/NotificationContainer';

const App = () => (
	<div>
		<CssBaseline />
		<Container maxWidth='sm'>
			<Header variant='h3' text='TodoApp' />
			<AddTodoForm />
			<VisibleList />
			<Notification />
		</Container>
	</div>
);

export default App;
