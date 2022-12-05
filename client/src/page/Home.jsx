import React, { useState } from 'react';

import { useGlobalContext } from '../context';
import { PageHOC, CustomInput, CustomButton } from '../components';

const Home = () => {
  const { contract, walletAddress } = useGlobalContext()
  const [playerName, setPlayerName] = useState('')

  const handleClick = async () => {
    try {
      
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="flex flex-col">
      <CustomInput 
        label="Name"
        placeholder="Enter Your Player Name"
        value={playerName}
        handleValueChange={setPlayerName}
      />
      <CustomButton 
        title="Register"
        handleClick={handleClick}
        restStyles="mt-6"
      />
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