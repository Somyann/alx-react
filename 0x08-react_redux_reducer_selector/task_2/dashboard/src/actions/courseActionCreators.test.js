import { selectCourse,unselectcource } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe("courseActionCreators", () => {
  it ('should return the correct action for selectCourse', () => {
    const result = selectCourse(1);
    expect(result).toEqual({ type: SELECT_COURSE, index: 1 });
  }
  );
  it ('should return the correct action for unselectCourse', () => {
    const result = unselectcource(1);
    expect(result).toEqual({ type: UNSELECT_COURSE, index: 1 });
  }
  );
});
