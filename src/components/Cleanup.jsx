import { useState } from 'react';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';

export default function Cleanup() {
  const [date, setDate] = useState(null);
  return (
    <div>
      <div className='card flex gap-2 py-4   justify-content-center'>
        <div>
          <h1 className='text-7xl'>Prime React Starter Project </h1>
        </div>
      </div>
      <div className='card flex justify-content-center '>
        <Button label='Check' icon='pi pi-check' />
      </div>
      <div className='card py-2 flex gap-2  justify-content-center'>
        <Calendar value={date} onChange={(e) => setDate(e.value)} />
        <Button
          label='Help'
          severity='help'
          icon='pi pi-shield'
          iconPos='right'
        />
      </div>
    </div>
  );
}
