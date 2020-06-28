// @flow
import moment from "moment";
import type { Status, Todo } from "../types/todo";

const getExpireState = (todo: Todo): Status => {
  let { date, time } = todo;
  if (!date && !time) {
    return "active";
  }
  if (!date) {
    date = moment().format("YYYY-MM-DD");
  }
  if (!time) {
    time = moment().format("HH:mm");
  }
  const now = moment();
  if (moment(`${date} ${time}`).isBefore(now)) {
    return "expired";
  }
  return "active";
};

export default getExpireState;
