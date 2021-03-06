import { useState } from 'react';
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms';
import { PickerInline } from 'filestack-react';

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '');
  }
};

const HeroImageForm = (props) => {
  const [url, setUrl] = useState(props?.heroImage?.url);
  const onSubmit = (data) => {
    const dataWithUrl = Object.assign(data, { url });
    props.onSave(dataWithUrl, props?.heroImage?.id);
  };

  const onFileUpload = (response) => {
    setUrl(response.filesUploaded[0].url);
  };

  const thumbnail = (url) => {
    const parts = url.split('/');
    parts.splice(3, 0, 'resize=width:500');
    return parts.join('/');
  };

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
        <TextField
          name="title"
          defaultValue={props.heroImage?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <PickerInline
          apikey={process.env.REDWOOD_ENV_FILESTACK_API_KEY}
          onSuccess={onFileUpload}
        >
          <div
            style={{ display: url ? 'none' : 'block', height: '500px' }}
          ></div>
        </PickerInline>
        {/* {url && <img src={thumbnail(url)} style={{ marginTop: '2rem' }} />} */}
        {url && (
          <div>
            <img
              src={thumbnail(url)}
              style={{ display: 'block', margin: '2rem 0' }}
            />
            <button
              onClick={() => setUrl(null)}
              className="rw-button rw-button-blue"
            >
              Replace Image
            </button>
          </div>
        )}
        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  );
};

export default HeroImageForm;
