import { TYPES } from '../../data/Types'
import { TaskFilter } from './TaskFilter'

export const TasksLeft = ({todos, todosDispatch}) => {
  return (
    <div className="flex justify-between p-6">
        
        <span className='my-auto font-bold text-[#777a92]'>{todos.filter(todo => todo.completed === false).length} items left</span>
        
        <TaskFilter />
          
        <button className='font-bold text-[#777a92]' onClick={() => todosDispatch({type: TYPES.CLEAR_COMPLETED_TODOS})}>
          Clear completed
        </button>
          
    </div>
  )
}
