import { Box, Button, Heading, HStack, List, ListIcon, ListItem, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { ReactNode } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { getOptions } from "../ajax/get-options";

function PriceWrapper({ children }: { children: ReactNode }) {
    return (
        <Box
            mb={4}
            shadow="base"
            borderWidth="1px"
            alignSelf={{ base: 'center', lg: 'flex-start' }}
            borderColor={useColorModeValue('gray.200', 'gray.500')}
            borderRadius={'xl'}>
            {children}
        </Box>
    );
}

type Options = {
    name: string,
    price: string,
    features: string[]
}[]



export function SalesOptions({
    title,
    description
}: { title: string, description: string }) {
    const colorMode = useColorModeValue('gray.50', 'gray.700');
    const { isLoading, isError, data } = useQuery(['options'], getOptions);
    if (isError) return <div>Unable to load sales options. Whoops!</div>
    if (isLoading || !data) return <div></div>;
    const options = data.data as Options;
    return (
        <Box py={12}>
            <VStack spacing={2} textAlign="center">
                <Heading as="h1" fontSize="4xl">
                    {title}
                </Heading>
                <Text fontSize="lg" color={'gray.500'}>
                    {description}
                </Text>
            </VStack>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                textAlign="center"
                justify="center"
                spacing={{ base: 4, lg: 10 }}
                py={10}>
                {options.map(option => {
                    return (
                        <PriceWrapper>
                            <Box py={4} px={12}>
                                <Text fontWeight="500" fontSize="2xl">
                                    {option.name}
                                </Text>
                                <HStack justifyContent="center">
                                    <Text fontSize="3xl" fontWeight="600">
                                        $
                                    </Text>
                                    <Text fontSize="5xl" fontWeight="900">
                                        {option.price}
                                    </Text>
                                    <Text fontSize="3xl" color="gray.500">
                                        /month
                                    </Text>
                                </HStack>
                            </Box>
                            <VStack
                                bg={colorMode}
                                py={4}
                                borderBottomRadius={'xl'}>
                                <List spacing={3} textAlign="start" px={12}>
                                    {option.features.map(feature => {
                                        return (
                                            <ListItem>
                                                <ListIcon as={FaCheckCircle} color="green.500" />
                                                {feature}
                                            </ListItem>
                                        )
                                    })}
                                </List>
                                <Box w="80%" pt={7}>
                                    <Button w="full" colorScheme="red" variant="outline">
                                        Start trial
                                    </Button>
                                </Box>
                            </VStack>
                        </PriceWrapper>
                    )
                })}
            </Stack>
        </Box>
    )
}