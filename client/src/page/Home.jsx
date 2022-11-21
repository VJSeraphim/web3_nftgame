import React from 'react';

import { PageHOC } from '../components';

const Home = () => {
  return (
    <div>
      
    </div>
  )
};

export default PageHOC(
  Home,
  <>
    Welcome to Avax Gods <br/>
    a Web3 NFT Card Game
  </>,
  <>
    Connect Your Wallet to start playing <br />
    your first Web3 Card Battle Game!
  </>
)