
import { Box, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Package } from 'src/API';
import TripsPackage from './TripsPackage';
import styles from "./TripsPaginator.module.css"
interface PackageProps {
    data: Package[]
    activities_data: any,
    fetchData: Function
}


const TripsPaginator: React.FC<PackageProps> = ({ data, activities_data, fetchData }) => {


    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 4;
    const endOffset = itemOffset + itemsPerPage;

    const currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / itemsPerPage);
    console.log(pageCount);
    // Invoke when user click to request another page.
    const handlePageClick = async (event) => {

        const newOffset = (event.selected * itemsPerPage) % data.length;
        console.log("pagecount", pageCount)
        console.log(event.selected)
        console.log(newOffset)
        setItemOffset(newOffset);
        if (pageCount == event.selected + 1) {

            await fetchData();
        }

    };

    return (
        <>
            <TripsPackage data={currentItems} activities_data={activities_data}></TripsPackage>
            <Box textAlign={"center"} pt={5}>
                <ReactPaginate

                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={itemsPerPage}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    containerClassName={styles.pagination}
                    previousLinkClassName={styles.pagination__link}
                    nextLinkClassName={styles.pagination__link}
                    disabledClassName={styles["pagination__link--disabled"]}
                    activeClassName={styles["pagination__link--active"]}
                />
            </Box>
        </>
    );
}

export default TripsPaginator;