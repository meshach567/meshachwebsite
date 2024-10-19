import '../Layout/index.scss'
import PropTypes from 'prop-types';

type animatedProps = {
    letterClass: string,
    strArray: Array<string>,
    idx: number
}

const AnimatedLetters = ({ letterClass, strArray, idx }: animatedProps ) => {

  return (
    <span>
      {strArray.map((char: string | number, i: number | any) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

AnimatedLetters.propTypes = {
    letterClass: PropTypes.string.isRequired,
    strArray: PropTypes.array.isRequired,
    idx: PropTypes.number.isRequired,
  }

export default AnimatedLetters;

