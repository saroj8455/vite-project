import { Button } from 'primereact/button';

function App() {
  return (
    <>
      <div className='card flex gap-2 py-4   justify-content-center'>
        <div>
          <h1>Prime React Starter Project </h1>
        </div>
      </div>
      <div className='card flex justify-content-center '>
        <Button label='Check' icon='pi pi-check' />
      </div>
    </>
  );
}

export default App;
