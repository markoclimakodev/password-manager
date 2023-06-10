type TipsTypes =
  | 'Possuir 8 ou mais caracteres'
  | 'Possuir até 16 caracteres'
  | 'Possuir letras e números'
  | 'Possuir algum caractere especial';

type TipsProps = {
  tip: TipsTypes;
  variant: 'invalid-password-check' | 'valid-password-check';
};

export function Tips({ tip, variant }: TipsProps) {
  return <span className={ variant }>{tip}</span>;
}
