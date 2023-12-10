import { Divider } from 'primereact/divider';

import { Image } from 'primereact/image';

export default function Contact() {
  const icon = <i className='pi pi-search'></i>;
  return (
    <div className='grid flex flex-column   min-h-screen  bg-bg-secondary  px-4'>
      <h1 className='text-primary text-center text-7xl'>Contact Page</h1>
      <Divider />
      <div className='grid my-2 '>
        <div className='col-12 md:col-6 lg:col-6'>
          <div className='p-3 border-round-sm  font-bold'>
            <p className='text-justify'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem architecto earum exercitationem facilis magni sequi
              dolor aliquid illum totam cumque, natus nisi veritatis
              consequuntur nostrum numquam ut error voluptate. Sint?
            </p>
            <p className='text-justify'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem architecto earum exercitationem facilis magni sequi
              dolor aliquid illum totam cumque, natus nisi veritatis
              consequuntur nostrum numquam ut error voluptate. Sint?
            </p>
            <p className='text-justify'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem architecto earum exercitationem facilis magni sequi
              dolor aliquid illum totam cumque, natus nisi veritatis
              consequuntur nostrum numquam ut error voluptate. Sint?
            </p>
            <p className='text-justify'>
              ChatGPT now uses the GPT-3.5 model that includes a fine-tuning
              process for its algorithm. ChatGPT Plus uses GPT-4, which offers a
              faster response time and internet plugins. GPT-4 can also handle
              more complex tasks compared with previous models, such as
              describing photos, generating captions for images and creating
              more detailed responses up to 25,000 words. ChatGPT uses deep
              learning, a subset of machine learning, to produce humanlike text
              through transformer neural networks. The transformer predicts text
              -- including the next word, sentence or paragraph -- based on its
              training datas typical sequence. Training begins with generic
              data, then moves to more tailored data for a specific task.
              ChatGPT was trained with online text to learn the human language,
              and then it used transcripts to learn the basics of conversations.
              Human trainers provide conversations and rank the responses. These
              reward models help determine the best answers. To keep training
              the chatbot, users can upvote or downvote its response by clicking
              on thumbs-up or thumbs-down icons beside the answer. Users can
              also provide additional written feedback to improve and fine-tune
              future dialogue.
            </p>
          </div>
        </div>
        <div className='col-12 md:col-6 lg:col-6 flex justify-content-center align-items-center '>
          <div className='p-3 border-round-sm  font-bold'>
            <div className='card flex flex-column gap-2 align-content-center  align-items-center  justify-content-center'>
              <Image
                src='https://primefaces.org/cdn/primereact/images/galleria/galleria12.jpg'
                indicatorIcon={icon}
                alt='Image'
                preview
                width='250'
              />
              <Image
                src='https://primefaces.org/cdn/primereact/images/galleria/galleria12.jpg'
                indicatorIcon={icon}
                alt='Image'
                preview
                width='250'
              />
              <Image
                src='https://primefaces.org/cdn/primereact/images/galleria/galleria12.jpg'
                indicatorIcon={icon}
                alt='Image'
                preview
                width='250'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
