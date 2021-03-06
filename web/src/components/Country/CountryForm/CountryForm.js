// import { useState } from 'react';
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms';
// import { PickerInline } from 'filestack-react';

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '');
  }
};

const CountryForm = (props) => {
  // const [url, setUrl] = useState(props?.image?.url);

  const onSubmit = (data) => {
    // const dataWithUrl = Object.assign(data, { url });
    props.onSave(data, props?.image?.id);
  };

  // const onFileUpload = (response) => {
  //   setUrl(response.filesUploaded[0].url);
  // };

  // const thumbnail = (url) => {
  //   const parts = url.split('/');
  //   parts.splice(3, 0, 'resize=width:1000');
  //   return parts.join('/');
  // };

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
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.country?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="abbr"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Abbr
        </Label>
        <TextField
          name="abbr"
          defaultValue={props.country?.abbr}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="abbr" className="rw-field-error" />

        {/* <PickerInline
          apikey={process.env.REDWOOD_ENV_FILESTACK_API_KEY}
          onSuccess={onFileUpload}
        >
          <div
            style={{ display: url ? 'none' : 'block', height: '500px' }}
          ></div>
        </PickerInline>

        {url && (
          <img
            src={thumbnail(url)}
            style={{ marginTop: '2rem', maxWidth: '500px' }}
          />
        )}

        <Label
          name="imageUrl"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image url
        </Label>
        <TextField
          name="imageUrl"
          defaultValue={props.country?.imageUrl}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="imageUrl" className="rw-field-error" /> */}

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  );
};

export default CountryForm;
