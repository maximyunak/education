import { Autocomplete, Button, FormControlLabel, TextField, Checkbox } from '@mui/material';
import { Text12 } from 'shared/lib';
import { Form, InputsContainer, CheckboxContainer } from './FeedbackForm.styles';

export const FeedbackForm = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   phone: '',
  //   email: '',
  //   message: '',
  // });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Здесь будет логика отправки формы
  //   console.log(formData);
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  return (
    <Form>
      <InputsContainer>
        <Autocomplete
          options={['Maxik', 'Maxim', 'Max', 'Silnyi Max']}
          renderInput={(params) => (
            <TextField variant="standard" {...params} label="Выбрать менеджера" />
          )}
        />
        <TextField variant="standard" label="Имя" />
        <TextField variant="standard" label="8 (000) 000-00-00" />
        <TextField variant="standard" label="E-mail" />
      </InputsContainer>
      <CheckboxContainer>
        <FormControlLabel
          control={<Checkbox />}
          label={<Text12>Я согласен на обработку персональных данных</Text12>}
        />
      </CheckboxContainer>
      <Button variant="contained" sx={{ width: '100%', height: '60px', textTransform: 'none' }}>
        Получить консультацию
      </Button>
    </Form>
  );
};
