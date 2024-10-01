import { useReducer } from "react"
import { themeReducer } from "../../store/style/reducer/theme/themeReducer";
import { ActionTypes } from "../../store/style/reducer/interfaces";



function useMutation(initialState:any)  {
  
  const [state, dispatch] = useReducer(themeReducer.stateReducer, initialState)
  
  const handleStateMutation = (payload: any, type:ActionTypes) => {
    dispatch(
      {
        type:type,
        payload:payload
      }
    )
  };
  return {state, handleStateMutation}
  
}
export default useMutation;