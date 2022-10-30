import { TYPES } from "../data/Types";

export const todoReducer = (state, action) => {
  
  switch (action.type) {
    
    case TYPES.ADD:
      //Se comprueba que el name no exista en la lista de tareas
      const repeatedName = state.filter(item => item.name === action.payload.name);
      
      console.log(String(repeatedName));
      
      //Si existe, se retorna el mismo arreglo
      if (String(repeatedName)) return state
      
      //Si no existe, se agrega el valor
      if (!String(repeatedName)) return [...state, action.payload]
    
    default:
      return state
  }
  
}
