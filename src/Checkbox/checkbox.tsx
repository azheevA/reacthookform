
import { Controller, useFormContext} from 'react-hook-form'
import type { IForm } from '../Hook/HookFormProvider';

export default function Checkbox() {
    const {control } = useFormContext<IForm>();
  return (
    <Controller
          control={control}
          name='isImportant'
          render={({field})=>(
            <button
            style={{padding:6, display:'block', marginBottom: 10}}
            onClick={(e)=>{
              e.preventDefault()
              field.onChange(!field.value)}}
            >{field.value ? 'Важное сообщение': 'Не важное сообщение'}</button>
          )}
        />
  )
}
