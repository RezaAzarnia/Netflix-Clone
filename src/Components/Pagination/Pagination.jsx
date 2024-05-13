import { Button, Flex, Text } from '@chakra-ui/react'
import propTypes from 'prop-types'

const Pagination = ({ page, totalpage, setPage }) => {
    return (
        <>
            <Flex alignItems={"center"} gap={3} mt={3}>
                <Button onClick={() => setPage(prev => prev - 1)} isDisabled={page === 1}>prev</Button>
                <Button onClick={() => setPage(prev => prev + 1)} isDisabled={page === totalpage}>next</Button>
                <Text>{page} of {totalpage}</Text>

            </Flex>
        </>
    )
}

Pagination.propTypes = {
    page: propTypes.number.isRequired,
    totalpage: propTypes.number.isRequired,
    setPage: propTypes.func.isRequired
}

export default Pagination