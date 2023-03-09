import React, { useState } from 'react'
import {
  Box,
  Flex,
  Heading,
  Input,
  Grid,
  Center,
  InputGroup,
  InputRightElement,
  Spacer,
  Icon,
  Select,
  Tooltip
} from '@chakra-ui/react'
import { BiSearch } from 'react-icons/bi'
import { HiArrowsUpDown } from 'react-icons/hi2'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/pagination'
import 'swiper/css/grid'

import { PackageCard } from '@components/index'
import type { Trip } from '@utils/types'

interface PackageProps {
  data: Trip[]
}

const Packages: React.FC<PackageProps> = ({ data }) => {
  const [sort, setSort] = useState(1)
  const allParams = ['cost', 'location', 'description', 'activities']
  const [search, setSearch] = useState('')
  const [searchParam, setSearchParam] = useState(allParams)
  function compare(a, b) {
    if (a.cost > b.cost) return sort
    if (b.cost > a.cost) return -1 * sort

    return 0
  }
  data.sort(compare)
  data = data.filter(item => {
    return searchParam.some(newItem => {
      return (
        item[newItem].toString().toLowerCase().indexOf(search.toLowerCase()) >
        -1
      )
    })
  })

  return (
    <Box w="100%" mt={12}>
      <Flex direction={{ base: 'column', md: 'row' }} alignItems="center">
        <Heading
          w="100%"
          as="h1"
          my={8}
          fontSize={{ base: '42px', md: '60px' }}
          color="#125C13"
          textAlign={{ base: 'left', lg: 'left' }}
        >
          Packages
        </Heading>
        <Spacer />

        <Flex
          direction="row"
          gap={3}
          w={{ base: '100%', md: '80%', lg: '50%' }}
        >
          <Tooltip label="Sort" cursor="pointer">
            <Box as="button" mx={6} onClick={() => setSort(-sort)}>
              <HiArrowsUpDown size={35} />
            </Box>
          </Tooltip>
          <InputGroup>
            <Input
              placeholder="Search"
              variant="flushed"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <InputRightElement>
              <BiSearch />
            </InputRightElement>
          </InputGroup>
          <Select
            onChange={e => {
              setSearchParam([e.target.value])
            }}
            className="custom-select"
            aria-label="Filter Countries By Region"
          >
            <option value={allParams}>All</option>
            <option value="cost">Cost</option>
            <option value="location">Location</option>
            <option value="activities">Activities</option>
            <option value="description">Description</option>
          </Select>
        </Flex>
      </Flex>

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
            px={3}
          >
            {data.map(data => (
              <PackageCard key={data.id} data={data} />
            ))}
          </Grid>
        </Flex>
      </Box>
    </Box>
  )
}

export default Packages
