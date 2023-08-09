'use client'
import { FC } from 'react'
import { toast } from 'react-toastify'

const TestToast: FC = () => {
  const onClick = () => {
    toast.error('"Wow so easy!"')
  }
  return (
    <div className="my-3">
      <h3>test toast</h3>
      <button onClick={onClick} className="btn">
        toast
      </button>
    </div>
  )
}
export default TestToast
