import { useEffect, useState } from 'react'
import Jigsaw from './GamePopups/Jigsaw'
import Matching from './GamePopups/Matching'
import MatchingExample from './GamePopups/MatchingExample'
import Clock from './GamePopups/Clock'
import CombinationLock from './GamePopups/CombinationLock'

//clues:
import ClockFace from './CluePopups/ClockFace'
import Gnome from './CluePopups/Gnome'
import Stool from './CluePopups/Stool'

//style:
import '../styles/popup.css'
import '../styles/main.css'

export default function Dinner() {
  const [block, setBlock] = useState(true)

  //game popups:
  const [jigsaw, setJigsaw] = useState(false)
  const [matching, setMatching] = useState(false)
  const [matchingWin, setMatchingWin] = useState(false)
  const [matchingE, setMatchingE] = useState(false)
  const [lockNum, setLockNum] = useState(false)

  //clue popups:
  const [clockFace, setClockFace] = useState(false)
  const [clock, setClock] = useState(false)
  const [gnome, setGnome] = useState(false)
  const [stool, setStool] = useState(false)

  useEffect(() => {
    if (
      !jigsaw &&
      !matchingE &&
      !matching &&
      !clock &&
      !lockNum &&
      !clockFace &&
      !gnome &&
      !stool
    ) {
      setBlock(false)
    } else {
      setBlock(true)
    }
    console.log(block, matching)
  }, [
    jigsaw,
    matching,
    matchingE,
    clock,
    lockNum,
    block,
    clockFace,
    gnome,
    stool,
  ])

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
        <button className="frame" onClick={() => setJigsaw(true)}>
          <img
            className={block ? 'block' : 'frame'}
            src="../../public/dinner-images/lucas-map2.png"
            alt="frame with map"
          />
        </button>
      </div>

      {lockNum && (
        <div className="popup-overlay">
          <div className="game-popup">
            <CombinationLock setLockNum={setLockNum} />
          </div>
        </div>
      )}
      <div className="lockdiv">
        <button className="lock" onClick={() => setLockNum(true)}>
          <img
            className={block ? 'block' : 'lock'}
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
      <div className="platediv">
        <button className="plateR" onClick={() => setMatching(true)}>
          <img
            // className={block ? 'block' : 'plateR'}
            src="../../public/dinner-images/plate-right.png"
            alt="frame with map"
          />
        </button>
      </div>

      {matchingE && (
        <div className="popup-overlay">
          <div className="game-popup">
            <MatchingExample setMatchingE={setMatchingE} />
          </div>
        </div>
      )}

      <div className="platediv">
        <button className="plateL" onClick={() => setMatchingE(true)}>
          <img
            className={block ? 'block' : 'plateL'}
            src="../../public/dinner-images/plate-left.png"
            alt="frame with map"
          />
        </button>
      </div>

      {clock && (
        <div className="popup-overlay">
          <div className="game-popup">
            <Clock setClock={setClock} />
          </div>
        </div>
      )}
      <div className="clockdiv">
        <button className="clockbod" onClick={() => setClock(true)}>
          <img
            className={block ? 'block' : 'clockbod'}
            src="../../public/dinner-images/clock-body.png"
            alt="frame with map"
          />
        </button>
      </div>

      {clockFace && (
        <div className="popup-overlay">
          <div className="game-popup">
            <ClockFace setClockFace={setClockFace} />
          </div>
        </div>
      )}
      <div className="clockfacediv">
        <button className="clockface" onClick={() => setClockFace(true)}>
          <img
            className={block ? 'block' : 'clockface'}
            src="../../public/dinner-images/clock-face.png"
            alt="frame with map"
          />
        </button>
      </div>

      {gnome && (
        <div className="popup-overlay">
          <div className="game-popup">
            <Gnome setGnome={setGnome} />
          </div>
        </div>
      )}
      <div className="gnomediv">
        <button className="gnome" onClick={() => setGnome(true)}>
          <img
            className={block ? 'block' : 'gnome'}
            src="../../public/dinner-images/gnome.png"
            alt="frame with map"
          />
        </button>
      </div>

      {stool && (
        <div className="popup-overlay">
          <div className="game-popup">
            <Stool setStool={setStool} />
          </div>
        </div>
      )}
      <div className="stooldiv">
        <button className="stool" onClick={() => setStool(true)}>
          <img
            className={block ? 'block' : 'stool'}
            src="../../public/dinner-images/fallen-stool.png"
            alt="frame with map"
          />
        </button>
      </div>

      <div className="chestdiv">
        <img
          className="chest"
          src="../../public/dinner-images/chest.png"
          alt="frame with map"
        />
      </div>

      <div className="duckdiv">
        <img
          className="duck"
          src="../../public/dinner-images/duck.png"
          alt="frame with map"
        />
      </div>

      <div className="mirrordiv">
        <img
          className="mirror"
          src="../../public/dinner-images/mirror.png"
          alt="frame with map"
        />
      </div>

      <div className="pumpkindiv">
        <img
          className="pumpkin"
          src="../../public/dinner-images/pumpkins.png"
          alt="frame with map"
        />
      </div>
    </>
  )
}
