import { Link } from 'react-router-dom';
import React from 'react';
import { INote } from '../../models/models';

type NotesCardProps = {
  notes: INote[]
}

const NotesCard: React.FC<NotesCardProps> = ({notes}) => {
  return (
    <div className='w-full pt-8 pb-8 pl-8 pr-8'>
      {
        notes?.map((note, index) => (
          <div key={note.id}>
            <div className={`${index !== (notes.length - 1) ? 'border-b border-neutral-300' : ''} text-white pb-8 pt-8 pr-9`}>
              <div className="mb-1.5 font-extralight uppercase">{note.title}</div>
              <div className="mt-1.5 mb-3 font-extralight line-clamp-2">{note.description}</div>
              <Link className="mt-1.5" to={note.link}>
                <i className="icon-dot" />
                <span className="mt-1.5 mb-2 font-extralight ml-3">Read more</span>
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default NotesCard;
