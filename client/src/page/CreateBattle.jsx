import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../styles';
import { useGlobalContext } from '../context';
import { CustomButton, CustomInput, PageHOC } from '../components';

const CreateBattle = () => {
  const { contract, battleName, setBattleName } = useGlobalContext()
  const navigate = useNavigate()

  const handleClick = () => {

  }

  return (
    <>
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