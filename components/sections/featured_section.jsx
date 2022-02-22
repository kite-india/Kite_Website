import { Box } from '@chakra-ui/react'
import FeaturedCard from '../FeaturedCard'

const dummyData = [
  {
    id: 1,
    title: 'Our Himachal adventure blog',
    description:
      'Visiting the Peaks? Want to know the requirements on travelling to Himachal during the pandemic? Our blog might help! ',
    imgUrl: '',
    watchLink: '',
    knowMoreLink: ''
  },
  {
    id: 2,
    title: 'Our Himachal adventure blog',
    description:
      'Visiting the Peaks? Want to know the requirements on travelling to Himachal during the pandemic? Our blog might help! ',
    imgUrl: '',
    watchLink: '',
    knowMoreLink: ''
  },
  {
    id: 3,
    title: 'Our Himachal adventure blog',
    description:
      'Visiting the Peaks? Want to know the requirements on travelling to Himachal during the pandemic? Our blog might help! ',
    imgUrl: '',
    watchLink: '',
    knowMoreLink: ''
  }
]

const FeaturedSection = () => {
  return (
    <Box bg="white">
      {dummyData.map(data => (
        <FeaturedCard key={data.id} data={data} />
      ))}
    </Box>
  )
}

export default FeaturedSection
