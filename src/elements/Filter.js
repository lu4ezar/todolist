// @flow
import * as React from 'react';
import type { Filter as FilterType, FilterPayload } from '../types/filter';
import {
	Grid,
	Switch,
	Select,
	Badge,
	MenuItem,
	FormControlLabel,
	Collapse
} from '@material-ui/core';

type Props = {
	filter: FilterType,
	completedCount: number,
	expiredCount: number,
	setFilter: (payload: FilterPayload) => void
};

const Filter = (props: Props) => {
	const { setFilter, completedCount, expiredCount } = props;
	const {
		filterOn,
		priorityFilter,
		priorityFilterEnabled,
		completedFilter,
		completedFilterEnabled,
		expiredFilter,
		expiredFilterEnabled
	} = props.filter;

	const handleChange = name => event => {
		const target = event.target;
		const value =
			target.type === 'checkbox' ? target.checked : target.value;
		setFilter({ [name]: value });
	};

	return (
		<Grid container alignItems='center'>
			<Grid item xs={12}>
				<FormControlLabel
					label='Filter'
					labelPlacement='top'
					control={
						<Switch
							checked={filterOn}
							onChange={handleChange('filterOn')}
							value='filterOn'
						/>
					}
				/>
			</Grid>
			<Grid item xs={12}>
				<Collapse
					in={filterOn}
					children={
						<Grid container spacing={1}>
							<Grid item xs={4}>
								<FormControlLabel
									label='Priority'
									labelPlacement='top'
									control={
										<Switch
											checked={priorityFilterEnabled}
											onChange={handleChange(
												'priorityFilterEnabled'
											)}
											value='priorityFilterEnabled'
										/>
									}
								/>
								<Select
									value={priorityFilter}
									onChange={handleChange('priorityFilter')}
									disabled={
										!filterOn || !priorityFilterEnabled
									}
									variant='standard'
									multiple
								>
									<MenuItem value='low'>low</MenuItem>
									<MenuItem value='normal'>normal</MenuItem>
									<MenuItem value='high'>high</MenuItem>
								</Select>
							</Grid>
							<Grid item xs={4}>
								<Badge
									color='primary'
									badgeContent={completedCount}
								>
									<FormControlLabel
										value='Completed'
										label='Completed'
										labelPlacement='top'
										control={
											<Switch
												checked={completedFilterEnabled}
												onChange={handleChange(
													'completedFilterEnabled'
												)}
												value='completedFilterEnabled'
											/>
										}
									/>
								</Badge>
								<Grid
									component='label'
									container
									alignItems='center'
								>
									<Grid item>hide</Grid>
									<Grid item>
										<Switch
											checked={completedFilter}
											onChange={handleChange(
												'completedFilter'
											)}
											value='completed'
											disabled={
												!filterOn ||
												!completedFilterEnabled
											}
										/>
									</Grid>
									<Grid item>show</Grid>
								</Grid>
							</Grid>
							<Grid item xs={4}>
								<Badge
									color='secondary'
									badgeContent={expiredCount}
								>
									<FormControlLabel
										value='Expired'
										label='Expired'
										labelPlacement='top'
										control={
											<Switch
												checked={expiredFilterEnabled}
												onChange={handleChange(
													'expiredFilterEnabled'
												)}
												value='expiredFilterEnabled'
											/>
										}
									/>
								</Badge>
								<Grid
									component='label'
									container
									alignItems='center'
								>
									<Grid item>hide</Grid>
									<Grid item>
										<Switch
											checked={expiredFilter}
											onChange={handleChange(
												'expiredFilter'
											)}
											value='expiredFilter'
											disabled={
												!filterOn ||
												!expiredFilterEnabled
											}
										/>
									</Grid>
									<Grid item>show</Grid>
								</Grid>
							</Grid>
						</Grid>
					}
				/>
			</Grid>
		</Grid>
	);
};

export default Filter;
