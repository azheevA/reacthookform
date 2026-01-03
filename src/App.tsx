
import './App.scss'
import {  useFormContext, type SubmitHandler } from 'react-hook-form'
import Checkbox from './Checkbox/checkbox'
import type  {IForm } from './Hook/HookFormProvider'


function App() {
  const {formState, register,handleSubmit, reset } = useFormContext<IForm>();
  //setValue('email, '123@123.com')
  // const emailWatch = watch('email')
  // useEffect(()=>{
  //   console.log(emailWatch)
  // },[emailWatch])
  // useEffect(()=>{
  //   reset({
  //     email: 'test@test.ru',
  //     message: 'hello world'
  //   })
  // },[reset])
  const emailError = formState.errors['email']?.message
  const messageError = formState.errors['message']?.message
  const onSubmit:SubmitHandler<IForm> = (data: any) =>{
    console.log(data['email'])
  }
  return (
    <>
      <h1>Feedback form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
          type="text" 
          placeholder='Enter email: ' 
          {...register('email',{
            required: 'This field is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address'
            }
          })}
          />
        {
          emailError && <p style={{
            color: 'tomato', 
            margin: '2px auto 0', 
            textAlign:'left'
            }}>
            {emailError}
          </p>
        }  
        <textarea placeholder='Enter message'
        {...register('message',{
            required: 'This field is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address'
            }
          })
        }    
        ></textarea>
        {
          messageError && <p style={{
            color: 'tomato', 
            margin: '2px auto 0', 
            textAlign:'left'
            }}>
            {messageError}
          </p>
        } 
        <Checkbox/>
        <button type="submit">Send</button>
        <button onClick={() => reset()}>reset</button>
      </form>
    </>
  )
}

export default App
