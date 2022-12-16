import ReactToolTip from 'react-tooltip'

import styles from '../styles'

const healthPoints = 30

const healthLevel = (points) => (points >= 20 ? 'bg-green-500' : points >= 10 ? 'bg-orange-500' : 'bg-red-500')
const marginIndexing = (i) => i !== healthPoints - 1 ? 'mr-1' : 'mr-0'

const PlayerInfo = ({ player, playerIcon, mt}) => {
    return (
        <div className={`${styles.flexCenter} ${mt ? 'mt-4' : 'mb-4'}`}>
            <img 
                data-for={`Player-${mt ? '1' : '2'}`}
                data-tip
                src={playerIcon}
                alt="player2"
                className="w-14 h-14 object-contain rounded-full"
            />

            <div
                data-for={`Health-${mt ? '1' : '2'}`}
                data-tip={`Health: ${player?.health}`}
                className={styles.playerHealth}
            >
                {[...Array(player.health).keys()].map((item, i) => (
                    <div 
                        key={`player-item-${item}`}
                        className={`${styles.playerHealthBar} ${healthLevel(player.health)} ${marginIndexing(i)}`}
                    />
                ))}
            </div>
            <div
                data-for={`Mana-${mt ? '1' : '2'}`}
                data-tip="Mana"
                className={`${styles.flexCenter} ${styles.glassEffect} ${styles.playerMana}`}
            >
                {player.mana || 0}
            </div>
        </div>
    )
}

export default PlayerInfo