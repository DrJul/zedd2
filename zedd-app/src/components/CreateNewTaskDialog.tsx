import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import Button from '@mui/material/Button'
import * as React from 'react'

import { AppState } from '../AppState'
import { ClarityState } from '../ClarityState'

export const CreateNewTaskDialog = ({
  state,
  onClose,
}: {
  // slice: TimeSlice
  // done: (newTask: Task | string) => void
  state: AppState
  // getTasksForSearchString: (ss: string) => Promise<Task[]>
  clarityState: ClarityState
  onClose: () => void
}) => {
  console.log('aaa')

  return (
    <Dialog open={true} aria-labelledby='form-dialog-title' maxWidth='lg' fullWidth>
      <DialogTitle id='form-dialog-title'>{`Create new Task `}</DialogTitle>
      <form>
        <DialogContent>
          {/* <TaskEditor
            clarityState={clarityState}
            value={newTask}
            state={state}
            onTaskSelectChange={setNewTask}
            getTasksForSearchString={getTasksForSearchString}
          /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color='primary'>
            Cancel
          </Button>
          <Button type='submit' color='primary'>
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
