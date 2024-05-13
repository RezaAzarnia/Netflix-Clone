import { Modal, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react'
import VideoPalyer from '../VideoPalyer/VideoPalyer'

// eslint-disable-next-line react/prop-types
const VideoModal = ({ isOpen, onClose, id }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size={"3xl"} isCentered>
            <ModalOverlay
                bg='blackAlpha.300'
                backdropFilter='blur(10px)'
            />
            <ModalContent>
                <ModalCloseButton />
                <VideoPalyer id={id} />
            </ModalContent>
        </Modal>
    )
}
export default VideoModal