import { Change, ServicesTypeWithId } from '../../types';

type SwitchProps = {
  services: ServicesTypeWithId[];
  onCheck: (event: Change) => void;
};

export function Switch({ services, onCheck }: SwitchProps) {
  return (
    <section className="hide-password-container">
      {services.length > 0 ? (
          <><span className='switch-heading'>Esconder senhas</span><label htmlFor="hide-password" className="switch">
          <input
            type="checkbox"
            name="hide-password"
            id="hide-password"
            onChange={onCheck}
            className="switch-checkbox peer" />
          <span className="slider peer-checked:bg-emerald-400 peer-checked:left-9 " />
        </label></>
      ) : (
        <span className="span-hide" />
      )}
    </section>
  );
}
