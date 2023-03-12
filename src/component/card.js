import React from 'react'
 import{Card,CardBody,Image,Stack,Text,Divider,CardFooter,ButtonGroup,Button,Heading, Flex, Center}from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';
import { Link } from 'react-router-dom';
 
 
 function Cards(phone) {
  
  // ================ initialize of  prop ==============
  const Data = phone.data
  // console.log(Data.img);

  //  ================== code for sending data  to store in redux ========
   const dispatch = useDispatch();

  const send  =(e)=>{
     console.log(e)
     dispatch(ADD(e));
  }
    
  return (
    
    <Card maxW='sm' m={5} 
    p='2'
    bgColor= "rgb(137,138,143)"
    className='card'
    minW={'300px'}
     
    >
  <CardBody
  
  >
    <Center>
    <Image
      src= {Data.img}
      alt= {Data.name}
      borderRadius='lg'
      maxH='150px'
    />
    </Center>
    <Stack p="2" mt='6' spacing='3'>
      <Heading size='md'>
        {Data.name}
      </Heading>
      <Text color="#4A5568">
         <ul>
          <li>{Data.Rom} Rom</li>
          <li>{Data.screen}</li>
          <li>{Data.camera}</li>

         </ul>
      </Text>
      <Flex justifyContent={'space-between'}>
      <Text color='blue.600' fontSize='2xl'>
      ₹ {Data.price}
      </Text>
       <Text m={2} bg="rgb(69,164,45)" borderRadius="10" p={1}>{Data.rating} ★</Text>   
      </Flex>
       
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
      <Link to={`/buyNow`}> 
        Buy now
        </Link>
      </Button>
      {/* =============  add to card  function initialize======== */}
      <Button variant='ghost' colorScheme='blue'
      onClick={()=> send(Data)}
      >
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default Cards