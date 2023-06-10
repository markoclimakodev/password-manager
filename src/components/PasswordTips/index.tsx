import { Tips } from '../Tips';
import { TipsType } from '../../types';

type PasswordProps = {
  filled: TipsType;
  display: boolean;
};

export function PasswordTips({ filled, display }: PasswordProps) {
  const valid = 'valid-password-check';
  const invalid = 'invalid-password-check';

  return (
    <section
      className={
        display ? 'password-tips-container' : 'password-tips-container-hide'
      }
    >
      <Tips
        tip="Possuir 8 ou mais caracteres"
        variant={ filled.hasEightOrMoreCharacters ? valid : invalid }
      />
      <Tips
        tip="Possuir até 16 caracteres"
        variant={ filled.hasUpToSixteenCharacters ? valid : invalid }
      />
      <Tips
        tip="Possuir letras e números"
        variant={ filled.isAlphanumeric ? valid : invalid }
      />
      <Tips
        tip="Possuir algum caractere especial"
        variant={ filled.hasSpecialChar ? valid : invalid }
      />
    </section>
  );
}
