import './scoreBoard.css';

const ScoreBoard = ({scoreO, scoreX}) => (
  <div className='score-board'>
    <div>{scoreO}</div>
    <div>{scoreX}</div>
  </div>  
)

export default ScoreBoard;