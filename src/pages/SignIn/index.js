/*import React, { useState } from 'react';
import { app, auth } from '../../firebase';
import { RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";
import './styles.css'
import { Cookies } from 'react-cookie';
import PhoneInput from "react-phone-number-input";

const Login = () => {
	// Inputs
	const [mynumber, setnumber] = useState("");
	const [otp, setotp] = useState('');
	const [userid, setUserid] = useState('');
	const [show, setshow] = useState(false);
	const [final, setfinal] = useState('');

	const cookies = new Cookies();


	// Sent OTP
	const signin = () => {

		if (mynumber === "" || mynumber.length < 10) return;
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
		signInWithPhoneNumber(auth, "+91" + mynumber, window.recaptchaVerifier).then((result) => {
			console.log(auth.currentUser.uid);
			setfinal(result);
			alert("code sent")
			setshow(true);
		})
			.catch((err) => {
				alert(err);
				window.location.reload()
			});
	}

	// Validate OTP
	const ValidateOtp = () => {
		if (otp === null || final === null)
			return;
		final.confirm(otp).then((result) => {
			// success
			console.log(auth.currentUser.uid);
			cookies.set("userid", auth.currentUser.uid);
		}).catch((err) => {
			alert("Wrong code");
			cookies.set("userid", auth.currentUser.uid);
		})
	}

	return (
		<div style={{ "marginTop": "200px" }}>
			<center>
				<div style={{ display: !show ? "block" : "none" }}>
					<input className="phone-input" value={mynumber} onChange={(e) => {
					setnumber(e.target.value) }}
						placeholder="Phone Number" class="w-2xl h-3xl text-lg text-PrimaryCyan tracking-widest p-base border-2 border-PrimaryCyan rounded-lg"/>
					<br /><br />
					<div id="recaptcha-container"></div>
					<button onClick={signin} className="bg-transparent hover:bg-PrimaryCyan text-PrimaryCyan font-semibold hover:text-white py-2 px-4 border border-PrimaryCyan hover:border-transparent rounded">Send OTP</button>
				</div>
				<div style={{ display: show ? "block" : "none" }}>
					<input type="text" class="w-2xl h-3xl text-lg text-PrimaryCyan tracking-widest p-base border-2 border-PrimaryCyan rounded-lg" placeholder={"Enter your OTP"}
						onChange={(e) => { setotp(e.target.value) }}></input>
					<br /><br />
					<button onClick={ValidateOtp} className="bg-transparent hover:bg-PrimaryCyan text-PrimaryCyan font-semibold hover:text-white py-2 px-4 border border-PrimaryCyan hover:border-transparent rounded">Verify</button>
				</div>
			</center>
		</div>
	);
}

export default Login;
*/
/*import React, { useState } from 'react';
import { app, auth } from '../../firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import './styles.css'
import { Cookies } from 'react-cookie';
import PhoneInput from 'react-phone-number-input';

import 'react-phone-number-input/style.css'; // Import default styles for react-phone-number-input

const Login = () => {
  // Inputs
  const [mynumber, setnumber] = useState("");
  const [otp, setotp] = useState('');
  const [userid, setUserid] = useState('');
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState('');

  const cookies = new Cookies();

  // Sent OTP
  const signin = () => {
    if (mynumber === "" || mynumber.length < 10) return;
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
    signInWithPhoneNumber(auth, "+91" + mynumber, window.recaptchaVerifier).then((result) => {
      console.log(auth.currentUser.uid);
      setfinal(result);
      alert("code sent")
      setshow(true);
    })
    .catch((err) => {
      alert(err);
      window.location.reload();
    });
  }

  // Validate OTP
  const ValidateOtp = () => {
    if (otp === null || final === null)
      return;
    final.confirm(otp).then((result) => {
      // success
      console.log(auth.currentUser.uid);
      cookies.set("userid", auth.currentUser.uid);
    }).catch((err) => {
      alert("Wrong code");
      cookies.set("userid", auth.currentUser.uid);
    })
  }

  return (
    <div style={{ "marginTop": "200px" }}>
      <center>
        <div style={{ display: !show ? "block" : "none" }}>
          <PhoneInput
            international
            defaultCountry="IN"
            value={mynumber}
            onChange={setnumber}
            placeholder="Phone Number"
            inputClassName="phone-input"
            countrySelectClassName="phone-input-country"
          />
          <br /><br />
          <div id="recaptcha-container"></div>
          <button onClick={signin} className="bg-transparent hover:bg-PrimaryCyan text-PrimaryCyan font-semibold hover:text-white py-2 px-4 border border-PrimaryCyan hover:border-transparent rounded">Send OTP</button>
        </div>
        <div style={{ display: show ? "block" : "none" }}>
          <input type="text" className="w-2xl h-3xl text-lg text-PrimaryCyan tracking-widest p-base border-2 border-PrimaryCyan rounded-lg" placeholder={"Enter your OTP"}
            onChange={(e) => { setotp(e.target.value) }}></input>
          <br /><br />
          <button onClick={ValidateOtp} className="bg-transparent hover:bg-PrimaryCyan text-PrimaryCyan font-semibold hover:text-white py-2 px-4 border border-PrimaryCyan hover:border-transparent rounded">Verify</button>
        </div>
      </center>
    </div>
  );
}

export default Login;
*/
/*import React, { useState } from 'react';
import { app, auth } from '../../firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './styles.css';
import { Cookies } from 'react-cookie';

const Login = () => {
  // Inputs
  const [mynumber, setnumber] = useState('');
  const [otp, setotp] = useState('');
  const [userid, setUserid] = useState('');
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState('');

  const cookies = new Cookies();

  // Sent OTP
  const signin = () => {
    if (mynumber === '' || mynumber.length < 10) return;
    window.recaptchaVerifier = new RecaptchaVerifier(
      'recaptcha-container',
      {},
      auth
    );
    signInWithPhoneNumber(
      auth,
      '+91' + mynumber,
      window.recaptchaVerifier
    )
      .then((result) => {
        console.log(auth.currentUser.uid);
        setfinal(result);
        alert('Code sent');
        setshow(true);
      })
      .catch((err) => {
        alert(err);
        window.location.reload();
      });
  };

  // Validate OTP
  const ValidateOtp = () => {
    if (otp === null || final === null) return;
    final
      .confirm(otp)
      .then((result) => {
        // success
        console.log(auth.currentUser.uid);
        cookies.set('userid', auth.currentUser.uid);
      })
      .catch((err) => {
        alert('Wrong code');
        cookies.set('userid', auth.currentUser.uid);
      });
  };

  return (
    <div style={{ marginTop: '200px' }}>
      <center>
        <div style={{ display: !show ? 'block' : 'none' }}>
          <PhoneInput
            country="IN"
            value={mynumber}
            onChange={setnumber}
            placeholder="Phone Number"
            inputProps={{
              className: 'phone-input',
            }}
            dropdownClass="phone-input-country"
          />
          <input
            className="w-2xl h-3xl text-lg text-PrimaryCyan tracking-widest p-base border-2 border-PrimaryCyan rounded-lg"
            value={mynumber}
            onChange={(e) => {
              setnumber(e.target.value);
            }}
            placeholder="Phone Number"
          />
          <br />
          <br />
          <div id="recaptcha-container"></div>
          <button
            onClick={signin}
            className="bg-transparent hover:bg-PrimaryCyan text-PrimaryCyan font-semibold hover:text-white py-2 px-4 border border-PrimaryCyan hover:border-transparent rounded"
          >
            Send OTP
          </button>
        </div>
        <div style={{ display: show ? 'block' : 'none' }}>
          <input
            type="text"
            className="w-2xl h-3xl text-lg text-PrimaryCyan tracking-widest p-base border-2 border-PrimaryCyan rounded-lg"
            placeholder="Enter your OTP"
            onChange={(e) => {
              setotp(e.target.value);
            }}
          ></input>
          <br />
          <br />
          <button
            onClick={ValidateOtp}
            className="bg-transparent hover:bg-PrimaryCyan text-PrimaryCyan font-semibold hover:text-white py-2 px-4 border border-PrimaryCyan hover:border-transparent rounded"
          >
            Verify
          </button>
        </div>
      </center>
    </div>
  );
};

export default Login;
*/

