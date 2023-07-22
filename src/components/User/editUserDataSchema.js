import * as Yup from 'yup';

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];

export const editUserDataSchema = Yup.object().shape({
  avatar: Yup.mixed().test(
    'fileType',
    'Only PNG, JPEG, JPG or GIF formats are supported',
    (value) => !!value || (value && SUPPORTED_FORMATS.includes(value?.type))
  ),
  name: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .min(3, 'Must be 3 characters or more')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
    ),
});
