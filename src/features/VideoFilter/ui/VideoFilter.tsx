import React, { useState } from 'react';
import { Flex, SwitchContainer, VideoFilterContainer } from './VideoFilter.styles';
import { StyledInput, Text17, TextGray, useAppDispatch, useAppSelector } from 'shared/lib';
import {
  Autocomplete,
  Checkbox,
  Chip,
  Input,
  InputAdornment,
  Switch,
  TextField,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import { filterThemaItems } from '../model/VideoFilterType';
import { setFilterText, setFilterThema, setSortingMode } from '../model/VideoFilterSlice';

export const VideoFilter = () => {
  const { totalItems, sortingMode, filterThema, filterText } = useAppSelector(
    (state) => state.videoFilter,
  );

  const dispatch = useAppDispatch();

  const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;

    if (isChecked) {
      dispatch(setSortingMode('date'));
    } else {
      dispatch(setSortingMode('popular'));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilterText(e.target.value));
  };

  const handleChangeFilterThema = (e: any, newValue: string[]) => {
    dispatch(setFilterThema(newValue));
  };

  return (
    <VideoFilterContainer>
      <div>
        <Text17>
          <TextGray>Найдено:</TextGray> {totalItems}
        </Text17>
      </div>
      <SwitchContainer>
        <Text17>По популярности</Text17>
        <Switch checked={sortingMode === 'date'} onChange={handleSwitchChange} />
        <Text17>По дате обновления</Text17>
      </SwitchContainer>
      <Autocomplete
        // value={filterThema}
        value={filterThema}
        onChange={handleChangeFilterThema}
        getOptionLabel={(option) => option}
        options={filterThemaItems}
        multiple
        limitTags={1}
        fullWidth
        sx={{
          maxWidth: '233px',
          marginTop: '-15px',
        }}
        clearOnEscape
        renderInput={(params) => (
          <TextField {...params} label="Выберите тематику" variant="standard" fullWidth />
        )}
        renderTags={(value) => (
          <div style={{ paddingRight: '5px' }}>
            <Chip label={`${value.length} выбрано`} />
          </div>
        )}
        renderOption={(props, option, { selected }) => {
          const { key, ...optionProps } = props;
          return (
            <li key={key} {...optionProps}>
              <Checkbox style={{ marginRight: 8 }} checked={selected} />
              {option}
            </li>
          );
        }}
      />
      <StyledInput
        maxHeight={50}
        placeholder="Поиск"
        onChange={handleInputChange}
        value={filterText}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </VideoFilterContainer>
  );
};
