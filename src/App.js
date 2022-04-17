import React, {useState, useEffect} from 'react'; 
import axios from 'axios';
import Repo from './components/screens/Repo' 
import Pagination from './components/screens/Pagination' 
import './App.css'

function App() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [repoPerPage] = useState(5)

    useEffect(() =>{
      const fetchRepos = async () =>{
        setLoading(true);
        const res = await axios.get('https://api.github.com/search/repositories?q=language:Javascript&sort=stars&order=desc &page=1&per_page=10')
        setRepos(res.data.items);
        setLoading(false)
      }

      fetchRepos();

  }, []);

  //Get current repos
  const indexOfLastRepo = currentPage * repoPerPage;
  const indexOfFirstRepo = indexOfLastRepo - repoPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo)

  //Change page
  const paginate = (pageNumber) => {
    if(pageNumber > 0 && pageNumber <= Math.ceil(repos.length / repoPerPage)){
      setCurrentPage(pageNumber);
    }
    else{
      if(pageNumber < 1){
        setCurrentPage(1);
      }
      else{
        setCurrentPage(Math.ceil(repos.length / repoPerPage))
      }
      
    }
    
  }
  
  return (
    <>
      <Repo repos={currentRepos} loading={loading} />
      <Pagination reposPerPage={repoPerPage} totalRepos={repos.length} paginate={paginate} currentPage={currentPage} />
    </>
  );

}

export default App;