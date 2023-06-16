import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function BookedModel(props) {
  const router = useRouter()

  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    if (props.booked) {
      onOpen()
    }
  }, [props.booked])

  function redirectAfterBooking() {
    router.push('/transaction')
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mt={'25%'}>
          <ModalHeader>Booking Status</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Successfully Registered the package! Our execute will contact you
            soon!
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={onClose && redirectAfterBooking}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
