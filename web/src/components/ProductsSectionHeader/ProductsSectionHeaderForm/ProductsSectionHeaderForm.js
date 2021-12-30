import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms';

const formatDatetime = value => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '');
  }
};

const ProductsSectionHeaderForm = props => {
  const onSubmit = data => {
    props.onSave(data, props?.productsSectionHeader?.id);
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
          name="text"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Text
        </Label>
        <TextField
          name="text"
          defaultValue={props.productsSectionHeader?.text}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="text" className="rw-field-error" />

        <Label
          name="imageUrls"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image urls
        </Label>
        <TextField
          name="imageUrls"
          defaultValue={props.productsSectionHeader?.imageUrls}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="imageUrls" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  );
};

export default ProductsSectionHeaderForm;
