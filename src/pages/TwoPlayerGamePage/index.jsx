import React from 'react';
import { useDispatch } from 'react-redux';

import { restart, continueGame } from '../../store/slices/gameSlice';

import Button from '../../components/Button';
import Link from '../../components/Link';
import Wrapper from '../../components/Wrapper';
import GameBoard from '../../containers/GameBoard';
import StatisticTableContainer from '../../containers/StatisticTableContainer';

import css from './index.module.css';

const TwoPlayerGamePage = () => {
  const dispatch = useDispatch();

  const clickRestartHandler = () => {
    dispatch(continueGame());
  };

  const clickMenuHandler = () => {
    dispatch(restart());
  };

  return (
    <div className={css.root}>
      <Wrapper>
        <GameBoard />
        <StatisticTableContainer />
        <div className={css.buttonGroup}>
          <Button clickHandler={clickRestartHandler}>Restart</Button>
          <Link to="/tic-tac-toe/" clickHandler={clickMenuHandler}>
            To menu
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default TwoPlayerGamePage;
