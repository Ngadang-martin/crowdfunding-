import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../state/actions/AuthActions'

const SignUp = () => {
    const [register, setregister] = useState({
        username: "",
        password: ""
    })
    const payload = useSelector(state => state.authReducer.register)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()     
        dispatch(registerUser(register))
        console.log(payload);
    }
    return (
        <div className="container-scroller">
            <div className="container-fluid page-body-wrapper full-page-wrapper">
                <div className="content-wrapper d-flex align-items-center auth">
                    <div className="row flex-grow">
                        <div className="col-lg-4 mx-auto">
                            <div className="auth-form-light text-left p-5">
                                <div className="brand-logo">
                                    <img alt="Logo" src="../../assets/images/logo.svg" />
                                </div>
                                <h4>New here?</h4>
                                <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                                <form className="pt-3">
                                   {payload.status === 400 ? 
                                        <p className="alert alert-danger">{payload.message}</p>
                                        : null
                                     }
                                    <div className="form-group">
                                        <input type="text" name="username" onChange={(e) => {
                                            setregister({...register , username: e.target.value})
                                        }} className="form-control form-control-lg" id="exampleInputUsername1" placeholder="Username" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" onChange={(e) => {
                                            setregister({...register , password: e.target.value})
                                        }} className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    <div className="mb-4">
                                        <div className="form-check">
                                            <label className="form-check-label text-muted">
                                                <input type="checkbox" className="form-check-input" /> I agree to all Terms & Conditions </label>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <button onClick={handleSubmit} className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn">SIGN UP</button>
                                    </div>
                                    <div className="text-center mt-4 font-weight-light"> Already have an account? <a href="/signin" className="text-primary">Login</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignUp
