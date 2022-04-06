import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Home.css";

export const Bing = ()=>{

  // ========================================
  // breakpoints for carousel
  // ========================================

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      {/* <div id="carausel_first">
        <span>FRESH FAVORITES</span>
        <span>
          Discover more<i className="fas fa-greater-than"></i>
        </span>
      </div> */}
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        keyBoardControl={true}
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        customTransition="all .5"
        transitionDuration={500}
      >     
        <div className="card_wrapper">
          <div className="carousel_img">
          <h3>The BitterSweet Review</h3>
            <img 
              src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAVT4b2.img?h=434&w=799&m=6&q=60&o=f&l=f&x=566&y=260"
              alt="carouser-img"
            />
            <p>
              A Literary Magazine for Queers & Their Friends
            </p>
          </div>
          <div className="hr"></div>
          
         
        </div>
        <div className="card_wrapper">
          <div className="carousel_img">
          <h3>The BitterSweet Review</h3>
            <img 
              src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAVT4b2.img?h=434&w=799&m=6&q=60&o=f&l=f&x=566&y=260"
              alt="carouser-img"
            />
            <p>
              A Literary Magazine for Queers & Their Friends
            </p>
          </div>
          <div className="hr"></div>
          
         
        </div>
        <div className="card_wrapper">
          <div className="carousel_img">
          <h3>The BitterSweet Review</h3>
            <img 
              src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAVT4b2.img?h=434&w=799&m=6&q=60&o=f&l=f&x=566&y=260"
              alt="carouser-img"
            />
            <p>
              A Literary Magazine for Queers & Their Friends
            </p>
          </div>
          <div className="hr"></div>
          
         
        </div>
        <div className="card_wrapper">
          <div className="carousel_img">
          <h3>The BitterSweet Review</h3>
            <img 
              src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAVT4b2.img?h=434&w=799&m=6&q=60&o=f&l=f&x=566&y=260"
              alt="carouser-img"
            />
            <p>
              A Literary Magazine for Queers & Their Friends
            </p>
          </div>
          <div className="hr"></div>
          
         
        </div>
        <div className="card_wrapper">
          <div className="carousel_img">
          <h3>The BitterSweet Review</h3>
            <img 
              src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAVT4b2.img?h=434&w=799&m=6&q=60&o=f&l=f&x=566&y=260"
              alt="carouser-img"
            />
            <p>
              A Literary Magazine for Queers & Their Friends
            </p>
          </div>
          <div className="hr"></div>
          
         
        </div>
        <div className="card_wrapper">
          <div className="carousel_img">
          <h3>The BitterSweet Review</h3>
            <img 
              src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAVT4b2.img?h=434&w=799&m=6&q=60&o=f&l=f&x=566&y=260"
              alt="carouser-img"
            />
            <p>
              A Literary Magazine for Queers & Their Friends
            </p>
          </div>
          <div className="hr"></div>
          
         
        </div>
        <div className="card_wrapper">
          <div className="carousel_img">
          <h3>The BitterSweet Review</h3>
            <img 
              src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAVT4b2.img?h=434&w=799&m=6&q=60&o=f&l=f&x=566&y=260"
              alt="carouser-img"
            />
            <p>
              A Literary Magazine for Queers & Their Friends
            </p>
          </div>
          <div className="hr"></div>
          
         
        </div>
      </Carousel>
    </>
  );
}