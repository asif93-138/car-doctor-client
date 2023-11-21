import photo from '../public/assets/images/about_us/person.jpg';
import subPhoto from '../public/assets/images/about_us/parts.jpg';
import img1 from '../public/assets/images/services/2.jpg';
import img2 from '../public/assets/images/services/4.jpg';
import img3 from '../public/assets/images/services/6.jpg';
import img4 from '../public/assets/images/services/3.jpg';
import img5 from '../public/assets/images/services/1.jpg';
import img6 from '../public/assets/images/services/5.jpg';
import './Styles.css';

function App() {


  return (
    <>

      <div id="demo" className="carousel slide container mb-5" data-bs-ride="carousel">


        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
        </div>


        <div className="carousel-inner rounded-4">
          <div className="carousel-item active position-parent">
            <div className='positioning text-white slider'>
              <b><h1 className='text-heavy'>Affordable <br />Price For Car <br />Servicing</h1></b>
              <p className='mt-4 mb-5'>There are many variations of passages of  available, <br />but the majority have suffered alteration in some form</p>
              <button type='button' className='btn btn-danger'>Discover More</button> &nbsp; &nbsp;
              <button type='button' className='btn btn-outline-dark btn-custom'>Latest Project</button>
            </div>
          </div>
          <div className="carousel-item position-parent-1">
            <div className='positioning text-white slider'>
              <b><h1 className='text-heavy'>Affordable <br />Price For Car <br />Servicing</h1></b>
              <p className='mt-4 mb-5'>There are many variations of passages of  available, <br />but the majority have suffered alteration in some form</p>
              <button type='button' className='btn btn-danger'>Discover More</button> &nbsp; &nbsp;
              <button type='button' className='btn btn-outline-dark btn-custom'>Latest Project</button>
            </div>
          </div>
          <div className="carousel-item position-parent-2">
            <div className='positioning text-white slider'>
              <b><h1 className='text-heavy'>Affordable <br />Price For Car <br />Servicing</h1></b>
              <p className='mt-4 mb-5'>There are many variations of passages of  available, <br />but the majority have suffered alteration in some form</p>
              <button type='button' className='btn btn-danger'>Discover More</button> &nbsp; &nbsp;
              <button type='button' className='btn btn-outline-dark btn-custom'>Latest Project</button>
            </div>
          </div>
          <div className="carousel-item position-parent-3">
            <div className='positioning text-white slider'>
              <b><h1 className='text-heavy'>Affordable <br />Price For Car <br />Servicing</h1></b>
              <p className='mt-4 mb-5'>There are many variations of passages of  available, <br />but the majority have suffered alteration in some form</p>
              <button type='button' className='btn btn-danger'>Discover More</button> &nbsp; &nbsp;
              <button type='button' className='btn btn-outline-dark btn-custom'>Latest Project</button>
            </div>
          </div>
          <div className="carousel-item position-parent-4">
            <div className='positioning text-white slider'>
              <b><h1 className='text-heavy'>Affordable <br />Price For Car <br />Servicing</h1></b>
              <p className='mt-4 mb-5'>There are many variations of passages of  available, <br />but the majority have suffered alteration in some form</p>
              <button type='button' className='btn btn-danger'>Discover More</button> &nbsp; &nbsp;
              <button type='button' className='btn btn-outline-dark btn-custom'>Latest Project</button>
            </div>
          </div>
          <div className="carousel-item position-parent-6">
            <div className='positioning text-white slider'>
              <b><h1 className='text-heavy'>Affordable <br />Price For Car <br />Servicing</h1></b>
              <p className='mt-4 mb-5'>There are many variations of passages of  available, <br />but the majority have suffered alteration in some form</p>
              <button type='button' className='btn btn-danger'>Discover More</button> &nbsp; &nbsp;
              <button type='button' className='btn btn-outline-dark btn-custom'>Latest Project</button>
            </div>
          </div>
        </div>


        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      <div className='container pb-5 d-flex'>
        <section className='ab-pos'>
        <img src={photo} className='ab-ph' /><br />
        <img src={subPhoto} className='ab-sub-ph' />
        </section>
        <article className='p-5 ms-5'>
          <h5 className='text-danger'>About Us</h5>
          <h1>We are qualified & of experience in this field</h1>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <button type='button' className='btn btn-danger'>Get More Info</button>
        </article>
      </div>
      <div className='container'>
      <article className='text-center'>
      <h5 className='text-danger'>Service</h5>
      <h2>Our Service Area</h2>
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration <br />in some form, by injected humour, or randomised words</p>
      </article>
      <section className='grid'>
        <div className='border  dorder-dark p-3 m-3 g-col-4'>
          <img src={img1} className='img-fluid' />
          <h5 className='my-3'>Electrical System</h5>
          <div className='d-flex justify-content-between align-items-center'>
          <h6 className='text-danger'>Price : $20</h6>
          <button type='' className='btn border border-0 p-0 text-danger'><i className="bi bi-arrow-right-circle fs-2"></i></button>
          </div>
        </div>
        <div className='border  dorder-dark p-3 m-3 g-col-4'>
          <img src={img2} className='img-fluid' />
          <h5 className='my-3'>Engine Diagnostics</h5>
          <div className='d-flex justify-content-between align-items-center'>
          <h6 className='text-danger'>Price : $20</h6>
          <button type='' className='btn border border-0 p-0 text-danger'><i className="bi bi-arrow-right-circle fs-2"></i></button>
          </div>
        </div>
        <div className='border  dorder-dark p-3 m-3 g-col-4'>
          <img src={img3} className='img-fluid' />
          <h5 className='my-3'>Auto car Repair</h5>
          <div className='d-flex justify-content-between align-items-center'>
          <h6 className='text-danger'>Price : $20</h6>
          <button type='' className='btn border border-0 p-0 text-danger'><i className="bi bi-arrow-right-circle fs-2"></i></button>
          </div>
        </div>
        <div className='border  dorder-dark p-3 m-3 g-col-4'>
          <img src={img4} className='img-fluid' />
          <h5 className='my-3'>Electrical System</h5>
          <div className='d-flex justify-content-between align-items-center'>
          <h6 className='text-danger'>Price : $20</h6>
          <button type='' className='btn border border-0 p-0 text-danger'><i className="bi bi-arrow-right-circle fs-2"></i></button>
          </div>
        </div>
        <div className='border  dorder-dark p-3 m-3 g-col-4'>
          <img src={img5} className='img-fluid' />
          <h5 className='my-3'>Engine Diagnostics</h5>
          <div className='d-flex justify-content-between align-items-center'>
          <h6 className='text-danger'>Price : $20</h6>
          <button type='' className='btn border border-0 p-0 text-danger'><i className="bi bi-arrow-right-circle fs-2"></i></button>
          </div>
        </div>
        <div className='border  dorder-dark p-3 m-3 g-col-4'>
          <img src={img6} className='img-fluid' />
          <h5 className='my-3'>Auto car Repair</h5>
          <div className='d-flex justify-content-between align-items-center'>
          <h6 className='text-danger'>Price : $20</h6>
          <button type='' className='btn border border-0 p-0 text-danger'><i className="bi bi-arrow-right-circle fs-2"></i></button>
          </div>
        </div>
      </section>
      <div className='d-flex justify-content-center'><button type='button' className='btn btn-outline-danger'>More Services</button></div>
      </div>
    </>
  )
}

export default App
