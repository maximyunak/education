import React, { useState } from 'react';
import { Flex, SwitchContainer, VideoFilterContainer } from './VideoFilter.styles';
import { StyledInput, Text17, TextGray } from 'shared/lib';
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

export const VideoFilter = () => {
  const [isPopular, setisPopular] = useState(true);
  return (
    <VideoFilterContainer>
      <div>
        <Text17>
          <TextGray>Найдено:</TextGray> 209
        </Text17>
      </div>
      <SwitchContainer>
        <Text17>По популярности</Text17>
        <Switch checked={!isPopular} onChange={() => setisPopular(!isPopular)} />
        <Text17>По дате обновления</Text17>
      </SwitchContainer>
      <Autocomplete
        options={['мемы', 'индусы', 'гадания']}
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
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </VideoFilterContainer>
  );
};
