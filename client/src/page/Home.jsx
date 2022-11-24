import React from 'react';

import { PageHOC, CustomInput } from '../components';
import { useGlobalContext } from '../context';

const Home = () => {
  const { contract, walletAddress } = useGlobalContext()

  return (
    <div className="flex flex-col">
      <CustomInput 
      
      />
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