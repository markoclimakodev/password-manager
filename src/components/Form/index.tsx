import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Change, Mouse, ServicesTypeWithId, TipsType } from '../../types';
import {
  loginRegex,
  passwordRegex,
  specialCharRegex,
  urlRegex,
} from '../../regex';
import { PasswordTips } from '../PasswordTips';
import { Button } from '../Button';
import { ShowPasswordButton } from '../ShowPasswordButton';

interface FormProps {
  handleSubmit: (serviceData: ServicesTypeWithId) => void;
  handleCancel: () => void;
}

const initialServiceData = {
  serviceName: '',
  login: '',
  password: '',
  url: '',
  id: 0,
};

const initialTips = {
  hasEightOrMoreCharacters: false,
  hasUpToSixteenCharacters: true,
  isAlphanumeric: false,
  hasSpecialChar: false,
};

export function Form({ handleCancel, handleSubmit }: FormProps) {
  const [servicesData, setServicesData] = useState(initialServiceData);
  const [isFormComplete, setIsFormComplete] = useState(true);
  const [passwrdTips, setPasswordTips] = useState<TipsType>(initialTips);
  const [targetId, setTargetId] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState<'text' | 'password'>('password');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setServicesData(initialServiceData);
    handleSubmit(servicesData);
  };

  const handleServiceDataChange = (event: Change) => {
    const { id, value } = event.target;
    setServicesData({ ...servicesData, [id]: value });
  };

  const handleShowTips = (event: Mouse) => {
    setTargetId(event.currentTarget.id === 'password');
    setInputType(event.currentTarget.type as 'text' | 'password');
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const displaySuccessAlert = () => {
    Swal.fire({
      backdrop: '#26293680',
      background: '#1e2029',
      color: '#ffffff',
      icon: 'success',
      iconColor: '#aeffb6',
      position: 'center',
      showConfirmButton: false,
      timer: 1500,
      title: 'Serviço cadastrado com sucesso',
    });
  };

  useEffect(() => {
    const { serviceName, login, password, url } = servicesData;
    const passwordRequirements = password.match(passwordRegex);
    const serviceNameRequirements = serviceName.length > 0;
    const loginRequirements = login.length > 5 && login.match(loginRegex);
    const urlRequirements = url.length > 0 && url.match(urlRegex);
    const isRequirementsFilled =
      passwordRequirements &&
      serviceNameRequirements &&
      loginRequirements &&
      urlRequirements;
    setPasswordTips({
      hasEightOrMoreCharacters: password.length > 8,
      hasUpToSixteenCharacters: password.length > 8 && password.length <= 16,
      isAlphanumeric: passwordRegex.test(password),
      hasSpecialChar: specialCharRegex.test(password),
    });

    return isRequirementsFilled
      ? setIsFormComplete(false)
      : setIsFormComplete(true);
  }, [servicesData, targetId]);

  return (
    <section className="form-container">
      <form className="form" onSubmit={onSubmit}>
        <fieldset name="serviceName fildset">
          <label htmlFor="serviceName" className="service-name-container label">
            Nome do serviço
            <input
              type="text"
              id="serviceName"
              onChange={handleServiceDataChange}
              className="input"
            />
          </label>
        </fieldset>
        <fieldset className="login-container " name="login">
          <label htmlFor="login" className="label">
            Login *
            <input
              type="text"
              id="login"
              onChange={handleServiceDataChange}
              className="input"
            />
          </label>
          <label htmlFor="password" className="password-label label">
            Senha *
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              onChange={handleServiceDataChange}
              onMouseOver={handleShowTips}
              onFocus={() => handleShowTips}
              onMouseLeave={() => setTargetId(!targetId)}
              className="input input-password"
            />
            <ShowPasswordButton
              handleVisibility={handlePasswordVisibility}
              inputType={inputType}
            />
          </label>
        </fieldset>
        <fieldset className="url-container" name="url">
          <label htmlFor="url" className="label">
            URL
            <input
              type="text"
              id="url"
              onChange={handleServiceDataChange}
              className="input"
            />
          </label>
        </fieldset>
        <span className="required-fields">* Campos obrigatórios</span>
        <fieldset className="form-btn-container" name="buttons">
          <Button
            title="cancelar"
            type="cancel"
            onClick={handleCancel}
            isDisable={false}
          />
          <Button
            title="cadastrar"
            type="register"
            onClick={displaySuccessAlert}
            isDisable={isFormComplete}
          />
        </fieldset>
      </form>
      
      <PasswordTips filled={passwrdTips} display={targetId} />
    </section>
  );
}
