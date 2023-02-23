import ReactLoading from 'react-loading';

const Loader = () => (
  <div className='loader'>
    <div>
      <ReactLoading type='spin' color='#ffffff' width={150} />
    </div>
    <p>Sending...</p>
  </div>
);

export default Loader;
