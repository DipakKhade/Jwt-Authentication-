
import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import MaxWidthWrapper from "./components/MaxWidthWrapper"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";



function App() {
  const navigate = useNavigate();
  // varifying the session
useEffect(()=>{
 (async()=>{
  const localtoken=localStorage.getItem('token')  || ''
  const res =await fetch('http://localhost:3000/verifytoken',{
    method:"GET",
    headers:{
      authentication:localtoken
    }
  })
  const responce=await res.json()
  console.log(responce)

  if(responce.status==='success'){
    return ;

  }
  else{
    navigate("/");
  }

 })();
},[])



  return (
  <>
  <MaxWidthWrapper>
  <Navbar/>
  
<Hero/>
</MaxWidthWrapper>
  </>
  )
}

export default App
