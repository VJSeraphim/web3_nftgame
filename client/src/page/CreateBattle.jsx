import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../styles';
import { useGlobalContext } from '../context';
import { CustomButton, CustomInput, GameLoad, PageHOC } from '../components';

const CreateBattle = () => {
  const { contract, battleName, setBattleName, gameData } = useGlobalContext()
  const navigate = useNavigate()
  const [waitBattle, setWaitBattle] = useState(false)

  useEffect(() => {
    if(gameData?.activeBattle?.battleStatus === 0) {
      setWaitBattle(true)
    }
  }, [gameData])
  

  const handleClick = async () => {
    if(!battleName || !battleName.trim()) return null

    try {
      await contract.createBattle(battleName)
      setWaitBattle(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {waitBattle && <GameLoad />}
      <div className="flex flex-col mb-5">
        <CustomInput 
          label="Battle"
          placeholder="Enter Battle Arena Name"
          value={battleName}
          handleValueChange={setBattleName}
        />
        <CustomButton 
          title="Create Battle"
          handleClick={handleClick}
          restStyles="mt-6"
        />

        <p className={styles.infoText} onClick={() => navigate('join-battle')}>
          Or Join existing Battle Arena around you.
        </p>
      </div>
    </>
  )
};

export default PageHOC (
  CreateBattle,
  <>
    Create <br /> a New Battle
  </>,
  <>
    Create your own battle field <br /> and wait for your opponent to fight
  </>
)