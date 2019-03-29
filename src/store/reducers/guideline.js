import { ACTIVE_GUIDELINE, DISABLE_GUIDELINE } from "../actions/actionTypes";

const initialState = {
  id: null,
  title: null,
  description: null,
  detail: null
}

const guidelineReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_GUIDELINE:
      let guideline = action.payload
      return {
        ...state,
        id: guideline.id,
        title: guideline.title,
        description: guideline.description,
        detail: guideline.detail
      }
    case DISABLE_GUIDELINE:
      return {
        ...state,
        id: guideline.id,
        title: guideline.title,
        description: guideline.description,
        detail: guideline.detail
      }
    default:
      return state
  }
}

export default guidelineReducer;
