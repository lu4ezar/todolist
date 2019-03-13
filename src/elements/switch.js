// @flow
import * as React from 'react';
import OriginalSwitch from 'react-switch';
import styled from 'styled-components';
import { list, listItem } from '../utils/color';
import Badge from 'react-bootstrap/Badge';

const Border = styled.div`
	border: 2px solid ${listItem.border};
	border-radius: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${props =>
		props.on ? list.dragBackground : listItem.background};
	transition: background 0.2s ease;
`;

const Label = styled(Badge)`
	cursor: pointer;
`;

const switchStyle = {
	handleDiameter: 5,
	height: 18,
	width: 56,
	offColor: `${listItem.background}`,
	onColor: `${list.dragBackground}`,
	offHandleColor: `${list.border}`,
	onHandleColor: `#000`,
	uncheckedIcon: false,
	checkedIcon: false
};

type Props = {
	id: string,
	textLeft: string,
	textRight: string,
	state: boolean,
	disabled: boolean,
	onSwitch: (checked: boolean, event: ?Event, id: string) => void
};

const Switch = (props: Props) => {
	Switch.defaultProps = {
		textLeft: 'Off',
		textRight: 'On'
	};

	const { id, state, onSwitch, disabled, textLeft, textRight } = props;

	const turnOn = (): void => {
		if (!state) {
			onSwitch(true, null, id);
		}
	};

	const turnOff = (): void => {
		if (state) {
			onSwitch(false, null, id);
		}
	};

	return (
		<Border on={state}>
			<Label pill variant="dark" onClick={turnOff}>
				{textLeft}
			</Label>
			<OriginalSwitch
				id={id}
				name={id}
				aria-labelledby={id}
				checked={state}
				onChange={onSwitch}
				state={state}
				disabled={disabled}
				{...switchStyle}
			/>
			<Label pill variant="dark" onClick={turnOn}>
				{textRight}
			</Label>
		</Border>
	);
};

export default Switch;
