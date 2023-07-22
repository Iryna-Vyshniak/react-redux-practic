import { Field, Form, Formik, ErrorMessage } from 'formik';

import { BsPersonFill, BsPlusCircle } from 'react-icons/bs';
import { CiEdit } from 'react-icons/ci';

import { editUserDataSchema, SUPPORTED_FORMATS } from './editUserDataSchema';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../store/auth/selectors';
import { updateUserDataThunk } from '../../../store/auth/thunk';
import { useState, useRef } from 'react';

export const UpdateUserForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const userData = useSelector(getUser);
  const fileInputRef = useRef(null);

  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [imagePreview, setImagePreview] = useState(userData.avatarUrl);

  const initialValues = { avatar: '', name: '' };
  const savedValues = {
    name: userData?.name || '',
    avatar: userData?.avatarUrl || '',
  };

  const handleAddImageClick = () => fileInputRef.current.click();

  const onSubmitHandler = async (values, { resetForm }) => {
    const formData = new FormData();
    console.log('values', values.avatar);
    console.log('name', values.name);
    formData.append('name', values.name.trim());
    formData.append('avatar', values.avatar);
    dispatch(updateUserDataThunk(formData));

    resetForm();
    closeModal();
  };

  return (
    <Formik
      initialValues={savedValues || initialValues}
      validationSchema={editUserDataSchema}
      onSubmit={onSubmitHandler}
      enableReinitialize
    >
      {(formik) => {
        // console.log('Formik props', formik);
        return (
          <Form encType='multipart/form-data' className='flex flex-col justify-center items-center'>
            <div className='relative  mb-8 w-[88px] h-[88px] rounded-full border-2 object-cover'>
              <BsPlusCircle
                onClick={handleAddImageClick}
                className='absolute bottom-[-5%] right-0 w-8 h-8 text-white bg-lime-600 rounded-full'
              />
              <label>
                <input
                  type='file'
                  name='poster'
                  ref={fileInputRef}
                  onBlur={() => formik.setTouched({ avatar: true })}
                  onChange={(e) => {
                    const poster = e.target.files[0];
                    // console.log('POSTER', poster);

                    if (poster && SUPPORTED_FORMATS.includes(poster.type)) {
                      formik.setFieldValue('avatar', poster);
                      setSelectedAvatar(URL.createObjectURL(poster));
                      setImagePreview('');
                      return;
                    }
                  }}
                />
                {selectedAvatar && (
                  <div>
                    {/* {console.log('SELECT AVATAR', selectedAvatar)} */}
                    <img
                      src={selectedAvatar}
                      alt={userData.name}
                      className='w-full h-full object-cover rounded-full'
                    />
                  </div>
                )}
                {imagePreview && (
                  <div>
                    {/* {console.log('imagePreview', imagePreview)} */}
                    <img
                      src={`https://simple-products-backend.onrender.com/${imagePreview}`}
                      alt={userData.name}
                      className='w-full h-full object-cover rounded-full'
                    />
                  </div>
                )}
              </label>
            </div>
            <label className='mb-8'>
              <div className='flex items-center justify-between'>
                <Field
                  type='text'
                  name='name'
                  className='relative flex items-center px-8 h-10 w-full rounded-tl-xl rounded-br-xl'
                />
                <BsPersonFill className='absolute left-[8%] w-6 h-6 text-lime-600' />
                <CiEdit className='ml-6 w-8 h-8 text-red-700' />
              </div>

              <ErrorMessage className='text-xs text-red-700' name='name' component='span' />
            </label>

            <button
              type='submit'
              disabled={!formik.isValid || formik.isSubmitting}
              className='flex items-center justify-center px-2 h-10 w-full bg-lime-600 text-white rounded-tl-xl rounded-br-xl hover:bg-lime-700 transition duration-150 ease-in-out'
            >
              Save user info
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
