import { Text17 } from 'shared/lib';
import { FormalitiesContainer, TextBlock, TextContainer } from './Formalities.styles';

import { FormalityImage } from 'shared/assets/images';
import { Text20Bold } from 'shared/lib/ui/Text';

export const Formalities = () => {
  return (
    <FormalitiesContainer>
      <TextContainer>
        <TextBlock>
          <Text20Bold>Официальные документы</Text20Bold>
          <Text17>
            Дистанционные курсы по педагогике высшего, средне-профессионального, школьного и
            дошкольного образования.
          </Text17>
        </TextBlock>
        <TextBlock>
          <Text20Bold>Баллы НМО для медиков</Text20Bold>
          <Text17>
            Дистанционные курсы по педагогике высшего, средне-профессионального, школьного и
            дошкольного образования.
          </Text17>
        </TextBlock>
        <TextBlock>
          <Text20Bold>Официальные документы</Text20Bold>
          <Text17>
            Дистанционные курсы по педагогике высшего, средне-профессионального, школьного и
            дошкольного образования.
          </Text17>
        </TextBlock>
        <TextBlock>
          <Text20Bold>Официальные документы</Text20Bold>
          <Text17>
            Дистанционные курсы по педагогике высшего, средне-профессионального, школьного и
            дошкольного образования.
          </Text17>
        </TextBlock>
      </TextContainer>
      <img src={FormalityImage} alt="Formality" />
    </FormalitiesContainer>
  );
};
