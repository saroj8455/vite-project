import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { items } from '../common/MenuItem';
export default function Navbar() {
  const start = (
    <img
      alt='logo'
      src='https://primefaces.org/cdn/primereact/images/logo.png'
      height='40'
      className='mr-2'
    ></img>
  );
  const end = <InputText placeholder='Search' type='text' className='w-full' />;
  return (
    <div className='card'>
      <Menubar model={items} start={start} end={end} />
    </div>
  );
}
