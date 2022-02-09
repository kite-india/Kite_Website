import { Avatar, Button, MenuButton } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'

const Container = styled.div`
  height: 50px;
  padding-top: 16px;
`
const Wrapper = styled.div`
  height: 50px;
  padding: 10px 20px;
  display: flex;
  align-items: center;

  justify-content: space-between;
`
const Left = styled.div`
  height: 50px;
  flex: 2;
  text-align: center;
  background-color: #fffdfd;
`
const Logo = styled.h1`
  color: #8fb339;
  font-size: 24px;
  /* padding-top: 16px; */
  font-weight: bold;
`
const Right = styled.div`
  padding-right: 150px;
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #fffdfd; ;
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`
const BookButton = styled.button`
  border-radius:20px;
  margin: 0px 10px;
  font-size: 12px;
  padding: 3px 5px;
  background-color: #3E7C17;
  color: #FFFDFD;
`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Kite India</Logo>
        </Left>
        <Right>
          <MenuItem>Home</MenuItem>
          <MenuItem>Trips</MenuItem>
          <MenuItem>Gallery</MenuItem>
          <MenuItem>Contact Us</MenuItem>
          <MenuItem>
            <Avatar size={'xs'} src={'/'} />
          </MenuItem>
          <BookButton>Book now</BookButton>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
