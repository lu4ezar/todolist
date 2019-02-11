import React from 'react';
import BackToListBtn from './modeButton';

const ControlPanel = props => {
	const length = props.length;
	return (
		<div className="controlPanel">
			<h3>
				You have {length} {length === 1 ? 'record' : 'records'}
			</h3>
			<fieldset>
				<legend>choose</legend>
				<fieldset>
					<label>
						<input
							type="radio"
							name="mode"
							value="list"
							checked={props.mode === 'list'}
							onChange={props.handleChange}
						/>
						list
					</label>
					<label>
						<input
							type="radio"
							name="mode"
							value="form"
							checked={props.mode === 'form'}
							onChange={props.handleChange}
						/>
						form
					</label>
					<label>
						<input
							type="radio"
							name="mode"
							value="details"
							checked={props.mode === 'details'}
							onChange={props.handleChange}
						/>
						details
					</label>
				</fieldset>
				{props.children}
				{props.mode !== 'list' && (
					<BackToListBtn handleClick={props.handleBackToListClick} />
				)}
			</fieldset>
		</div>
	);
};

export default ControlPanel;
