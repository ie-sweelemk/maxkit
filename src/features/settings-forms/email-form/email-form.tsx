import { useStateSelector } from "features/store";
import { Button, Input } from "shared/ui";
import { FormField } from "shared/ui/styled-components";
import { Form } from "../settings-forms.styles";
import { profileSelector } from "./model";

const EmailForm: React.FC = () => {
  const profileState = useStateSelector(profileSelector);
  return (
    <Form>
      <FormField>
        <Input name="email" label="Email" disabled value={profileState.email} />
      </FormField>
      <FormField>
        <Input name="new_email" label="New email" />
      </FormField>
      <FormField>
        <Button label="Change email" variant="primary"/>
      </FormField>
    </Form>
  );
};

export default EmailForm;
