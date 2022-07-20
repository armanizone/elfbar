import * as yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const shitSchema = yup.object().shape({
  name: yup.string().required("Заполните данное поле"),
  tel: yup.string("Введите цифры").matches(phoneRegExp, "Неверный формат номера").required("Заполните данное поле"),
  telegram: yup.string().when('whatsapp', {
    is: (whatsapp) => !whatsapp || whatsapp.length === 0,
    then: yup.string().required("Заполните хотябы одно поле"),
    otherwise: yup.string,
  }),
  whatsapp: yup.string().when('telegram', {
    is: (telegram) => !telegram || telegram.length === 0,
    then: yup.string().matches(phoneRegExp, "Неверный формат номера").required("Заполните хотябы одно поле"),
    otherwise: yup.string,
  }),
}, [['telegram', 'whatsapp']])

export {
  shitSchema
}