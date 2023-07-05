import { Box, Flex, Grid } from "@chakra-ui/react"
import { Package } from "src/API"
import PackageCard from "./PackageCard"

interface PackageProps {
    data: Package[]
    activities_data: any
}

const TripsPackage: React.FC<PackageProps> = ({ data, activities_data }) => {



    return (

        <Box>
            <Flex
                direction="column"
                mt={5}
                justifyContent="center"
                maxW={{ xl: '1200px' }}
            >
                <Grid
                    w="full"
                    gridTemplateColumns={{
                        sm: 'repeat( auto-fit, minmax(350px, 1fr) )',
                        md: 'repeat( auto-fit, minmax(400px, 1fr) )',
                        lg: 'repeat( auto-fit, minmax(450px, 1fr) )'
                    }}
                    gap={8}
                    px={{ md: 3 }}
                >
                    {data.map(data => (
                        <PackageCard
                            activities_data={activities_data}
                            key={data.id}
                            data={data}
                        />
                    ))}
                </Grid>
            </Flex>
        </Box>

    )




}


export default TripsPackage;