/*import React, { useState } from 'react';
import { app, auth } from '../../firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import './styles.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './styles.css';
import OtpInput from 'react-otp-input';
import { Cookies } from 'react-cookie';
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";


const Login = () => {
  // Inputs
  const [mynumber, setnumber] = useState('+');
  const [otp, setotp] = useState('');
  const [userid, setUserid] = useState('');
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState('');
  const cookies = new Cookies();

  // Sent OTP
  const signin = () => {
    if (mynumber === '' || mynumber<10) return;
    window.recaptchaVerifier = new RecaptchaVerifier(
      'recaptcha-container',
      {},
      auth
    );
    signInWithPhoneNumber(
      auth,
      '+' + mynumber,
      window.recaptchaVerifier
    )
      .then((result) => {
        //console.log(auth.currentUser.uid);
        setfinal(result);
        alert('Code sent');
        setshow(true);
      })
      .catch((err) => {
        alert(err);
        window.location.reload();
      });
  };
  
  // Validate OTp
  const ValidateOtp = () => {
    if (otp === null || final === null) return;
    if (otp.length===6) {
      final
        .confirm(otp)
        .then((result) => {
          // success
          //console.log(auth.currentUser.uid);
          console.log('User singed in sucessfully.')
          cookies.set('userid', auth.currentUser.uid);
        })
        .catch((err) => {
          alert('Wrong code');
          cookies.set('userid', auth.currentUser.uid);
        });
    }
  };
  return (
    <div class="main" style={{ display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh' ,
    backgroundImage: 'url("https://github.com/FluxWealth/WhatsTheApp-frontend/blob/main/public/assets/images/image2.jpeg")',
    backkgroundSize:'cover',backgroundPosition:'center',
    }}>  
      <center>
      <div class='m-auto'>
              <img class="m-auto" src="/assets/images/WhatsappAutomator-7fceac20.svg" alt="" width="150"/>
          </div>
        <div style={{ display: !show ? 'block' : 'none' }}>
        <div class="heading">
          <h1>Registration</h1>
        </div>
        <div class="info">
          <p>Enter your phone number we will send you OTP to verify later</p>
        </div>
        <PhoneInput
            international
            defaultCountry="IN"
            value={mynumber}
            onChange={setnumber}
            placeholder="Phone Number"

            inputClassName="phone-input"
            countrySelectClassName="phone-input-country"
          />
          <input
            className="w-2xl h-3xl text-lg text-Black tracking-widest p-base border-2 border-Black rounded-lg"
            value={mynumber}
            onChange={(e) => {
            setnumber(e.target.value);
            }}
            placeholder="Phone Number"
          />
          <br />
          <br />
          <div id="recaptcha-container"></div>
          <button
            onClick={signin}
            className="bg-transparent hover:bg-PrimaryCyan text-PrimaryCyan font-semibold hover:text-white py-2 px-4 border border-PrimaryCyan hover:border-transparent rounded"
          >
            Send OTP
          </button>
          <div class="text">
            <p>OR</p>
          </div>
        </div>
        <div className="f-icons">
          <a href="https://www.linkedin.com/company/automatiks/">
          <Linkedin color="black" size={"2rem"} />
          </a>
          <a href="https://twitter.com/Automatiks?t=6bqmDbqutbnp_SkuVm6K4Q&s=09">
          <Twitter color="black" size={"2rem"} />
          </a>
        </div>
        <div style={{ display: show ? 'block' : 'none' }}>
        <div class="heading">
          <h1>Verification</h1>
        </div>
        <div class="info">
          <p>Enter the six digit otp:</p>
        </div>
        <div class="otp">
        <OtpInput
          value={otp}
          onChange={setotp}
          numInputs={6}
          renderSeparator={<span>--</span>}
          renderInput={(props) => <input {...props}
          className="otp-input" style={{ width: '40px' }} />}
          />
        </div>
          <br />
          <br/>
          <button
  className={`verify-button ${otp.length === 6 ? "clickable" : ""}`}
  onclick={ValidateOtp}
  disabled={otp.length !== 6}
   >
  Verify
    </button>
        </div>
      </center>
    </div>
  );
};

export default Login;
*/
import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { app, auth } from "../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import "./styles.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./styles.css";
import { Cookies } from "react-cookie";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
//import { Banner } from "components";
import OtpInput from "react-otp-input";
//import PhoneInput from 'react-phone-number-input';
import { useThemeContext } from "providers";

