import 'react-confirm-alert/src/react-confirm-alert.css'
import { FaTrash } from 'react-icons/fa'

export const Confirm = (action) => {
  return {
    customUI: ({ onClose }) => {
      return (
        <div className='px-5 py-3 shadow-lg text-center text-dark'>
          <h1>Are you sure?</h1>
          <p>You want to delete this?</p>
          <div className='btn-group d-flex justify-content-between'>
            <button className='btn btn-outline-dark btn-sm' onClick={onClose}>
              No
            </button>
            <button
              className='btn btn-outline-danger btn-sm'
              onClick={() => {
                action()
                onClose()
              }}
            >
              <FaTrash className='mb-1' /> Yes
            </button>
          </div>
        </div>
      )
    },
  }
}
