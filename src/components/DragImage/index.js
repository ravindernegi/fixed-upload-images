import React, { useState } from 'react';
import { Grid, Paper, Button } from '@material-ui/core';
import Spinner from './spinner';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  paper: {
    padding: '20px',
  },
});

const UploadImage = ({ processImages = () => {} }) => {
  const classes = useStyles(); // added style hooks
  const [isLoading, setIsLoading] = useState(false); // added loading state for drag screen
  const onUploadImage = (files) => {
    const fileList = Array.from(files);
    const images = fileList.map((image) => {
      return {
        productCode:
          image?.name?.replace(/\.[^/.]+$/, '').split('_')[1] ||
          image?.name?.replace(/\.[^/.]+$/, '').split('_')[0] ||
          '',
        productName: '',
        productCategory: null,
        imageFileName: image?.name?.replace(/\.[^/.]+$/, '') || '',
        imageFile: image,
      };
    });

    processImages(images);
  };

  const handleDrop = (e) => {
    e.nativeEvent.preventDefault();
    setIsLoading(false);
    if (!e) return;
    const files = e.nativeEvent.dataTransfer.files;
    onUploadImage(files);
  };

  const browseFiles = (e) => {
    if (!e) return;
    const files = e.currentTarget.files;
    onUploadImage(files);
    e.target.value = null;
  };
  // Added for start drag screen
  const startDragFile = () => {
    setIsLoading(true);
  };
  // Added for end drag screen
  const endDragFile = () => {
    setIsLoading(false);
  };
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <Paper
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e)}
          onDragEnter={startDragFile}
          className={classes.paper}
        >
          {/* Added Spinner for drag screen */}
          {isLoading && <Spinner endDragFile={endDragFile} />}
          <div>
            <h3
              style={{
                fontSize: '18px',
                fontWeight: 'normal',
                marginBottom: '1rem',
              }}
            >
              Drag & Drop Images here
            </h3>
            <p
              style={{
                fontSize: '18px',
                fontWeight: 'normal',
                marginBottom: '1rem',
              }}
            >
              or
            </p>
            <Button
              size='medium'
              variant='outlined'
              component='label'
              color='primary'
            >
              <input
                type='file'
                accept='image/*'
                multiple
                style={{ display: 'none' }}
                onChange={(e) => browseFiles(e)}
              />
              Browse files
            </Button>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default UploadImage;
