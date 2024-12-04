export const FETCH_COURSE_SUCCESS = 'FETCH_COURSE_SUCCESS';
export const SELECT_COURSE = 'SELECT_COURSE';
export const UNSELECT_COURSE = 'UNSELECT_COURSE';



const courseReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return action.data.map((course) => ({ ...course, isSelected: false }));
    

    case SELECT_COURSE:
      return state.map(course => {
        if (course.id === action.index) {
          return { ...course, isSelected: true };
        }
        return { ...course, isSelected: false };
      });
    
    case UNSELECT_COURSE:
      return state.map(course => {
        if (course.id === action.index) {
          return { ...course, isSelected: false };
        }
        return { ...course, isSelected: false };
      });

      default: return state;
  }
};

export default courseReducer;