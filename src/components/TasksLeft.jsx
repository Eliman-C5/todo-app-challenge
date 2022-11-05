import { TYPES } from '../data/Types'
import { TaskFilter } from './TaskFilter'

export const TasksLeft = ({todos, todosDispatch}) => {
  return (
    <div className="flex justify-between p-4">
        
        <span className='my-auto'>{todos.filter(todo => todo.completed === false).length} items left</span>
        
        <TaskFilter />
          
        <button onClick={() => todosDispatch({type: TYPES.CLEAR_COMPLETED_TODOS})}>
          Clear completed
        </button>
          
    </div>
  )
}
