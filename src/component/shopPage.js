import React, { useState,useEffect } from 'react'
import Data from './Data'
import { useParams } from 'react-router-dom'
import NavSP from './NavSP'
import Card from './card'
import {Flex, SimpleGrid, Box,IconButton,Button} from '@chakra-ui/react'; 
import { ArrowLeftIcon ,  ArrowRightIcon} from '@chakra-ui/icons'
 

 function ShopPage() {

  const {id} = useParams();
  //  console.log(id);

const [dataDir, setdataDir] = useState(Data);
// console.log(dataDir, "2nd");

const [data, setData] = useState([]);    // to take data from  api 
// console.log(dataDir, "2nd");

 const [textSearch, setTextSearch] = useState("")
 
const searchData = (searchText)=>{
  setTextSearch(searchText.toLowerCase()) ;
   // console.log(textSearch);
  if(textSearch.length <= 0 ||textSearch == "" ){
     setData(dataDir)
    // console.log(data , "1st");
  }else{
     
    let storeData = dataDir.filter((element, k)=>{
        return element.name.includes(textSearch);
    });
    setData(storeData);
    
    // console.log(storeData, "3rd")
    // console.log(data, "2nd");
  } 
}
  // console.log(data);
  // =============== for Carousel Effect logic========
 
  let box = document.querySelector(".caro-Effect");
const preBtn =()=>{
   let width = box.clientWidth;
   box.scrollLeft = box.scrollLeft - width;
   console.log(width)

}
const nextBtn =()=>{
  let width = box.clientWidth;
  box.scrollLeft = box.scrollLeft + width;
}

 useEffect(() => {
     setData(dataDir)
},[])
 
 
   return (
    <div className='Hover'>
        <NavSP name={id}  onChange={searchData}  />

        {/* ================ Carousel Effect======== */}

<Box>
  <Flex
  align={'center'}
  justify='center'
  
  >

  <Button 
   borderRadius={'full'}   size='md'
   onClick={preBtn}
   
   >
  <IconButton aria-label='Search database'
  icon={<ArrowLeftIcon />}
  borderRadius='full' />
  </Button>

 

    <SimpleGrid 
          minChildWidth='350px'
           spacing={10} 
           display='flex'
          //  overflowX='hidden'
           className='caro-Effect'
           p={5}
           m={5}
           scrollBehavior='smooth'
            >
         
        {
          data.map((phone, index)=>{
            console.log(index)
            return(
               
              <Card data={phone}/>

            )
          })
        }
        
        </SimpleGrid>

        <Button  
  borderRadius={'full'}   size='md'
  onClick={nextBtn}
  variant='ghost'
    >
  <IconButton aria-label='Search database' 
  icon={<ArrowRightIcon />} 
  borderRadius='full'/>
  </Button>


        </Flex>
</Box>
     
         <SimpleGrid 
          minChildWidth='350px'
           spacing={4} 
            >
         
        {
          data.map((phone, index)=>{
            console.log(index)
            return(
               
              <Card data={phone}/>

            )
          })
        }
        
        </SimpleGrid>
         
         
    </div>
  )
}

export default ShopPage