import { useEffect, useState } from 'react'
import { db } from './firebase'
import {getDocs, collection} from 'firebase/firestore'


function App() {
  const [projectList, setProjectList] = useState([])

  const portfolioCollectionRef = collection(db, "projects")

  // const portfolioCollection()
  useEffect(() => {

    const getPortfolioList = async () => {
      // READ DATA
      // SET THE PORTFOLIO LSIT
      try{
        const data = await getDocs(portfolioCollectionRef);
        const filteredData = data.docs.map((doc) => ({...doc.data(), 
          id: doc.id,}))
        console.log(filteredData)
      } catch (err){
        console.error(err)
      }
      
    };
    getPortfolioList();
  }, [])

  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        Hello
      </div>
    </>
  )
}

export default App
