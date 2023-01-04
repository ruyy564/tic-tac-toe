import React, { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import { useDispatch } from 'react-redux';

import { restart, continueGame } from '../../store/slices/gameSlice';

import Button from '../../components/Button';
import Link from '../../components/Link';
import Wrapper from '../../components/Wrapper';
import GameBoard from '../../containers/GameBoard';
import StatisticTableContainer from '../../containers/StatisticTableContainer';
import SwitchThemeButton from '../../containers/SwitchThemeButton';

import css from './index.module.css';

const TwoPlayerGamePage = () => {
  const theme = useContext(ThemeContext);

  const dispatch = useDispatch();

  const clickRestartHandler = () => {
    dispatch(continueGame());
  };

  const clickMenuHandler = () => {
    dispatch(restart());
  };

  return (
    <div className={css.root} data-theme={theme}>
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
