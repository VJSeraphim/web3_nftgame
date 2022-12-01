import React from 'react';

import { useGlobalContext } from '../context';
import { PageHOC } from '../components';

const Home = () => {
  const { demo } = useGlobalContext()

  return (
    <div>
      <h1 className="text-white text-xl">
        Waiting for your Command.
      </h1>
    </div>
  )
};

export default PageHOC (
  Home,
  <>
    Welcome to the Avax Gods <br />a Web3 NFT Card Game
  </>,
  <>
    Connect your wallet to start play <br /> Your First Game
  </>
)