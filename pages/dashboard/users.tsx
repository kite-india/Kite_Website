import React, { useState } from 'react'
import Layout from '@components/layouts/main'
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Container,
  Image,
  Input,
  Checkbox
} from '@chakra-ui/react'
import SideBar from '@components/dashboardComps/SideBar'
import type { NextPage } from 'next'
import { data } from '@components/dashboardComps/data'

const Users: NextPage = () => {
  return <SideBar data={data}></SideBar>
}

export default Users
