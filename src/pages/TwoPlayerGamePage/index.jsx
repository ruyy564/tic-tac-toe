import React from 'react';
import { useDispatch } from 'react-redux';

import { finishGame, continueGame } from '../../store/slices/gameSlice';

import Button from '../../components/Button';
import Link from '../../components/Link';
import Wrapper from '../../components/Wrapper';
import GameBoard from '../../containers/GameBoard';
import StatisticTableContainer from '../../containers/StatisticTableContainer';
import SwitchThemeButton from '../../containers/SwitchThemeButton';

import css from './index.module.css';

const TwoPlayerGamePage = () => {
  const dispatch = useDispatch();

  const clickRestartHandler = () => {
    dispatch(continueGame());
  };

  const clickMenuHandler = () => {
    dispatch(finishGame());
  };

  return (
    <div className={css.root}>
      <Wrapper>
        <GameBoard />
        <StatisticTableContainer />
        <div className={css.buttonGroup}>
          <Button clickHandler={clickRestartHandler}>Restart</Button>
          <Link to="/" clickHandler={clickMenuHandler}>
            To menu
          </Link>
        </div>
        <SwitchThemeButton />
      </Wrapper>
    </div>
  );
};

export default TwoPlayerGamePage;
