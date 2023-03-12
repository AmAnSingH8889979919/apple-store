import React, { useState } from 'react';
import { Flex,Stack,Box,FormControl,InputGroup,InputLeftElement
 ,Input,Button,chakra

} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { FaUserAlt, FaEdit } from "react-icons/fa";
 
import Logo from './logo'

const CFaUserAlt = chakra(FaUserAlt);
const CMobile = chakra(FaEdit);

function LoginFrom() {

  
    const [name ,setName] = useState("");
    const [num , setNum] = useState("");

    function nameHandle (){
   var getName = document.getElementById('nameInput').value;
    //  console.log(getName);
    setName(getName);
    }
    function numHandle(){
var getNum = document.getElementById('numInput').value;
    //  console.log(getNum);
setNum(getNum);
}
    function submit(event){
    //  console.log(name + num);
     event.preventDefault();
    }


  return (
    <Box>
   <Flex
   flexDirection="column"
   width="100wh"
   height="100vh"
   backgroundColor="gray.200"
   justifyContent="center"
   alignItems="center"
 >
   {/* ------------------logo -----------*/}
      <Stack
       flexDir="column"
       mb="2"
       justifyContent="center"
       alignItems="center"
     >
         <Logo/>

         <Box minW={{ base: "90%", md: "468px" }}>
         <form>
         
         <Stack
             spacing={4}
             p="1rem"
             backgroundColor="whiteAlpha.900"
             boxShadow="md"
             br="5"
           >
            
              <FormControl>
               <InputGroup mb="2" >
                 <InputLeftElement
                   pointerEvents="none"
                   children={<CFaUserAlt color="gray.300"   />}
                 />

                 {/* ============= Name Input ================= */}
                 <Input   type="name" placeholder="Enter Your Name" 
                 onChange={nameHandle}
                 id="nameInput"
                 required
                 />
                 
               </InputGroup>
               <InputGroup  >
                 <InputLeftElement
                  
                   pointerEvents="none"
                   children={<CMobile color="gray.300" />}
                 />
             {/* ============= Number Input ================= */}

                 <Input type="number" placeholder="Enter Your Number"
                 onChange={numHandle}
                 id="numInput"
                 required
                  />
                 
               </InputGroup>
             </FormControl>
             
             <Button
               borderRadius={5}
               type="submit"
               variant="solid"
               colorScheme="teal"
               width="full"
               onClick={submit}
             >
            <Link to={`/page/${name}`} disable>
               Shop Now
               </Link>
             </Button>
             
    
           </Stack>
            
         </form>
         </Box>
          
     </Stack>

 </Flex>
 </Box>
  )
}

export default LoginFrom

