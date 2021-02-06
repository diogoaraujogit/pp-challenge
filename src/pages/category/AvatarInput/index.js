/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
// import api from '~/services/api';

import { Container } from './styles';

import placeholder from '../../../assets/image_placeholder.jpg'

export default function AvatarInput() {
  const { defaultValue, registerField } = useField('avatar');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(placeholder);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current]);

  // function handleChange(e) {
  //   const data = new FormData();
  //   data.append('file', e.target.files[0]);
    // const response = await api.post('files', data);

    // const { id, url } = response.data;

    // setFile(id);
    // setPreview(url);
  // }

  const handleChange = event => {

    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target.result);
        console.log(e.target)
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img src={preview} alt="" />

        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
