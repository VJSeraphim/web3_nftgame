import React from 'react'
import { useNavigate } from 'react-router-dom'

import styles from '../styles'
import { Alert } from '../components'
import { battlegrounds } from '../assets'
import { useGlobalContext } from '../context'

const Battleground = () => {
    const { setShowAlert, showAlert, setBattleGround } = useGlobalContext()
    const navigate = useNavigate()

    const handleBattleGroundChoice = () => {

    }

    return (
        <div className={`${styles.flexCenter} ${styles.battlegroundContainer}`}>
            {showAlert?.status && <Alert type={showAlert.type} message={showAlert.message} />}
            <h1 className={`${styles.headText} text-center`}>
                Choose your
                <span classNAme="text-siteViolet">
                    Battle
                </span>
                Field
            </h1>
            <div className={`${styles.flexCenter} ${styles.battleGroundsWrapper}`}>
                {battlegrounds.map((bg) => (
                    <div
                        key={ground.id}
                        className={`${styles.flexCenter} ${styles.battleGroundCard}`}
                        onClick={() => handleBattleGroundChoice()}
                    >  
                        <img 
                            src={ground.image}
                            alt="field"
                            className={styles.battleGroundCardImg}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Battleground