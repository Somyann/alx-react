import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

export const boundSelectCourse = (index) => (dispatch) => {
    dispatch(selectCourse(index));
};

export const boundUnselectCourse = (index) => (dispatch) => {
  dispatch(unselectcource(index));
};

