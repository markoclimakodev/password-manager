import { LockerIcon } from '../../images/LockerIcon';
import { ServicesTypeWithId } from '../../types';
import { PasswordCard } from '../PasswordCard';
import { Title } from '../Title';


type ServicesListProps = {
  services: ServicesTypeWithId[];
  handleDeleteService: (id: number) => void;
  handleShowPassword: boolean;
};

export function ServicesList({
  services,
  handleDeleteService,
  handleShowPassword,
}: ServicesListProps) {
  return (
    <section className='services-register-container'>
      <section className="services-register-subcontainer">
        {services.length === 0 ? (
          <section className="service-list-empty-container">
            <Title type="h2" title="Nenhuma senha cadastrada...">
              <LockerIcon />
            </Title>
          </section>
        ) : (
          services.map((service) => (
            <PasswordCard
              handleDelete={ handleDeleteService }
              serviceData={ service }
              hide={ handleShowPassword }
              key={ service.id }
            />
          ))
        )}
      </section>
    </section>
  );
}
