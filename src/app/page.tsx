'use client';
import { Header } from '@/components/Header';
import { Form } from '@/components/Form';
import { Button } from '@/components/Button';
import { ServicesList } from '@/components/ServicesList';
import { Switch } from '@/components/Switch';
import { Change, ServicesTypeWithId } from '@/types';
import { useEffect, useState } from 'react';

export default function Home() {
  const [formDisplay, setFormDisplay] = useState(false);
  const [services, setServices] = useState<ServicesTypeWithId[]>([]);
  const [showPassword, setShowPassword] = useState(false);


  const handleServiceRegistration = (servicesData: ServicesTypeWithId) => {
    const id = Date.now();
    const newService = { ...servicesData, id };
    setServices([...services, newService]);
    setFormDisplay(false);
  };


  const handleDeleteService = (id: number) => {
    const updatedServices = services.filter((service) => service.id !== id);
    setServices(updatedServices);
  };

  const handleFormDisplay = () => {
    setFormDisplay(!formDisplay);
  };

  const handleCheck = (event: Change) => {
    setShowPassword(event.target.checked);
  };

  useEffect(() => {
    const servicesFromStorage = localStorage.getItem('services');
    if (servicesFromStorage) setServices(JSON.parse(servicesFromStorage));
    
  }, []);
  
  useEffect(() => {
    localStorage.setItem('services', JSON.stringify(services));
  }, [services]);

  return (
    <div className="flex flex-col items-center">
      <Header />
      <main className="main">
        {formDisplay ? (
          <Form
            handleCancel={handleFormDisplay}
            handleSubmit={handleServiceRegistration}
          />
        ) : (
          <Button
            title="cadastrar nova senha"
            type="register"
            onClick={handleFormDisplay}
            isDisable={false}
          />
        )}
        <hr className="divider" />
      </main>
      <section className='switch-container'>
        <Switch services={services} onCheck={handleCheck} />
      </section>
      <ServicesList
        services={services}
        handleDeleteService={handleDeleteService}
        handleShowPassword={showPassword}
      />
    </div>
  );
}
