import React, { useState } from 'react';
import {
  CloseIconContainer,
  ModalContainer,
  DescriptionContainer,
  InputTitle,
  UploadContainer,
  VisuallyHiddenInput,
  VideoPreviewContainer,
  MobileButton,
} from './CreateVideoModal.styles';

import CloseIcon from '@mui/icons-material/Close';
import { StyledButton, TextGray, Title } from 'shared/lib';
import { Button, IconButton, Input, TextField } from '@mui/material';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const CreateVideoModal = React.forwardRef<HTMLDivElement, { onClick: () => void }>(
  ({ onClick }, modalRef) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [video, setVideo] = useState<File | null>();
    const [videoPreview, setVideoPreview] = useState<string | null>();
    const [preview, setPreview] = useState<File | null>();
    const [previewUrl, setPreviewUrl] = useState<string | null>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      switch (name) {
        case 'title':
          setTitle(value);
          break;
        case 'desc':
          setDesc(value);
          break;
      }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];

      if (!video && file) {
        setVideo(file);
        setVideoPreview(URL.createObjectURL(file));
      }
      if (video && file) {
        setPreview(file);
        setPreviewUrl(URL.createObjectURL(file));
      }
    };

    const handleDeleteClick = (name: string) => {
      switch (name) {
        case 'video':
          setVideo(null);
          setVideoPreview(null);
          break;
        case 'preview':
          setPreview(null);
          setPreviewUrl(null);
          break;
      }
    };

    // !api
    const handleSubmit = () => {
      try {
        const formData = new FormData();

        if (video && preview) {
          formData.append('title', title);
          formData.append('description', desc);
          formData.append('video', video);
          formData.append('preview', preview);
        }

        console.log(formData);
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <ModalContainer ref={modalRef} tabIndex={-1}>
        <CloseIconContainer>
          <CloseIcon onClick={onClick} />
        </CloseIconContainer>
        <DescriptionContainer>
          <div>
            <InputTitle
              value={title}
              name="title"
              onChange={handleChange}
              placeholder="Введите название видеолекции"
            />
            <Input
              name="desc"
              value={desc}
              onChange={handleChange}
              fullWidth
              placeholder="Описание видеолекции"
            />
          </div>
          <StyledButton maxWidth="160px" onClick={handleSubmit}>
            Опубликовать
          </StyledButton>
        </DescriptionContainer>
        <UploadContainer>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            sx={{
              textTransform: 'none',
              '@media (max-width: 450px)': {
                padding: '3px 15px',
              },
            }}
          >
            Загрузить {!video ? 'видео' : 'обложку'}
            <VisuallyHiddenInput onChange={handleFileChange} type="file" />
          </Button>
        </UploadContainer>
        <VideoPreviewContainer>
          {videoPreview && video && (
            <>
              <video src={videoPreview} controls />
              <div>
                <IconButton onClick={() => handleDeleteClick('video')}>
                  <DeleteIcon />
                </IconButton>
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </div>
            </>
          )}
        </VideoPreviewContainer>
        <VideoPreviewContainer>
          {preview && previewUrl && (
            <>
              <img src={previewUrl} />
              <div>
                <IconButton onClick={() => handleDeleteClick('preview')}>
                  <DeleteIcon />
                </IconButton>
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </div>
            </>
          )}
        </VideoPreviewContainer>
        <MobileButton>
          <StyledButton onClick={handleSubmit} maxWidth="160px">
            Опубликовать
          </StyledButton>
        </MobileButton>
      </ModalContainer>
    );
  },
);
