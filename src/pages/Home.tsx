import { Link } from "react-router-dom";
import {
  bag,
  couch,
  cross,
  imgGrid1,
  imgGrid2,
  imgGrid3,
  person1,
  person5,
  post1,
  post2,
  post3,
  product1,
  product2,
  product3,
  returnIcon,
  support,
  truck,
  whyChooseUsImg,
} from "../assets/images";

function Home() {
  return (
    <div>
      {/* <!-- Start Hero Section --> */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>
                  Modern Interior <span className="d-block">Design Studio</span>
                </h1>
                <p className="mb-4">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                  tristique.
                </p>
                <p>
                  <Link to="#" className="btn btn-secondary me-2">
                    Shop Now
                  </Link>
                  <Link to="#" className="btn btn-white-outline">
                    Explore
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src={couch} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Hero Section --> */}

      {/* <!-- Start Product Section --> */}
      <div className="product-section">
        <div className="container">
          <div className="row">
            {/* <!-- Start Column 1 --> */}
            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title">
                Crafted with excellent material.
              </h2>
              <p className="mb-4">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.{" "}
              </p>
              <p>
                <Link to="/shop" className="btn">
                  Explore
                </Link>
              </p>
            </div>
            {/* <!-- End Column 1 --> */}

            {/* <!-- Start Column 2 --> */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <Link className="product-item" to="/cart">
                <img src={product1} className="img-fluid product-thumbnail" />
                <h3 className="product-title">Nordic Chair</h3>
                <strong className="product-price">$50.00</strong>

                <span className="icon-cross">
                  <img src={cross} className="img-fluid" />
                </span>
              </Link>
            </div>
            {/* <!-- End Column 2 --> */}

            {/* <!-- Start Column 3 --> */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <Link className="product-item" to="/cart">
                <img src={product2} className="img-fluid product-thumbnail" />
                <h3 className="product-title">Kruzo Aero Chair</h3>
                <strong className="product-price">$78.00</strong>

                <span className="icon-cross">
                  <img src={cross} className="img-fluid" />
                </span>
              </Link>
            </div>
            {/* <!-- End Column 3 --> */}

            {/* <!-- Start Column 4 --> */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <Link className="product-item" to="/cart">
                <img src={product3} className="img-fluid product-thumbnail" />
                <h3 className="product-title">Ergonomic Chair</h3>
                <strong className="product-price">$43.00</strong>

                <span className="icon-cross">
                  <img src={cross} className="img-fluid" />
                </span>
              </Link>
            </div>
            {/* <!-- End Column 4 --> */}
          </div>
        </div>
      </div>
      {/* <!-- End Product Section --> */}

      {/* <!-- Start Why Choose Us Section --> */}
      <div className="why-choose-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <h2 className="section-title">Why Choose Us</h2>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>

              <div className="row my-5">
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img src={truck} alt="Image" className="imf-fluid" />
                    </div>
                    <h3>Fast &amp; Free Shipping</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img src={bag} alt="Image" className="imf-fluid" />
                    </div>
                    <h3>Easy to Shop</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img src={support} alt="Image" className="imf-fluid" />
                    </div>
                    <h3>24/7 Support</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img src={returnIcon} alt="Image" className="imf-fluid" />
                    </div>
                    <h3>Hassle Free Returns</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="img-wrap">
                <img src={whyChooseUsImg} alt="Image" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Why Choose Us Section --> */}

      {/* <!-- Start We Help Section --> */}
      <div className="we-help-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="imgs-grid">
                <div className="grid grid-1">
                  <img src={imgGrid1} alt="Untree.co" />
                </div>
                <div className="grid grid-2">
                  <img src={imgGrid2} alt="Untree.co" />
                </div>
                <div className="grid grid-3">
                  <img src={imgGrid3} alt="Untree.co" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 ps-lg-5">
              <h2 className="section-title mb-4">
                We Help You Make Modern Interior Design
              </h2>
              <p>
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                vulputate velit imperdiet dolor tempor tristique. Pellentesque
                habitant morbi tristique senectus et netus et malesuada
              </p>

              <ul className="list-unstyled custom-list my-4">
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
              </ul>
              <p>
                <Link to="/" className="btn">
                  Explore
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End We Help Section --> */}

      {/* <!-- Start Popular Product --> */}
      <div className="popular-product">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="product-item-sm d-flex">
                <div className="thumbnail">
                  <img src={product1} alt="Image" className="img-fluid" />
                </div>
                <div className="pt-3">
                  <h3>Nordic Chair</h3>
                  <p>
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio{" "}
                  </p>
                  <p>
                    <Link to="#">Read More</Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="product-item-sm d-flex">
                <div className="thumbnail">
                  <img src={product2} alt="Image" className="img-fluid" />
                </div>
                <div className="pt-3">
                  <h3>Kruzo Aero Chair</h3>
                  <p>
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio{" "}
                  </p>
                  <p>
                    <Link to="#">Read More</Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="product-item-sm d-flex">
                <div className="thumbnail">
                  <img src={product3} alt="Image" className="img-fluid" />
                </div>
                <div className="pt-3">
                  <h3>Ergonomic Chair</h3>
                  <p>
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio{" "}
                  </p>
                  <p>
                    <Link to="#">Read More</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Popular Product --> */}

      {/* <!-- Start Testimonial Slider --> */}
      <div className="testimonial-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto text-center">
              <h2 className="section-title">Testimonials</h2>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="testimonial-slider-wrap text-center">
                <div id="testimonial-nav">
                  <span className="prev" data-controls="prev">
                    <span className="fa fa-chevron-left"></span>
                  </span>
                  <span className="next" data-controls="next">
                    <span className="fa fa-chevron-right"></span>
                  </span>
                </div>

                <div className="testimonial-slider">
                  <div className="item">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 mx-auto">
                        <div className="testimonial-block text-center">
                          <blockquote className="mb-5">
                            <p>
                              &ldquo;Donec facilisis quam ut purus rutrum
                              lobortis. Donec vitae odio quis nisl dapibus
                              malesuada. Nullam ac aliquet velit. Aliquam
                              vulputate velit imperdiet dolor tempor tristique.
                              Pellentesque habitant morbi tristique senectus et
                              netus et malesuada fames ac turpis egestas.
                              Integer convallis volutpat dui quis
                              scelerisque.&rdquo;
                            </p>
                          </blockquote>

                          <div className="author-info">
                            <div className="author-pic">
                              <img
                                src={person1}
                                alt="Maria Jones"
                                className="img-fluid"
                              />
                            </div>
                            <h3 className="font-weight-bold">Maria Jones</h3>
                            <span className="position d-block mb-3">
                              CEO, Co-Founder, XYZ Inc.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- END item --> */}

                  <div className="item">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 mx-auto">
                        <div className="testimonial-block text-center">
                          <blockquote className="mb-5">
                            <p>
                              &ldquo;Donec facilisis quam ut purus rutrum
                              lobortis. Donec vitae odio quis nisl dapibus
                              malesuada. Nullam ac aliquet velit. Aliquam
                              vulputate velit imperdiet dolor tempor tristique.
                              Pellentesque habitant morbi tristique senectus et
                              netus et malesuada fames ac turpis egestas.
                              Integer convallis volutpat dui quis
                              scelerisque.&rdquo;
                            </p>
                          </blockquote>

                          <div className="author-info">
                            <div className="author-pic">
                              <img
                                src={person5}
                                alt="Maria Jones"
                                className="img-fluid"
                              />
                            </div>
                            <h3 className="font-weight-bold">Maria Jones</h3>
                            <span className="position d-block mb-3">
                              CEO, Co-Founder, XYZ Inc.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- END item --> */}

                  <div className="item">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 mx-auto">
                        <div className="testimonial-block text-center">
                          <blockquote className="mb-5">
                            <p>
                              &ldquo;Donec facilisis quam ut purus rutrum
                              lobortis. Donec vitae odio quis nisl dapibus
                              malesuada. Nullam ac aliquet velit. Aliquam
                              vulputate velit imperdiet dolor tempor tristique.
                              Pellentesque habitant morbi tristique senectus et
                              netus et malesuada fames ac turpis egestas.
                              Integer convallis volutpat dui quis
                              scelerisque.&rdquo;
                            </p>
                          </blockquote>

                          <div className="author-info">
                            <div className="author-pic">
                              <img
                                src={person5}
                                alt="Maria Jones"
                                className="img-fluid"
                              />
                            </div>
                            <h3 className="font-weight-bold">Maria Jones</h3>
                            <span className="position d-block mb-3">
                              CEO, Co-Founder, XYZ Inc.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- END item --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Testimonial Slider --> */}

      {/* <!-- Start Blog Section --> */}
      <div className="blog-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6">
              <h2 className="section-title">Recent Blog</h2>
            </div>
            <div className="col-md-6 text-start text-md-end">
              <Link to="#" className="more">
                View All Posts
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <Link to="#" className="post-thumbnail">
                  <img src={post1} alt="Image" className="img-fluid" />
                </Link>
                <div className="post-content-entry">
                  <h3>
                    <Link to="#">First Time Home Owner Ideas</Link>
                  </h3>
                  <div className="meta">
                    <span>
                      by <Link to="#">Kristin Watson</Link>
                    </span>{" "}
                    <span>
                      on <Link to="#">Dec 19, 2021</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <Link to="#" className="post-thumbnail">
                  <img src={post2} alt="Image" className="img-fluid" />
                </Link>
                <div className="post-content-entry">
                  <h3>
                    <Link to="#">How To Keep Your Furniture Clean</Link>
                  </h3>
                  <div className="meta">
                    <span>
                      by <Link to="#">Robert Fox</Link>
                    </span>{" "}
                    <span>
                      on <Link to="#">Dec 15, 2021</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <Link to="#" className="post-thumbnail">
                  <img src={post3} alt="Image" className="img-fluid" />
                </Link>
                <div className="post-content-entry">
                  <h3>
                    <Link to="#">Small Space Furniture Apartment Ideas</Link>
                  </h3>
                  <div className="meta">
                    <span>
                      by <Link to="#">Kristin Watson</Link>
                    </span>{" "}
                    <span>
                      on <Link to="#">Dec 12, 2021</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Blog Section -->	 */}
    </div>
  );
}

export default Home;
