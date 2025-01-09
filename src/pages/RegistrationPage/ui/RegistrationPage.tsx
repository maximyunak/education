import { RegistrationForm } from 'features/Registration';
import { Registration, RegistrationContainer } from './Registration.styles';

export const RegistrationPage = () => {
  return (
    <Registration>
      <RegistrationContainer>
        <RegistrationForm />
      </RegistrationContainer>
    </Registration>
  );
};
