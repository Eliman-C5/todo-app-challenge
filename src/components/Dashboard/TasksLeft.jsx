import { TYPES } from '../../data/Types'
import { TaskFilter } from './TaskFilter'

export const TasksLeft = ({todos, todosDispatch}) => {
  return (
    <div className="flex justify-between p-4 md:p-6">
        
        <span className='my-auto font-bold text-[#777a92] text-[14px] md:text-[18px]'>{todos.filter(todo => todo.completed === false).length} items left</span>
        
        <TaskFilter mobile={false} />
          
        <button className='font-bold text-[#777a92] text-[14px] md:text-[18px]' onClick={() => todosDispatch({type: TYPES.CLEAR_COMPLETED_TODOS})}>
          Clear completed
        </button>
          
    </div>
  )
}
