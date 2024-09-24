import { useReducer } from "react"
import { ActionTypes, themeMutation } from "../store/reducer";


function useMutation(initialState:any)  {
  
  const [thmeState, dispatch] = useReducer(themeMutation.stateReducer, initialState)
  
  const handleThemeMutation = (payload:any | any, type:ActionTypes) => {
    dispatch(
      {
        type:type,
        payload:payload
      }
    )
  };
  return {
    thmeState, handleThemeMutation}
  
}
export default useMutation;