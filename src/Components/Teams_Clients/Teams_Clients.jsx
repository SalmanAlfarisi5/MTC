import React from 'react'
import Teams from '../../Components/Teams/Teams';
import Clients from '../../Components/Clients/Clients';
import Title from '../../Components/Title/Title';
import Footer from '../../Components/Footer/Footer';

const Teams_Clients = () => {
  return (
    <>
    <Title subTitle="Professional Partners" title="Our Teams" />
    <Teams/>
    <Title  title="Clients" />
    <Clients/>
    <Footer/>
    </>
  )
}

export default Teams_Clients;