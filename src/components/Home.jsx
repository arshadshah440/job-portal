import React from 'react';
import Hero from './home/Hero';
import JobList from './home/JobList';

const Home = () => {
  return (
    <>
        <Hero title='Become a React Developer' subtitle='Find the React job that fits your skills and needs' />
        <JobList />
    </>
  )
}

export default Home