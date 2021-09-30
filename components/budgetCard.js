import { Formik } from 'formik'

export default function BudgetCard({ theme, width }) {

  const onSubmitHandler = async (values, { setSubmitting }) => {
    const res = await fetch('/api/fazer-orcamento', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    })
    const data = await res.json()
    setSubmitting(false)
    console.log(data)
  }

  const validate = (values) => {
    const errors = {}
    if (!values.name) errors.name = 'Campo obrigatorio.'
    if (!values.email) errors.email = 'Campo obrigatorio.'
    if (!values.phone) errors.phone = 'Campo obrigatorio.'
    if (!values.state) errors.state = 'Campo obrigatorio.'
    if (!values.city) errors.city = 'Campo obrigatorio.'
    if (!values.subject) errors.subject = 'Campo obrigatorio.'
    if (!values.body) errors.body = 'Campo obrigatorio.'
    return errors
  }

  return (
    <div className={`rounded ${width || 'w-full'} p-6 shadow-md ${theme === 'dark' ? 'bg-gray-900' : 'bg-primary'}`}>
      <div className="mb-8 text-center">
        <h3 className="text-white font-medium text-2xl">
          Faça <span className={`${theme === 'dark' ? 'text-primary' : 'text-gray-900'}`}>Já</span> Seu <span className={`${theme === 'dark' ? 'text-primary' : 'text-gray-900'}`}>Orçamento</span>
        </h3>
        <p className="text-gray-100">Sem Compromisso</p>
      </div>
      <Formik
        initialValues={{ name: '', email: '', phone: '', state: '', city: '', subject: '', body: '' }}
        validate={validate}
        onSubmit={onSubmitHandler}
      >
        {({
          values,
          handleSubmit,
          handleChange,
          handleBlur
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="grid gap-5 grid-cols-3">       
              <div className="grid grid-cols-2 gap-x-3 col-span-3">
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  placeholder="Seu nome"
                  className="p-2 rounded outline-none bg-gray-50"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <input
                  type="text"
                  name="email"
                  value={values.email}
                  placeholder="Seu email"
                  className="p-2 rounded outline-none bg-gray-50"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <input
                type="text"
                name="phone"
                value={values.phone}
                placeholder="Seu celular (85) 9 9999-9999"
                className="col-span-3 p-2 rounded bg-gray-50 outline-none"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="grid grid-cols-3 gap-x-3 col-span-3">
                <select
                  className="w-full py-2 rounded bg-gray-100 text-gray-700"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">Estado</option>
                  <option>Ceará</option>
                </select>
                <select
                  className="w-full py-2 rounded bg-gray-100 text-gray-700"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">Cidade</option>
                  <option>Fortaleza</option>
                </select>
                <select
                  className="w-full py-2 rounded bg-gray-100 text-gray-700"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">Assunto</option>
                  <option className="budget">Orçamento</option>
                  <option className="doubt">Duvida</option>
                </select>
              </div>
              <textarea
                placeholder="O que você deseja ? Seja uma dúvida ou um orçamento, basta nos enviar. Fique a vontade para entrar em contato conosco!!"
                rows="4"
                className="rounded p-2 col-span-3 bg-gray-100 outline-none"
                name="body"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.body}
              >

              </textarea>
            </div>
            <button type="submit" className={`w-full mt-4 py-2 text-white font-medium rounded transition-all ${theme == 'dark' ? 'bg-primary' : 'bg-gray-900'} hover:opacity-70`}>
              Fazer Orçamento
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}