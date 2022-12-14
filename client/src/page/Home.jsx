import React, { useState, useEffect } from 'react';

import { useGlobalContext } from '../context';
import { PageHOC, CustomInput, CustomButton } from '../components';
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  const { contract, walletAddress, setShowAlert } = useGlobalContext()
  const [playerName, setPlayerName] = useState('')

  const handleClick = async () => {
    try {
      const playerExists = await contract.isPlayer(walletAddress)
      if(!playerExists) {
        await contract.registerPlayer(playerName, playerName)
        setShowAlert({
          status: true, type: 'info', message: `${playerName} is being Summoned..`
        })
      }
    } catch (error) {
      setShowAlert({
        status: true, type: 'failure', message: "Oops... Something Went Wrong!"
      })
    }
  }

  useEffect(() => {
    const checkForPlayerToken = async () => {
      const playerExists = await contract.isPlayer(walletAddress)
      const playerTokenExists = await contract.isPlayerToken(walletAddress)

      if(playerExists && playerTokenExists) {
        navigate('/create-battle')
      }
    }

    if(contract) checkForPlayerToken()
  }, [contract])
  

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