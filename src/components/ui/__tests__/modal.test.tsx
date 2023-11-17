/** @jest-environment jsdom */
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Modal from '../modal'

afterEach(cleanup)

describe('Modal Component', () => {
  it('renders the modal when open is true', () => {
    const { getByText } = render(
      <Modal open={true} onClose={() => {}}>
        Modal Content
      </Modal>
    )
    const modalElement = getByText('Modal Content')

    expect(modalElement).toBeInTheDocument()
  })

  it('does not render the modal when open is false', () => {
    const { queryByText } = render(
      <Modal open={false} onClose={() => {}}>
        Modal Content
      </Modal>
    )
    const modalElement = queryByText('Modal Content')

    expect(modalElement).toBeNull()
  })

  it('renders a title when provided', () => {
    const { getByText } = render(
      <Modal open={true} onClose={() => {}} title="Modal Title">
        Modal Content
      </Modal>
    )
    const titleElement = getByText('Modal Title')

    expect(titleElement).toBeInTheDocument()
  })

  //   it('closes the modal when clicking outside if disableClickOutside is false', () => {
  //     const { container, getByText } = render(
  //       <div>
  //         <ParentComponent />
  //       </div>
  //     )
  //     // const modalElement = container.querySelector('.modal')

  //     // Simulate a click outside the modal content but within the document
  //     fireEvent.click(document.documentElement)
  //     const modalElement = getByText('Modal Content')
  //     // const modalElement = within(screen.getByTestId('modal'))
  //     // const modalElement = screen.getByTestId('modal')

  //     // expect(modalElement).not.toBeInTheDocument()
  //     // fireEvent.click(window)
  //     // expect(screen.queryByText(/Modal Content/i)).not.toBeInTheDocument()

  //     // Expect the modal to close (i.e., be removed from the document)
  //     expect(modalElement).toBeNull()
  //     // expect(modalElement).not.toBeInTheDocument()
  //   })
})

// const ParentComponent = () => {
//   const [open, setOpen] = React.useState(true)

//   const handleClose = () => {
//     setOpen(false)
//   }

//   return (
//     <Modal open={open} onClose={handleClose} disableClickOutside={false}>
//       Modal Content
//     </Modal>
//   )
// }
