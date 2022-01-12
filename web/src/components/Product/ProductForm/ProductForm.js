import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  SelectField,
  Submit,
} from '@redwoodjs/forms';

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '');
  }
};

const ProductForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.product?.id);
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
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.product?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="countryId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Country
        </Label>
        <SelectField
          name="countryId"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        >
          <option value="" disabled selected>
            Select Country
          </option>
          <option value={1}>Greece</option>
          <option value={2}>Lebanon</option>
          <option value={3}>Italy</option>
          <option value={4}>Germany</option>
          <option value={5}>Turkey</option>
          <option value={6}>USA</option>
          <option value={7}>Russia</option>
          <option value={8}>France</option>
          <option value={9}>Albania</option>
        </SelectField>

        <FieldError name="countryId" className="rw-field-error" />

        <Label
          name="typeId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Type id
        </Label>
        <SelectField
          name="typeId"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        >
          <option value="" disabled selected>
            Select Product Type
          </option>
          <option value={1}>Baklava</option>
          <option value={2}>Gyros</option>
          <option value={3}>Salads</option>
          <option value={4}>Pies</option>
          <option value={5}>Cookies</option>
          <option value={6}>Beer</option>
          <option value={7}>Olive Oils</option>
          <option value={8}>Gelato</option>
        </SelectField>

        <FieldError name="typeId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  );
};

export default ProductForm;
