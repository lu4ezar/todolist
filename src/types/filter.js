// @flow
export type FilterIsActive = boolean;
export type PriorityFilterStatus = boolean;
export type PriorityFilterValue = Array<string>;
// export type PriorityFilterValue = 'low' | 'normal' | 'high';
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
