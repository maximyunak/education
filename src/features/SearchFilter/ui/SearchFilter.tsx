import React, { useState } from 'react';
import {
  Flex,
  InputsContainer,
  PopperText,
  SwitchContainer,
  ThemesList,
  VideoFilterContainer,
} from './SearchFilter.styles';
import {
  StyledInput,
  Text12,
  Text16,
  Text17,
  TextGray,
  useAppDispatch,
  useAppSelector,
} from 'shared/lib';
import {
  Autocomplete,
  Checkbox,
  Chip,
  InputAdornment,
  Popper,
  Switch,
  TextField,
  useMediaQuery,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import { setFilterText, setFilterThema, setSortingMode } from '../model/SearchFilterSlice';
import { ThemeType } from 'entities/Themes';
import { useGetThemesQuery } from 'entities/Themes/api/themesApi';

export const SearchFilter = () => {
  const { data: themesData, isLoading, error } = useGetThemesQuery();

  const { totalItems, sortingMode, filterThema, filterText } = useAppSelector(
    (state) => state.SearchFilter,
  );
  console.log('🚀 ~ SearchFilter ~ filterThema:', filterThema);

  const width = useMediaQuery('(max-width: 350px)');

  const dispatch = useAppDispatch();

  const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;

    if (isChecked) {
      dispatch(setSortingMode('updated_at'));
    } else {
      dispatch(setSortingMode('popularity_count'));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilterText(e.target.value));
  };

  const handleChangeFilterThema = (e: any, newValue: ThemeType[]) => {
    const themeIds = newValue.map((theme) => theme.id);
    dispatch(setFilterThema(themeIds));
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
        <Switch
          checked={sortingMode === 'updated_at'}
          onChange={handleSwitchChange}
          size={width ? 'small' : 'medium'}
        />
        <Text17>По дате обновления</Text17>
      </SwitchContainer>
      <InputsContainer>
        <Autocomplete
          value={themesData?.items.filter((theme) => filterThema.includes(theme.id)) || []}
          onChange={handleChangeFilterThema}
          disablePortal
          getOptionLabel={(option) => (typeof option === 'string' ? option : option.name)}
          options={
            themesData?.items ? themesData.items : ([{ name: 'ничего не найдено' }] as ThemeType[])
          }
          multiple
          limitTags={1}
          fullWidth
          sx={{
            maxWidth: '263px',
            marginTop: '-15px',
            '@media (max-width: 1060px)': {
              maxWidth: '200px',
            },
            '@media (max-width: 880px)': {
              maxWidth: '100%',
            },
            '@media (max-width: 600px)': {
              maxWidth: '100%',
            },
          }}
          clearOnEscape
          renderInput={(params) => (
            <TextField {...params} label="Выберите тематику" variant="standard" fullWidth />
          )}
          renderTags={(value) =>
            themesData?.success && (
              <div style={{ paddingRight: '5px' }}>
                <Chip label={`${value.length} выбрано`} />
              </div>
            )
          }
          renderOption={(props, option, { selected }) => {
            const { key, ...optionProps } = props;
            return themesData?.success ? (
              <ThemesList key={key} {...optionProps}>
                {themesData?.success && <Checkbox sx={{ mx: 0, pr: 1 }} checked={selected} />}
                <PopperText>{option.name}</PopperText>
              </ThemesList>
            ) : null;
          }}
        />
        <div style={{ width: '100%' }}>
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
        </div>
      </InputsContainer>
    </VideoFilterContainer>
  );
};
