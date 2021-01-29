// @flow
import * as React from "react";
import { filterVar } from "../apollo/cache";
import { useGetCompletedCount, useGetExpiredCount } from "../apollo/hooks";
import Filter from "../components/Filter";

export default (): React.Node => {
  const completedCount = useGetCompletedCount();
  const expiredCount = useGetExpiredCount();
  const filter = filterVar();

  const handleChange = (filterName: FilterName) => (
    event: SyntheticInputEvent<HTMLInputElement>
  ) => {
    // MUI Select does not have currentTarget
    const target: HTMLInputElement = event.target.type
      ? event.currentTarget
      : event.target;
    const value: FilterValue =
      target.type === "checkbox"
        ? (target.checked:
            | FilterStatus
            | CompletedFilterValue
            | ExpiredFilterValue)
        : // $FlowFixMe
          (target.value: PriorityFilterValue);
    const { name } = target;

    filterVar({
      filter: filterName,
      // $FlowFixMe
      property: name,
      value,
    });
  };
  return (
    <Filter
      filter={filter}
      handleChange={handleChange}
      completedCount={completedCount}
      expiredCount={expiredCount}
    />
  );
};
