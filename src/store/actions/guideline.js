import { ACTIVE_GUIDELINE, DISABLE_GUIDELINE } from './actionTypes'

export const active = guideline => {
  return {
    type: ACTIVE_GUIDELINE,
    payload: guideline
  }
}

export const disable = guideline => {
  return {
    type: DISABLE_GUIDELINE,
    payload: guideline
  }
} 
