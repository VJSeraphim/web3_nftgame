import React, { useState } from 'react';

import { PageHOC, CustomInput, CustomButton } from '../components';
import { useGlobalContext } from '../context';

const Home = () => {
  const { contract, walletAddress, setShowAlert } = useGlobalContext()
  const [playerName, setPlayerName] = useState('')

  const handleClick = async() => {
    try {
      const playerExists = await contract.isPlayer(walletAddress)
      if (!playerExists) {
        await contract.registerPlayer(playerName, playerName)
        setShowAlert({
          status: true,
          type: 'info',
          message: `${playerName} is currently Opening Warp Rift...`
        })
      }
    } catch (error) {
      setShowAlert({
        status: true,
        type: 'failure',
        message: "Oops... Something Went Wrong!"
      })
    }
  }

  return (
    <div className="flex flex-col">
      <CustomInput 
        label="Name"
        placeholder="Enter your Player Name"
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