const Login = () => {
  const { theme } = useThemeContext();
  // Inputs
  const [mynumber, setnumber] = useState("+");
  const [otp, setotp] = useState("");
  const [userid, setUserid] = useState("");
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState("");

  const cookies = new Cookies();
  const token = cookies.get("userid");
  const navigate = useNavigate();

  setTimeout(() => {
    if (token != null) {
      navigate("/");
    }
  }, 1000);
  // Sent OTP
  const signin = () => {
    if (mynumber === "" || mynumber < 10) return;
    if (token) navigate("/");
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    signInWithPhoneNumber(auth, "+" + mynumber, window.recaptchaVerifier)
      .then((result) => {
        //console.log(auth.currentUser.uid);
        setfinal(result);
        alert("OTP sent");
        setshow(true);
      })
      .catch((err) => {
        alert(err);
        window.location.reload();
      });
  };

  // Validate OTP
  const ValidateOtp = () => {
    if (otp === null || final === null) return;
    if (otp.length === 6) {
      final
        .confirm(otp)
        .then((result) => {
          cookies.set("userid", auth.currentUser.uid);
          navigate("/");
        })
        .catch((err) => {
          alert("Wrong code");
        });
    }
  };

  return (
    <div
      className="main font-[inter] m-auto rounded-md shadow-2xl pt-10"
      style={{ backgroundColor: theme.backgroundColor.light }}
    >
      <center>
        <div style={{ display: !show ? "block" : "none" }}>
          <h1
            className="text-4xl font-bold"
            style={{ color: theme.color.light }}
          >
            Registration
          </h1>
          <section style={{ color: theme.color.light }} className="mt-2">
            <p>Enter your phone number to recieve OTP</p>
            <p>No Credit Card Required!</p>
          </section>

          <br />

          <PhoneInput
            international
            defaultCountry="IN"
            country={"in"}
            value={mynumber}
            onChange={setnumber}
            inputProps={{
              className: "phone-input",
            }}
            dropdownClass="phone-input-country"
          />
          <br />
          <div id="recaptcha-container"></div>
          <button
            onClick={signin}
            className="bg-transparent hover:bg-PrimaryCyan text-PrimaryCyan font-semibold hover:text-white py-2 px-4 border border-PrimaryCyan hover:border-transparent rounded"
          >
            Send OTP
          </button>
          <div class="text">
            <br />
          </div>
        </div>

        <div style={{ display: show ? "block" : "none" }}>
          <div style={{ display: show ? "block" : "none" }}>
            <div class="heading">
              <h1>Verification</h1>
            </div>
            <div class="info">
              <p>Enter the six digit otp:</p>
            </div>
            <div class="otp">
              <OtpInput
                value={otp}
                onChange={setotp}
                numInputs={6}
                renderSeparator={<span>--</span>}
                renderInput={(props) => (
                  <input
                    {...props}
                    className="otp-input"
                    style={{ width: "40px" }}
                  />
                )}
              />
            </div>
            <br />
            <br />
            <button
              className={`verify-button ${otp.length === 6 ? "clickable" : ""}`}
              onClick={ValidateOtp}
              disabled={otp.length !== 6}
            >
              Verify
            </button>
          </div>
        </div>

        <div class="m-auto">
          <img
            class="m-auto"
            src="/assets/images/WhatsappAutomator-7fceac20.svg"
            alt=""
            width="200"
          />
        </div>

        <div className="f-icons">
          <a href="https://www.linkedin.com/company/automatiks/">
            <Linkedin color="#01CEA5" size={"2rem"} />
          </a>
          <a href="https://twitter.com/Automatiks?t=6bqmDbqutbnp_SkuVm6K4Q&s=09">
            <Twitter color="#01CEA5" size={"2rem"} />
          </a>
        </div>
      </center>
    </div>
  );
};

export default Login;