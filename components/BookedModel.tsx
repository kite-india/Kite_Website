import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box
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


      <Modal isOpen={isOpen} onClose={redirectAfterBooking}>
        <ModalOverlay />

        <div >
          <ModalContent mt={330}>
            <Box display={"flex"} flexDirection={"column"} alignItems={"left"} width="100%">
              <Box>
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
              </Box>
            </Box>
          </ModalContent>
        </div>

      </Modal>
    </>
  )
}
