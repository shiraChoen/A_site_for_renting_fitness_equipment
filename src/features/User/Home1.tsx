
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic1 from '../../pictures/p1.jpg'
import pic6 from '../../pictures/p6.jpg'
import pic7 from '../../pictures/p7.jpg'
import pic2 from '../../pictures/p2.jpg'
import pic3 from '../../pictures/p4.jpg'
import pic4 from '../../pictures/p5.jpg'
import pic5 from '../../pictures/p8.jpg'
function UncontrolledExample () {
  
  return (<div className='home'>
    <Carousel>
      <Carousel.Item>
        <img 
          className="d-block   w-100"
          style={{border:"1"}}
          
          src={pic1}
          id="slide"
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block   w-100"
          src={pic6}
          id="slide"
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic7}
          id="slide"
          alt="Third slide"
        />
        
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic2}
          id="slide"
          alt="fourth slide"
        />
        
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic4}
          id="slide"
          alt="fiveth slide"
        />
        
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-70"
          src={pic3}
          id="slide"
          alt="sixth slide"
        />
        
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></div>
  );
}
export default UncontrolledExample;