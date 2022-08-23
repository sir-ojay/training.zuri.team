import React from 'react'
import './enroll.css'

const enroll = () => {
  return (
    <div>
      <h3>ENTER YOUR DETAILS TO JOIN THE WAIT LIST FOR THE NEXT COHORT</h3>
      <div>
        <div className="enroll-form">
          <div className="enroll-reg">
            <h2>Register</h2>
            <div className="enroll-logo">
              <img
                src="https://training.zuri.team/logo1.png"
                alt="enroll logo"
              />
            </div>
          </div>

          <div className="enroll-flex">
            <div className="enroll-left">
              <div>
                <label htmlFor="">First name</label>
              </div>

              <div>
                <input type="text" />
              </div>
            </div>

            <div className="enroll-right">
              <div>
                <label htmlFor="">Last name</label>
              </div>

              <div>
                <input type="text" />
              </div>
            </div>
          </div>

          <div className="enroll-default">
            <div>
              <label htmlFor="">Email Address</label>
            </div>
            <div>
              {" "}
              <input type="email" name="" id="" style={{ width: "50%" }} />
            </div>
          </div>

          <div className="enroll-flex">
            <div className="enroll-left">
              <div>
                <label htmlFor="">Phone Number</label>
              </div>
              <div>
                <input type="text" />
              </div>
            </div>

            <div className="enroll-right">
              <div>
                <label htmlFor="">How much time can you dedicate?</label>
              </div>

              <div>
                <select>
                  <option value=""></option>
                  <option value="">5 - 10 hours weekly</option>
                  <option value=""> 11 - 15 hours weekly</option>
                  <option value=""> 16 - 24 hours weekly</option>
                  <option value=""> 25+ hours weekly</option>
                </select>
              </div>
            </div>
          </div>

          <div className="enroll-flex">
            <div className="enroll-left">
              <div>
                <label htmlFor="">Country</label>
              </div>
              
              <div>
                <select name="" id="">
                  <option value="">Select...</option>
                  <option value="">Afghanistan</option>
                  <option value="">Albania</option>
                  <option value=""> Algeria</option>
                  <option value="">Andorra</option>
                  <option value=""> Angola</option>
                  <option value="">Antigua and Barbuda</option>
                  <option value="">Argentina</option>
                  <option value="">Armenia</option>
                  <option value="">Australia</option>
                  <option value="">Austria</option>
                  <option value="">Azerbaijan</option>
                  <option value="">Bahamas</option>
                  <option value=""> Bahrain</option>
                  <option value="">Bangladesh</option>
                  <option value="">Barbados</option>
                  <option value="">Belarus</option>
                  <option value="">Belgium</option>
                  <option value="">Belize</option>
                  <option value="">Benin</option>
                  <option value="">Bhutan</option>
                  <option value=""> Bolivia</option>
                  <option value="">Bosnia and Herzegovina</option>
                  <option value="">Botswana</option>
                  <option value=""> Brazil</option>
                  <option value="">Brunei</option>
                  <option value="">Bulgaria</option>
                  <option value="">Burkina Faso</option>
                  <option value=""> Burundi</option>
                  <option value="">Côte d'Ivoire</option>
                  <option value="">Cabo Verde</option>
                  <option value=""> Cambodia</option>
                  <option value="">Cameroon</option>
                  <option value="">Canada</option>
                  <option value="">Central African Republic</option>
                  <option value="">Chad</option>
                  <option value=""> Chile</option>
                  <option value="">China</option>
                  <option value="">Colombia</option>
                  <option value="">Comoros</option>
                  <option value="">Congo</option>
                  <option value=""> Costa Rica</option>
                  <option value="">Croatia</option>
                  <option value="">Cuba</option>
                  <option value="">Cyprus</option>
                  <option value="">Czech Republic</option>
                  <option value="">Democratic Republic of the Congo</option>
                  <option value="">Denmark</option>
                  <option value="">Djibouti</option>
                  <option value="">Dominica</option>
                  <option value="">Dominican Republic</option>
                  <option value="">Ecuador</option>
                  <option value="">Egypt</option>
                  <option value="">El Salvador</option>
                  <option value="">Equatorial Guinea</option>
                  <option value="">Eritrea</option>
                  <option value="">Estonia</option>
                  <option value="">Eswatini</option>
                  <option value="">Ethiopia</option>
                  <option value="">Fiji</option>
                  <option value="">Finland</option>
                  <option value="">France</option>
                  <option value="">Gabon</option>
                  <option value="">Gambia</option>
                  <option value="">Georgia</option>
                  <option value="">Germany</option>
                  <option value="">Ghana</option>
                  <option value="">Greece</option>
                  <option value="">Grenada</option>
                  <option value="">Guatemala</option>
                  <option value="">Guinea</option>
                  <option value="">Guinea-Bissau</option>
                  <option value=""> Guyana</option>
                  <option value="">Haiti</option>
                  <option value="">Holy See</option>
                  <option value="">Honduras</option>
                  <option value="">Hungary</option>
                  <option value="">Iceland</option>
                  <option value="">India</option>
                  <option value="">Indonesia</option>
                  <option value="">Iran</option>
                  <option value=""> Iraq</option>
                  <option value="">Ireland</option>
                  <option value="">Israel</option>
                  <option value="">Italy</option>
                  <option value="">Jamaica</option>
                  <option value="">Japan</option>
                  <option value="">Jordan</option>
                  <option value="">Kazakhstan</option>
                  <option value=""> Kenya</option>
                  <option value=""> Kiribati</option>
                  <option value=""> Kuwait</option>
                  <option value="">Kyrgyzstan</option>
                  <option value="">Laos</option>
                  <option value="">Latvia</option>
                  <option value=""> Lebanon</option>
                  <option value="">Lesotho</option>
                  <option value="">Liberia</option>
                  <option value="">Libya</option>
                  <option value="">Liechtenstein</option>
                  <option value="">Lithuania</option>
                  <option value="">Luxembourg</option>
                  <option value="">Madagascar</option>
                  <option value="">Malawi</option>
                  <option value="">Malaysia</option>
                  <option value="">Maldives</option>
                  <option value="">Mali</option>
                  <option value="">Malta</option>
                  <option value="">Marshall Islands</option>
                  <option value="">Mauritania</option>
                  <option value="">Mauritius</option>
                  <option value="">Mexico</option>
                  <option value="">Micronesia</option>
                  <option value=""> Moldova</option>
                  <option value="">Monaco</option>
                  <option value=""> Mongolia</option>
                  <option value="">Montenegro</option>
                  <option value=""> Morocco</option>
                  <option value="">Mozambique</option>
                  <option value="">Myanmar </option>
                  <option value="">Namibia</option>
                  <option value="">Nauru</option>
                  <option value="">Nepal</option>
                  <option value="">Netherlands</option>
                  <option value="">New Zealand</option>
                  <option value="">Nicaragua</option>
                  <option value="">Niger</option>
                  <option value=""> Nigeria</option>
                  <option value="">North Korea</option>
                  <option value=""> North Macedonia</option>
                  <option value="">Norway</option>
                  <option value=""> Oman</option>
                  <option value="">Pakistan</option>
                  <option value=""> Palau</option>
                  <option value="">Palestine State</option>
                  <option value="">Panama</option>
                  <option value="">Papua New Guinea</option>
                  <option value="">Paraguay</option>
                  <option value="">Peru</option>
                  <option value="">Philippines</option>
                  <option value="">Poland</option>
                  <option value="">Portugal</option>
                  <option value=""> Qatar</option>
                  <option value="">Romania</option>
                  <option value="">Russia</option>
                  <option value=""> Rwanda</option>
                  <option value="">Saint Kitts and Nevis</option>
                  <option value="">Saint Lucia</option>
                  <option value="">Saint Vincent and the Grenadines</option>
                  <option value="">Samoa</option>
                 
                </select>
              </div>
            </div>
            <div className="enroll-right">
              <div>
                <label htmlFor="">Track</label>
              </div>
              <div>
                <input type="text" />
              </div>
            </div>
          </div>

          <div className="enroll-flex">
            <div className="enroll-left">
              <div>
                <label htmlFor="">Gender</label>
              </div>
              <div>
                {" "}
                <input type="text" />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="">Age Range</label>
              </div>
              <div>
                <input type="text" />
              </div>
            </div>
          </div>

          <div className="enroll-flex">
            <div className="enroll-left">
              <div>
                <label htmlFor="">Experience Level</label>
              </div>
              <div className="enroll-right">
                <input type="text" />
              </div>
            </div>

            <div className="enroll-default">
              <label htmlFor="">Highest Educational Qualification</label>
              <input type="text" />
            </div>
          </div>

          <div className="enroll-flex">
            <div>
              <label htmlFor="">
                Any disability you'll like us to know about?
              </label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">
                Provide more information (only if 1 is yes)
              </label>
              <input type="text" />
            </div>
          </div>

          <div className="enroll-flex">
            <div>
              <label htmlFor="">Employment Status</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">How did you hear about us?</label>
              <input type="text" />
            </div>
          </div>

          <div className="enroll-flex">
            <div>
              <div>
                <label htmlFor="">
                  Say something about yourself in one sentence
                </label>
              </div>
              <div>
                <input type="text" />
              </div>
            </div>
          </div>

          <div className="enroll-button">
            <button>Enroll Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default enroll