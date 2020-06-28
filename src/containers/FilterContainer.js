// @flow
import { connect } from "react-redux";
import Filter from "../elements/Filter";
import setFilter from "../redux/actions/filter";
import type { Dispatch, State } from "../types";
import { getCompletedCount, getExpiredCount } from "../redux/selectors";

const mapStateToProps = (state: State) => ({
  filter: state.filter,
  completedCount: getCompletedCount(state),
  expiredCount: getExpiredCount(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setFilter: (payload) => dispatch(setFilter(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
