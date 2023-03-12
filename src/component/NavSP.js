 import { Box,Flex,Input,Menu,MenuButton,MenuItem ,MenuList,Button,Text,Card,SimpleGrid, Center, IconButton, Avatar, VStack} from '@chakra-ui/react';
 import {UpDownIcon,DragHandleIcon, CloseIcon} from '@chakra-ui/icons'
 import React, { useEffect, useState } from 'react'
import Logo from './logo'
import {DeleteIcon}  from '@chakra-ui/icons'
 import { useDispatch, useSelector } from 'react-redux';
 import { Link } from 'react-router-dom';
 import {REMOVE} from '../redux/actions/action'
 
// import {productSearch} from '../redux/actions/action'


 function NavSP(prop) {
  const username = prop.name;
  // console.log(username);
 
  //  =========== store username ============

  const [userName, setUserName] = useState("");



  const [namePhone, setNamePhone] = useState("");
  //  console.log(namePhone);

  // ==================== to get date for  add to card=============
  const getdata = useSelector((state)=> state.cartreducer.carts);
  // console.log(getdata);

// ====================  code for delet ======================

const dispatch = useDispatch();

const dlt=(id)=>{
  dispatch(REMOVE(id))
}
// ================= search data export ================

// const searchText = useDispatch();

const changHandle=(e)=>{
  setNamePhone(e.target.value)
  // console.log(namePhone)
  prop.onChange(namePhone)
}


// ============== Responsive ================

const [display , changeDisplay] = useState('none')
const [bragButton, changeBragButton] = useState('flex')


useEffect(()=>{
  setUserName(username)
},[])

   return (
      

    <Flex 
      
    minWidth='max-content' 
    alignItems='center' gap='2'  
    border-radius="10%"
    border='1px' 
    borderColor='#0987A0'
    p={2}
    m={1}
    mt={1}
    style={{borderRadius:"1rem"}}
    justifyContent="space-evenly"
    
 >
 <Box p='2'>
    <Logo/>
 </Box>

 
<Flex
display={['none','none','none','Flex',]}
align="center"
justify={'space-around'}
>
 {/* ======================== Search bar =============== */}

 <Input w="80%" placeholder='Search your i-phone'
 type="search"
 value={namePhone}
 onChange={changHandle}
 m="2"
 p='2'
 />

 {/* ==================== filter button=================== */}
 <Menu m='2' p='2' >
  <MenuButton as={Button}   rightIcon={<UpDownIcon />} />
    
   
  <MenuList>
    <MenuItem onClick={()=>{setNamePhone(prop.onChange("mini"))}}> iphone mini series</MenuItem>
    <MenuItem  onClick={()=>{setNamePhone(prop.onChange("pro"))}}>iphone pro max series</MenuItem>
   </MenuList>
</Menu> 


{/* ============== Add to Card  Icon ============= */}
 
  
 <Menu>
  <MenuButton m={2} p={2.5} variant='solid' borderRadius={50} bgColor='blue' color="white">
    <Flex>
  <i class="fa-solid fa-cart-shopping"></i> <Text borderRadius={50}>{getdata.length}</Text>
  </Flex>
  </MenuButton>
  <MenuList>
    <MenuItem>
    <SimpleGrid columns={1} spacing={10}>
    {/* ======================== Using map loop  to show  added items ========  */}
    {
      getdata.length ?
       <> 
       {
       getdata.map((e)=>{
          return(
            
            <Card>
           
            <Flex justifyContent={'space-around'}>
            <Center>
            <Link to={`/detail/${e.id}`}> 
          <img 
          src='https://5.imimg.com/data5/UG/TC/MY-13409402/iphone-8-plus-64gb-28gold-2c-silver-2c-space-grey-29-1000x1000.png'
          style={{width:"70%", height:"70%" }}
           />
           </Link>
           </Center>
            <Center>
            <Text color='blue.600' fontSize='2xl'>
      ₹ {e.price}
      </Text>
            </Center>
            <Center>
            <Link to={`/buyNow`}> 
         <Button m={1}>Buy Now</Button>
         </Link>
        
         <Button m={1} onClick={()=>dlt(e.id)} >Delete <DeleteIcon/></Button>
         
            </Center>
           </Flex> 
       </Card>
          )
        })
    }
       </>
       
         :

      <Text>Card is Empty</Text>
       
      }
   </SimpleGrid>
    </MenuItem>
  </MenuList>
</Menu>
  

        {/* ================ To Show  Username =========

<Box  bg='tomato' w='8%' p={2} color='white'  borderRadius='full'  >
  <Center>
  <Avatar/> <Text>{userName}</Text>

  </Center>
</Box> */}
</Flex>


{/* ================= for Small Screen ============ */}

<Flex
 display={["Flex", "Flex", "Flex","none"]}
 align="center"
  
 >
<IconButton
icon={<DragHandleIcon/>}
isRound="true"
onClick={()=>{ changeDisplay('flex');changeBragButton('none') }}
display={bragButton}
pos="absolute" 
  
 />

<Flex
flexDir="column"
align="center"
display={display}
>
  <VStack>

    <Flex 
    justify='flex-end'>
      <IconButton
      icon={<CloseIcon/>}
      isRound="true"
      mt={2}
      mr={2}
      aria-label='Close Menu'
      size='lg'
      onClick={()=>{ changeDisplay('none');changeBragButton('flex')}}
      pos="absolute" 
      top="4" right="1"
       
      />
    </Flex>
    <Flex>
 {/* ======================== Search bar =============== */}

 <Input w="100%" placeholder='Search your i-phone'
 type="search"
 value={namePhone}
 onChange={changHandle}
 p="2"
 m={2}
 ml={-4}
 />

 {/* ==================== filter button=================== */}
 <Menu
 >
  <MenuButton as={Button}   rightIcon={<UpDownIcon />}
   m='2'
   ml={-1}
  
  >
     
  </MenuButton>
  <MenuList>
    <MenuItem onClick={()=>{setNamePhone(prop.onChange("mini"))}}> iphone mini series</MenuItem>
    <MenuItem  onClick={()=>{setNamePhone(prop.onChange("pro"))}}>iphone pro max series</MenuItem>
   </MenuList>
</Menu> 
</Flex>
</VStack>
</Flex>
 </Flex>






    </Flex>
    )
}

export default NavSP