// @flow
export type FilterIsActive = boolean;
export type PriorityFilterStatus = boolean;
export type PriorityFilterValues = 'low' | 'normal' | 'high';
export type PriorityFilterValue = Array<PriorityFilterValues>;
export type CompletedFilterStatus = boolean;
export type Completed = boolean;
export type ExpiredFilterStatus = boolean;
export type Expired = boolean;

export type FilterState = {
	filterIsActive: FilterIsActive,
	priorityFilterStatus: PriorityFilterStatus,
	priorityFilterValue: PriorityFilterValue,
	completedFilterStatus: CompletedFilterStatus,
	completed: Completed,
	expiredFilterStatus: ExpiredFilterStatus,
	expired: Expired
};

export type FilterAction = 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE';
