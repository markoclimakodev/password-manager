import { LinkIcon } from '../../images/LinkIcon';
import { LockerIcon } from '../../images/LockerIcon';
import { TrashIcon } from '../../images/TrashIcon';
import { ServicesTypeWithId } from '../../types';

type PasswordCardProps = {
  handleDelete: (id: number) => void;
  serviceData: ServicesTypeWithId;
  hide: boolean;
};

export function PasswordCard({
  serviceData,
  handleDelete,
  hide,
}: PasswordCardProps) {
  const { serviceName, login, password, url, id } = serviceData;
  return (
    <section className="password-list-card" key={id}>
      <a
        className="password-list-header"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        {' '}
        <LockerIcon />
        <span className="password-list-header-subcontainer">
          {serviceName}
          <LinkIcon />
        </span>
      </a>
      <p className="login-info">
        Login
        <span className="login-info-subcontainer">{login}</span>
      </p>
      <p className="login-info">
        Senha
        {hide ? <span>******</span> : <span>{password}</span> }
      </p>
      <button
        className="delete-btn"
        onClick={() => handleDelete(id)}
        data-testid="remove-btn"
      >
        <TrashIcon />
      </button>
    </section>
  );
}
