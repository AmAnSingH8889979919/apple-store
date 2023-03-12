import React, { useEffect, useState } from 'react'
import{Card,CardBody,Image,Stack,Text,CardFooter,Button,Heading, Flex}from '@chakra-ui/react';
import NavSP from './NavSP';
 import {DeleteIcon}  from '@chakra-ui/icons'
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {REMOVE} from '../redux/actions/action'



function DetailPage() {

  // ============== to store all details in   data =======
  const [data , setData] = useState([])
   console.log(data);
  // ======================= writing code to get id which  come from add to card ==============
  const {id} = useParams();
  // console.log(id);


  // ========================== to get all details of an iteam which is present in add to card ========
   const getdata = useSelector((state)=> state.cartreducer.carts);
  // console.log(gatdata);


  //  ==========================  to compare selected item (id) and all iteams which is present in add to card ===
  
  const compare =()=>{
    let compareData = getdata.filter((e)=>{
      return (
        e.id == id
      )
    });
    
    // console.log(compareData);
    setData(compareData);
  }

  // ====================  code for delet ======================

const dispatch = useDispatch();

const dlt=(id)=>{
  dispatch(REMOVE(id))
}


  useEffect(()=>{
    compare()
  },[id])

  return (
    <>
    <NavSP/>
    {
     data.map((e)=>{
         return(
          <>
           <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
     m={8}
  >
     <Image
      objectFit='cover'
      maxW={{ base: '100%', sm: '200px' }}
      src={e.img}
      alt='i Phone'
      p={2}
    />
    <Stack>
      <CardBody>
        <Heading size='md'>{e.name}</Heading>
  
        <Text py='2' p={2} m={2}>
           <ul>
            <li> {e.Rom} GB Rom</li>
            <li>{e.camera}</li>
            <li>{e.screen}</li>
            <li>{e.Processor}</li>
            </ul>
        </Text>
      </CardBody>
      <Flex p={2} m={2}>
      <Text color='blue.600' fontSize='2xl' mx={5}>
      ₹ {e.price}   
      </Text>
       <Text m={2} bg="rgb(69,164,45)" borderRadius="10" p={1}>{e.rating}★</Text>   
      </Flex>
            <CardFooter>
        <Flex justifyContent={'space-between'}>
        <Link to={`/buyNow`}> 
        <Button m={2} p={2} variant='solid' colorScheme='blue'>
          Buy Now
        </Button>
        </Link>
        <Link to={`/page/:id`}> 
        <Button m={2} p={2} variant='solid' colorScheme='red' onClick={()=>dlt(e.id)} >
          Delete <DeleteIcon/>
        </Button>
        </Link>
        </Flex>
         
      </CardFooter>
    </Stack>

  </Card>
          </>

         )
     })
 }
     
    </>
  )
}

export default DetailPage

 