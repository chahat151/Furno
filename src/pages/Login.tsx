import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Login() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div style={{ width: '100%' }}>
      <div
        style={{
          maxWidth: '500px',
          backgroundColor: '#fff',
          margin: '50px auto',
          padding: '40px 35px',
          borderRadius: '8px',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h1
            style={{
              fontSize: '32px',
              fontWeight: '600',
              color: '#3b5d50',
              textTransform: 'capitalize',
            }}
          >
            login
          </h1>
        </div>
        <form>
          <div className="form-group mt-2">
            <label
              // className="text-black"
              htmlFor="email"
              style={{ color: '#3b5d50', fontWeight: 500 }}
            >
              Email
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translate(-50%)',
                fontSize: '19px',
                cursor: 'pointer',
              }}
              onClick={() => setShowPassword((val) => !val)}
            >
              {showPassword ? (
                <i
                  className="fa-solid fa-eye-slash"
                  style={{ position: 'relative', left: '2px' }}
                />
              ) : (
                <i className="fa-solid fa-eye" />
              )}
            </div>
            <div className="form-group mt-2">
              <label
                // className="text-black"
                htmlFor="password"
                style={{ color: '#3b5d50', fontWeight: 500 }}
              >
                Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control"
                id="password"
                autoComplete="true"
              />
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary mt-3"
            onClick={() => dispatch({ type: 'account/setID', payload: '43B3H5H4' })}
          >
            Let me in
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
