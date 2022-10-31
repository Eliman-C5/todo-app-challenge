import { TYPES } from "../data/Types";

export const todoReducer = (state, action) => {
  
  switch (action.type) {
    
    case TYPES.ADD:
      //Se comprueba que el name no exista en la lista de tareas
      const isNameRepeat = state.filter(item => item.name === action.payload.name);
      
      console.log(String(isNameRepeat));
      
      //Si existe, se retorna el mismo arreglo
      if (String(isNameRepeat)) return state
      
      //Si no existe, se agrega el valor
      if (!String(isNameRepeat)) return [...state, action.payload]
      
    case TYPES.COMPLETED:
      
      return state.map(item => item.id === action.payload.id? action.payload : item);
      
    case TYPES.DELETE:
    
      return state.filter(item => item.id !== action.payload)
    
    default:
      return state
  }
  
}
