import React from 'react'
import Layout from '../Layout/Layout'
import Image1 from '../Images/Image1.jpg'
import  '../Style/Homestyle.css';

const Home = () => {
  return (
    <Layout>
    < div className='home' style={{backgroundImage:`url(${Image1})`}}>
<h1 style={{textAlign:'center', marginBottom:'150px', color:'black',fontSize:'50'}}>Best Food in Town</h1>
    <div className='headerContainer'>
</div>

    </div>

</Layout>
  )
}

export default Home