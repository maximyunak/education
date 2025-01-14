import { Text17, Text20 } from 'shared/lib';
import { FormalitiesContainer, TextBlock, TextContainer } from './Formalities.styles';

import { FormalityImage } from 'shared/assets/images';

export const Formalities = () => {
  return (
    <FormalitiesContainer>
      <TextContainer>
        <TextBlock>
          <Text20>Официальные документы</Text20>
          <Text17>
            Дистанционные курсы по педагогике высшего, средне-профессионального, школьного и
            дошкольного образования.
          </Text17>
        </TextBlock>
        <TextBlock>
          <Text20>Баллы НМО для медиков</Text20>
          <Text17>
            Дистанционные курсы по педагогике высшего, средне-профессионального, школьного и
            дошкольного образования.
          </Text17>
        </TextBlock>
        <TextBlock>
          <Text20>Официальные документы</Text20>
          <Text17>
            Дистанционные курсы по педагогике высшего, средне-профессионального, школьного и
            дошкольного образования.
          </Text17>
        </TextBlock>
        <TextBlock>
          <Text20>Официальные документы</Text20>
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
