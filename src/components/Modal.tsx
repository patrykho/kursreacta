import React, {useRef, SyntheticEvent} from 'react';

interface ModalInterface {
  dataToUpdate: {
    indexToUpdate: number;
    title: string;
    time: number;
  };
  toggleModal: Function;
  updateTimebox: Function;
}

export const Modal = ({
  dataToUpdate,
  toggleModal,
  updateTimebox,
}: ModalInterface) => {
  const {indexToUpdate, title, time} = dataToUpdate;
  const titleRef: any = useRef(null);
  const timeRef: any = useRef(null);

  const handleSumbmit = (event: SyntheticEvent): void => {
    event.preventDefault();
    console.log(
      'handleSumbmit: ',
      indexToUpdate,
      titleRef.current.value,
      timeRef.current.value,
    );
    updateTimebox(indexToUpdate, titleRef.current.value, timeRef.current.value);
    titleRef.current.value = '';
    timeRef.current.value = '';
    toggleModal();
  };

  return (
    <div className='modal is-active'>
      <div className='modal-background'></div>
      <div className='modal-card'>
        <header className='modal-card-head'>
          <p className='modal-card-title'>Edit TimeBox</p>
          <button
            onClick={() => {
              toggleModal();
            }}
            className='delete'
            aria-label='close'
          ></button>
        </header>
        <section className='modal-card-body'>
          <form onSubmit={handleSumbmit}>
            <div className='field is-horizontal'>
              <div className='field-label is-normal'>
                <label className='label'>TITLE:</label>
              </div>
              <div className='field-body'>
                <div className='field'>
                  <p className='control'>
                    <input
                      className='input is-rounded'
                      defaultValue={title}
                      ref={titleRef}
                      type='text'
                      placeholder='title'
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className='field is-horizontal'>
              <div className='field-label is-normal'>
                <label className='label'>TIME:</label>
              </div>
              <div className='field-body'>
                <div className='field'>
                  <p className='control'>
                    <input
                      className='input is-rounded'
                      defaultValue={time.toString()}
                      ref={timeRef}
                      type='number'
                      placeholder='time'
                    />
                  </p>
                </div>
              </div>
            </div>
            <button
              onSubmit={handleSumbmit}
              className='button is-success is-fullwidth'
            >
              Save changes
            </button>
          </form>
        </section>
        <footer className='modal-card-foot'>
          <button onClick={() => toggleModal()} className='button'>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};
