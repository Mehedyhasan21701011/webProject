import banner from '../../assests/image/banner1.png'

const Footer = () => {
    return (
      <footer 
      style={ { background : `url( ${banner})`,
        backgroundSize : 'cover'
    }}
      className="footer p-20 bg-base-200 mt-20 text-white">
      <nav>
        <h6 className="footer-title font-link text-warning">Services</h6> 
        <a className="link link-hover para-link">Branding</a>
        <a className="link link-hover para-link">Design</a>
        <a className="link link-hover para-link">Marketing</a>
        <a className="link link-hover para-link">Advertisement</a>
      </nav> 
      <nav>
        <h6 className="footer-title font-link text-warning">Company</h6> 
        <a className="link link-hover para-link">About us</a>
        <a className="link link-hover para-link">Contact</a>
        <a className="link link-hover para-link">Jobs</a>
        <a className="link link-hover para-link">Press kit</a>
      </nav> 
      <nav>
        <h6 className="footer-title font-link font-bold
         text-warning">Legal</h6> 
        <a className="link link-hover para-link">Terms of use</a>
        <a className="link link-hover para-link">Privacy policy</a>
        <a className="link link-hover para-link">Cookie policy</a>
      </nav> 
      <form>
        <h6 className="footer-title font-link text-warning">Newsletter</h6> 
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text  text-white font-bold para-link">Enter your email address</span>
          </label> 
          <div className="join">
            <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
    )
}
export default Footer;