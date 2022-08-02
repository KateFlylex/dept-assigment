import React from 'react';

const Form = () => {
  return (
    <div className='md:flex p-9 md:px-14 md:py-16 bg-white'>
      <div className="md:w-72 md:mr-16">
        <div className="font-extralight uppercase text-2xl md:text-5xl mb-6 md:leading-normal">Questions? We are here to help!</div>
      </div>
      <form className="grid md:grid-cols-2 grid-flow-row gap-8">
        <div>
          <label className="block font-extralight uppercase">Name</label>
          <input className="h-10 border-b border-neutral-300 focus:outline-none focus:border-neutral-600" type="text" />
        </div>
        <div className="md:row-span-2">
          <label className="block font-extralight uppercase">Email</label>
          <input className="h-10 border-b border-neutral-300 focus:outline-none focus:border-neutral-600" type="text" />
        </div>
        <div>
          <label className="block font-extralight uppercase">Message</label>
          <textarea className="h-24 border-b border-neutral-300 focus:outline-none focus:border-neutral-600" />
        </div>
        <button className="block font-extralight uppercase w-32 p-2 border border-1 border-neutral-600 rounded-3xl">Send</button>
      </form>
    </div>
  );
};

export default Form;
