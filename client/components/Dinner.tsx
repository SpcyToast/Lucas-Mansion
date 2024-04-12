import { useEffect, useState } from 'react'
import Jigsaw from './GamePopups/Jigsaw'
import Matching from './GamePopups/Matching'
import MatchingExample from './GamePopups/MatchingExample'
import Clock from './GamePopups/Clock'
import '../styles/popup.css'
import CombinationLock from './GamePopups/CombinationLock'
import '../styles/main.css'
// import '../../public/dinner-images/lucas-image.png'

export default function Dinner() {
  const [jigsaw, setJigsaw] = useState(false)
  const [matching, setMatching] = useState(false)
  const [matchingWin, setMatchingWin] = useState(false)
  const [matchingE, setMatchingE] = useState(false)
  const [clock, setClock] = useState(false)
  const [lockNum, setLockNum] = useState(false)
  const [block, setBlock] = useState(true)

  useEffect(() => {
    if (!jigsaw && !matchingE && !matching && !clock && !lockNum) {
      setBlock(false)
    } else {
      setBlock(true)
    }
    console.log(block, jigsaw)
  }, [jigsaw, matching, matchingE, clock, lockNum, block])

  return (
    <>
      {jigsaw && (
        <div className="popup-overlay">
          <div className="game-popup">
            <Jigsaw setJigsaw={setJigsaw} />
          </div>
        </div>
      )}
      <div className="jigdiv">
        <img
          className={block ? 'block' : 'frame'}
          src="../../public/dinner-images/lucas-map.png"
          alt="frame with map"
          onClick={() => setJigsaw(true)}
        />
      </div>

      {lockNum && (
        <div className="popup-overlay">
          <div className="game-popup">
            <CombinationLock setLockNum={setLockNum} />
          </div>
        </div>
      )}
      <div>
        <button className="button" onClick={() => setLockNum(true)}>
          <img
            className="lock"
            src="../../public/dinner-images/door-handle.png"
            alt="frame with map"
          />
        </button>
      </div>
      {matching && (
        <div className="popup-overlay">
          <div className="game-popup">
            <Matching
              setMatching={setMatching}
              win={matchingWin}
              setWin={setMatchingWin}
            />
          </div>
        </div>
      )}

      <div>
        <button onClick={() => setMatching(true)}>match-up GAME</button>
      </div>
      {matchingE && (
        <div className="popup-overlay">
          <div className="game-popup">
            <MatchingExample setMatchingE={setMatchingE} />
          </div>
        </div>
      )}
      {/* <button onClick={() => setMatchingE(true)}>match-up Example</button> */}

      {clock && (
        <div className="popup-overlay">
          <div className="game-popup">
            <Clock setClock={setClock} />
          </div>
        </div>
      )}
      {/* <button onClick={() => setClock(true)}>Clock Inside</button> */}
    </>
  )
}
