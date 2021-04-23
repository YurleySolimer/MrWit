export const validate = (name, value) => {
    
    let valid = false;

    if (name === 'name') {
      if (value.length < 3 && value.length > 0) {
        setErrors({
          ...errors,
          name: {
            value: false,
            message: 'Tu nombre debe ser mayor a tres carácteres',
          },
        });
      } else if (value.length === 0) {
        setErrors({
          ...errors,
          name: {
            value: false,
            message: 'Por favor ingresa tu nombre',
          },
        });
      } else {
        setErrors({
          ...errors,
          name: {
            value: true,
            message: '',
          },
        });
      }
    }

    if (name === 'lastname') {
      if (value.length < 3 && value.length > 0) {
        setErrors({
          ...errors,
          lastname: {
            value: false,
            message: 'Tu apellido debe ser mayor a tres carácteres',
          },
        });
      } else if (value.length === 0) {
        setErrors({
          ...errors,
          lastname: {
            value: false,
            message: 'Por favor ingresa tu apellido',
          },
        });
      } else {
        setErrors({
          ...errors,
          lastname: {
            value: true,
            message: '',
          },
        });
      }
    }

    if (name === 'tel') {
      if (value.length === 0) {
        setErrors({
          ...errors,
          tel: {
            value: false,
            message: 'Debes ingresar tu teléfono celular',
          },
        });
      } else {
        setErrors({
          ...errors,
          tel: {
            value: true,
            message: '',
          },
        });
      }
    }

    if (name === 'date') {
      const date = new Date(value);
      const current = new Date();

      if (value === '') {
        setErrors({
          ...errors,
          date: {
            value: false,
            message: 'Debes establecer una fecha',
          },
        });
      } else if (date.getFullYear() < 1920 || date.getFullYear() > (current.getFullYear() - 13)) {
        setErrors({
          ...errors,
          date: {
            value: false,
            message: 'Debes escoger una fecha de nacimiento válida',
          },
        });
      } else {
        setErrors({
          ...errors,
          date: {
            value: true,
            message: '',
          },
        });
      }
    }

    if (name === 'country') {
      if (value === '') {
        setErrors({
          ...errors,
          country: {
            value: false,
            message: 'Debes escoger un país.',
          },
        });
      } else {
        setErrors({
          ...errors,
          country: {
            value: true,
            message: '',
          },
        });
      }
    }

    if (name === 'email') {
      const pattern = new RegExp(/^(('[\w-\s]+')|([\w-]+(?:\.[\w-]+)*)|('[\w-\s]+')([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(value)) {
        setErrors({
          ...errors,
          email: {
            value: false,
            message: 'Por favor ingresa un correo válido.',
          },
        });
      } else {
        setErrors({
          ...errors,
          email: {
            value: true,
            message: '',
          },
        });
      }
    }

    if (name === 'password') {
      if (value.length > 0 && value.length < 8) {
        setErrors({
          ...errors,
          password: {
            value: false,
            message: 'La contraseña debe tener al menos 8 carácteres',
          },
        });
      } else if (value.length === 0) {
        setErrors({
          ...errors,
          password: {
            value: false,
            message: 'Por favor, ingresa una contraseña',
          },
        });
      } else if (value.length >= 8 && !/(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ].*/.test(value)) {
        setErrors({
          ...errors,
          password: {
            value: false,
            message: 'Debe tener al menos una minuscula, una mayuscula y un número',
          },
        });
      } else {
        setErrors({
          ...errors,
          password: {
            value: true,
            message: '',
          },
        });
      }
    }

    if (name === 'confirmPassword') {
      if (value !== input.password) {
        setErrors({
          ...errors,
          confirmPassword: {
            value: false,
            message: 'Las contraseñas no coinciden',
          },
        });
      } else {
        setErrors({
          ...errors,
          confirmPassword: {
            value: true,
            message: '',
          },
        });
      }
    }

    if (name === 'dni') {
      if (value.length < 8 && value.length > 0) {
        setErrors({
          ...errors,
          dni: {
            value: false,
            message: 'Debes ingresar una identificación válida',
          },
        });
      } else if (value.lenght === 0) {
        setErrors({
          ...errors,
          dni: {
            value: false,
            message: 'Debes ingresar tu identificación',
          },
        });
      } else {
        setErrors({
          ...errors,
          dni: {
            value: true,
            message: '',
          },
        });
      }
    }

    if (name === 'sector') {
      if (value === '') {
        setErrors({
          ...errors,
          sector: {
            value: false,
            message: 'Debes escoger tu sector',
          },
        });
      } else {
        setErrors({
          ...errors,
          sector: {
            value: true,
            message: '',
          },
        });
      }
    }

    if (name === 'profesion') {
      if (value === '') {
        setErrors({
          ...errors,
          profesion: {
            value: false,
            message: 'Debes escoger tu profesion',
          },
        });
      } else {
        setErrors({
          ...errors,
          profesion: {
            value: true,
            message: '',
          },
        });
      }
    }

    if (name === 'especialidad') {
      if (value === '') {
        setErrors({
          ...errors,
          especialidad: {
            value: false,
            message: 'Debes escoger tu especialidad',
          },
        });
      } else {
        setErrors({
          ...errors,
          especialidad: {
            value: true,
            message: '',
          },
        });
      }
    }

    if (name === 'abilities') {
      if (value.length < 3) {
        setErrors({
          ...errors,
          abilities: {
            value: true,
            message: 'Separa tus habilidades con comas (,)',
          },
        });
      } else {
        setErrors({
          ...errors,
          abilities: {
            value: true,
            message: '',
          },
        });
      }
    }

    if (user.rol.name === 'consultant' &&
      errors.name.value &&
      errors.lastname.value &&
      errors.tel.value &&
      errors.date.value &&
      errors.country.value &&
      errors.email.value &&
      errors.password.value &&
      errors.confirmPassword.value &&
      errors.sector.value &&
      errors.profesion.value &&
      errors.especialidad.value &&
      errors.abilities.value) {
      valid = true;
    }

    if (user.rol.name === 'client' &&
      errors.name.value &&
      errors.lastname.value &&
      errors.dni.value &&
      errors.tel.value &&
      errors.country.value &&
      errors.email.value &&
      errors.password.value &&
      errors.confirmPassword.value) {
      valid = true;
    }

    return valid;
}