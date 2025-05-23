import React from 'react';
import Hero from '../pagebasedcomponents/Hero';
import JobList from './JobList';

const Home = () => {
  return (
    <>
        <Hero title='Become a React Developer' subtitle='Find the React job that fits your skills and needs' />
        <JobList ishome={true}/>
    </>
  )
}

export default Home