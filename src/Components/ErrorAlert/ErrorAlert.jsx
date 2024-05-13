import { Alert, AlertDescription, AlertIcon, Container } from "@chakra-ui/react"
import propTypes from 'prop-types'
const ErrorAlert = ({ error }) => {
    return (
        <Container maxW={'container.xl'} margin={"auto"} pt={"8rem"}>
            <Alert status='error' color={"white"}>
                <AlertIcon />
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        </Container>)
}
ErrorAlert.propTypes = {
    error: propTypes.string.isRequired,

}
export default ErrorAlert