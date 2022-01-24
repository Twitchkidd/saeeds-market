import { useState } from 'react';
import Logo from 'src/assets/svg/logo.svg';
import UserAuthTools from 'src/components/UserAuthTools/UserAuthTools';
import { verticalKeyline2 } from 'src/utils/spacing';
import { arrayEquals } from 'src/utils/arrayHelpers';

const LogoDoorknock = () => {
  const tooShort = 50;
  const veryShort = 400;
  const short = 600;
  const long = 1000;
  const tooLong = 2000;
  // const [sequence, setSequence] = useState([
  //   short,
  //   veryShort,
  //   veryShort,
  //   short,
  //   long,
  //   short,
  //   0,
  // ]);
  const [sequence, setSequence] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    0,
  ]);
  console.log(sequence);
  const handleClick = (e) => {
    const time = e.timeStamp;
    const prevTime = sequence[6];
    const nulls = (n) => new Array(n).fill(null);
    if (prevTime === 0) {
      console.log('first tap!', time);
      setSequence((prev) => [...nulls(6), time]);
    } else if (time > prevTime + tooLong) {
      console.log('too long!');
      setSequence((prev) => [...nulls(6), time]);
    } else {
      let tap = 2;
      for (let i = 0; i < 6; i++) {
        if (sequence[i] !== null) {
          tap++;
        }
      }
      console.log('tap', tap);
      if (time < prevTime + tooShort) {
        console.log('tooShort', time, prevTime);
        return;
      }
      if (time < prevTime + veryShort) {
        // set as veryShort
        console.log('veryShort', time, prevTime);
        if (tap === 2) {
          setSequence((prev) => [veryShort, ...nulls(5), time]);
        } else if (tap === 8) {
          setSequence((prev) => [...prev.slice(1, 6), veryShort, time]);
        } else if (tap === 7) {
          setSequence((prev) => [...prev.slice(0, 5), veryShort, time]);
        } else {
          setSequence((prev) => [
            ...prev.slice(0, tap - 2),
            veryShort,
            ...nulls(7 - tap),
            time,
          ]);
        }
      } else if (time < prevTime + short) {
        // set as short
        console.log('short', time, prevTime);
        if (tap === 2) {
          setSequence((prev) => [short, ...nulls(5), time]);
        } else if (tap === 8) {
          setSequence((prev) => [...prev.slice(1, 6), short, time]);
        } else if (tap === 7) {
          setSequence((prev) => [...prev.slice(0, 5), short, time]);
        } else {
          setSequence((prev) => [
            ...prev.slice(0, tap - 2),
            short,
            ...nulls(7 - tap),
            time,
          ]);
        }
      } else if (time < prevTime + tooLong) {
        // set as long
        console.log('long', time, prevTime);
        // if it was the first tap, or the first tap after too long, that's handled,
        // so first off start tap off at 2,
        // and then if it's tap of 2, set the initial and then spread nulls and time,
        // and if it's a tap after 7, shift everything down one and put long in seq[5], and time,
        // else a slice, long, and something (5? 6?) minus tap nulls, and time
        if (tap === 2) {
          setSequence((prev) => [long, ...nulls(5), time]);
        } else if (tap === 8) {
          setSequence((prev) => [...prev.slice(1, 6), long, time]);
        } else if (tap === 7) {
          setSequence((prev) => [...prev.slice(0, 5), long, time]);
        } else {
          setSequence((prev) => [
            ...prev.slice(0, tap - 2),
            long,
            ...nulls(7 - tap),
            time,
          ]);
        }
      } else {
        console.error('What happened here? Todo');
      }
    }
  };
  return (
    <>
      {!arrayEquals(sequence.slice(0, 6), [
        short,
        veryShort,
        veryShort,
        short,
        long,
        short,
      ]) ? (
        <Logo
          onClick={handleClick}
          style={{
            width: verticalKeyline2,
            height: verticalKeyline2,
          }}
        />
      ) : (
        <UserAuthTools />
      )}
    </>
  );
};

export default LogoDoorknock;
