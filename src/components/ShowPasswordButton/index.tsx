import { EyeClosed } from '../../images/EyeClosedIcon';
import { EyeOpenIcon } from '../../images/EyeOpenIcon';

type ShowPasswordProps = {
  handleVisibility: () => void;
  inputType: 'text' | 'password';
};

export function ShowPasswordButton({
  handleVisibility,
  inputType,
}: ShowPasswordProps) {
  return (
    <button
      data-testid="show-hide-form-password"
      className="hide-show"
      type="button"
      onClick={ handleVisibility }
    >
      {' '}
      {inputType === 'text' ? <EyeOpenIcon /> : <EyeClosed />}
    </button>
  );
}
