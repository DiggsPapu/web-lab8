import React from 'react'
import PropTypes from 'prop-types'
import BuildingWall from './Wall/BuildingWall/BuildingWall'
import WarWall from './Wall/WarWall/WarWall'
import './Maze.css'

export default function Maze({
  theme = 1, inverted = 0, dimens = [31, 21, 1395 / 31, 727 / 21], maze = [
    '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+',
    '|', 'p', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|',
    '+', ' ', ' ', '+', ' ', ' ', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', ' ', ' ', '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+', ' ', ' ', '+',
    '|', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|',
    '+', '-', '-', '+', ' ', ' ', '+', ' ', ' ', '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+',
    '|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', '|',
    '+', ' ', ' ', '+', ' ', ' ', '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', ' ', ' ', '+', ' ', ' ', '+',
    '|', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|',
    '+', ' ', ' ', '+', ' ', ' ', '+', ' ', ' ', '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+', '-', '-', '+', '-', '-', '+', ' ', ' ', '+', ' ', ' ', '+',
    '|', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|',
    '+', ' ', ' ', '+', '-', '-', '+', '-', '-', '+', ' ', ' ', '+', ' ', ' ', '+', ' ', ' ', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', ' ', ' ', '+',
    '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|',
    '+', ' ', ' ', '+', ' ', ' ', '+', '-', '-', '+', '-', '-', '+', ' ', ' ', '+', '-', '-', '+', '-', '-', '+', ' ', ' ', '+', ' ', ' ', '+', '-', '-', '+',
    '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|',
    '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+', ' ', ' ', '+', ' ', ' ', '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+',
    '|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|',
    '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+', ' ', ' ', '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+', '-', '-', '+',
    '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', '|',
    '+', ' ', ' ', '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+', ' ', ' ', '+', ' ', ' ', '+',
    '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'g', '|',
    '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+',
  ],
}) {
  if (theme === 1) {
    return (
      <div className={
        inverted
          ? 'inverted-colors'
          : 'normal-colors'
      }
      >
        <div className="city-night-style">
          <div style={{
            width: '100%',
            height: '100%',
            display: 'grid',
            gridTemplateRows: `repeat(${dimens[0]},${dimens[3]}px)`,
            gridTemplateColumns: `repeat(${dimens[1]},${dimens[2]}px)`,
            alignContent: 'end',
            alignItems: 'end',
            gap: '0',
            position: 'relative',
            top: '0px',
            left: '0px',
          }}
          >
            {
          maze.map((item, i) => (
            <BuildingWall
              style={{
                marginRight: '10%',
              }}
              position={item}
              key={i}
            />
          ))
        }
          </div>
        </div>
      </div>
    )
  } if (theme === 2) {
    return (
      <div className={
        inverted
          ? 'inverted-colors'
          : 'normal-colors'
      }
      >
        <div className="city-day-style">
          <div style={{
            width: '100%',
            height: '100%',
            display: 'grid',
            gridTemplateRows: `repeat(${dimens[0]},${dimens[3]}px)`,
            gridTemplateColumns: `repeat(${dimens[1]},${dimens[2]}px)`,
            alignContent: 'end',
            alignItems: 'end',
            gap: '0',
            position: 'absolute',
            top: '0px',
            left: '0px',
          }}
          >
            {
          maze.map((item, i) => (
            <BuildingWall
              style={{
                marginRight: '10%',
              }}
              position={item}
              key={i}
            />
          ))
        }
          </div>
        </div>
      </div>
    )
  } if (theme === 3) {
    return (
      <div className={
        inverted
          ? 'inverted-colors'
          : 'normal-colors'
      }
      >
        <div className="war-style">
          <div style={{
            width: '100%',
            height: '100%',
            display: 'grid',
            gridTemplateRows: `repeat(${dimens[0]},${dimens[3]}px)`,
            gridTemplateColumns: `repeat(${dimens[1]},${dimens[2]}px)`,
            alignContent: 'end',
            alignItems: 'end',
            gap: '0',
            position: 'absolute',
            top: '0px',
            left: '0px',
          }}
          >
            {
          maze.map((item, i) => (
            <WarWall
              style={{
                marginRight: '10%',
              }}
              position={item}
              key={i}
            />
          ))
        }
          </div>
        </div>
      </div>
    )
  }
}
Maze.propTypes = {
  inverted: PropTypes.bool.isRequired,
  theme: PropTypes.oneOf([1, 2, 3]).isRequired,
  dimens: PropTypes.arrayOf(PropTypes.number).isRequired,
  maze: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}
