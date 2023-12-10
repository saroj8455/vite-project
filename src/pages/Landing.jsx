import { Button } from 'primereact/button';
export default function Landing() {
  return (
    <div>
      <div className='grid flex  min-h-screen  bg-primary   p-4 '>
        <div className='col-12 md:col-6 lg:col-6 flex flex-column justify-content-center'>
          <div className='text-center border-round-sm bg-primary font-bold'>
            <div className='card flex flex-column align-items-center  '>
              <h1>Welcome to the Landing Page</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                molestias harum iusto porro sit laudantium veniam voluptatem
                autem, omnis praesentium magni repudiandae voluptate id dolorem
                nulla doloremque dolorum vel in.
              </p>
              <div className='card flex gap-2'>
                <Button
                  label='Help'
                  severity='help'
                  icon='pi pi-shield'
                  iconPos='right'
                />
                <Button
                  className='text-white '
                  label='Read More....'
                  severity='link'
                  icon='pi pi-check'
                  iconPos='right'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 md:col-6 lg:col-6'>
          <div className='text-center  border-round-sm hero  bg-primary font-bold'>
            {/* <h1>Hello World App Hero Sec</h1> */}
            {/* <img
              className='common-img'
              src='https://media.istockphoto.com/id/490453539/photo/malaysian-cuisine-maggi-goreng-mamak.jpg?s=1024x1024&w=is&k=20&c=mQ7PFASeP47Xp9pG_tAFdqhjYDG0La8AHEtrMZMJYvI='
              alt='Magiee Noodles'
              srcSet='Magiee Noodles'
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
