import { AccordionSummary, useMediaQuery } from '@mui/material';
import { AccordionDetails } from '@mui/material';
import { Accordion } from '@mui/material';
import { Text17 } from 'shared/lib';
import { Text20Bold } from 'shared/lib';

import { accordionData1, accordionData2 } from '../consts';
import { useState } from 'react';

import { AccordionContainer, AccordionItem, ExpandIcon } from './QweryAnswer.styles';

const PlusIcon = ({ isActive }: { isActive: boolean }) => {
  return (
    <ExpandIcon className={isActive ? 'active' : ''}>
      <span></span>
      <span></span>
    </ExpandIcon>
  );
};

export const QweryAnswer = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [expanded2, setExpanded2] = useState<string | false>(false);
  const mobile = useMediaQuery('(max-width: 560px)');

  const handleChangeFirstAccordion =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const handleChangeSecondAccordion =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded2(isExpanded ? panel : false);
    };

  return (
    <AccordionContainer>
      <AccordionItem>
        {accordionData1.map((el) => (
          <Accordion
            expanded={expanded === `panel${el.id}`}
            onChange={handleChangeFirstAccordion(`panel${el.id}`)}
            sx={{
              borderRadius: '0px !important',
              boxShadow: 'none',
              padding: 0,
              margin: '0 !important',
              backgroundColor: 'transparent',
              '&:not(:last-child)': {
                borderBottom: '2px solid #dee0e1',
              },
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary
              sx={{
                display: 'flex',
                margin: '0 !important',
                justifyContent: 'space-between',
                alignItems: 'center',
                transform: 'rotate(0deg) !important',
                '.css-1wqf3nl-MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                  transform: 'rotate(0deg) !important',
                },
              }}
              // onClick={() => setExpanded(!expanded)}
              expandIcon={<PlusIcon isActive={expanded === `panel${el.id}`} />}
              aria-controls={`panel${el.id}-content`}
              id={`panel${el.id}-header`}
            >
              <Text20Bold>{el.title}</Text20Bold>
            </AccordionSummary>
            <AccordionDetails sx={{ paddingTop: '0 !important' }}>
              <Text17>{el.content}</Text17>
            </AccordionDetails>
          </Accordion>
        ))}
      </AccordionItem>
      <AccordionItem>
        {accordionData2.map((el) => (
          <Accordion
            expanded={mobile ? expanded === `panel${el.id}` : expanded2 === `panel${el.id}`}
            onChange={
              mobile
                ? handleChangeFirstAccordion(`panel${el.id}`)
                : handleChangeSecondAccordion(`panel${el.id}`)
            }
            sx={{
              borderRadius: '0px !important',
              boxShadow: 'none',
              padding: 0,
              margin: '0 !important',
              backgroundColor: 'transparent',
              '&:not(:last-child)': {
                borderBottom: '2px solid #dee0e1',
              },
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary
              sx={{
                display: 'flex',
                margin: '0 !important',
                justifyContent: 'space-between',
                alignItems: 'center',
                transform: 'rotate(0deg) !important',
                '.css-1wqf3nl-MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                  transform: 'rotate(0deg) !important',
                },
              }}
              expandIcon={
                <PlusIcon
                  isActive={mobile ? expanded === `panel${el.id}` : expanded2 === `panel${el.id}`}
                />
              }
              aria-controls={`panel${el.id}-content`}
              id={`panel${el.id}-header`}
            >
              <Text20Bold>{el.title}</Text20Bold>
            </AccordionSummary>
            <AccordionDetails>
              <Text17>{el.content}</Text17>
            </AccordionDetails>
          </Accordion>
        ))}
      </AccordionItem>
    </AccordionContainer>
  );
};
