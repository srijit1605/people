import React, { useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import "./AddPeople.css";
import BlueBtn from "../btn/BlueBtn";

const AddPeople = () => {
  const navigate = useNavigate();
  const {
    index,
    userList,
    setUserList,
    profileImage,
    setProfileImage,
    fullName,
    setFullName,
    email,
    setEmail,
    phone,
    setPhone,
    dob,
    setDob,
    country,
    setCountry,
  } = useContext(UserContext);
  useEffect(() => {
    return () => {
      fullName === "Add New Member" && setFullName("");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "fname") {
      setFullName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "phone") {
      setPhone(e.target.value);
    } else if (e.target.name === "dob") {
      setDob(e.target.value);
    } else if (e.target.name === "country") {
      setCountry(e.target.value);
    } else {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const data = {
      fullName,
      email,
      phone,
      dob,
      country,
      profileImage,
    };

    const saveData = () => {
      if (index === 0 || index > userList.length) {
        setUserList([...userList, data]);
        navigate("/");
      } else {
        const newList = userList.map((user, i) => {
          if (i === index) {
            return data;
          } else {
            return user;
          }
        });
        setUserList(newList);
        navigate("/");
      }
    };

    axios
      .post("https://dummyjson.com/users/add", {
        fullName: fullName,
        email: email,
        phone: phone,
        dob: dob,
        country: country,
        profileImage: profileImage,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log("data: ", data);
    fullName && email && phone && dob && country && profileImage
      ? saveData()
      : alert("Please fill up all the details...");
  };
  return (
    <div className="form-page-layout">
      <h2>Add New Record...</h2>
      <form>
        <div className="form-alignment">
          <div className="profile-pic">
            <label className="-label" for="file">
              <span>Change Image</span>
            </label>
            <input id="file" type="file" onChange={handleChange} />
            <img
              src={profileImage}
              title={fullName}
              alt={fullName}
              id="output"
              width="200"
            />
          </div>

          <div>
            <div className="input-alignment">
              <label htmlFor="fname">Name: </label>
              <input
                className="input-design"
                placeholder="John Doe"
                type="text"
                value={fullName}
                onChange={handleChange}
                id="fname"
                name="fname"
              />
            </div>

            <div className="input-alignment">
              <label htmlFor="email">email:</label>
              <input
                className="input-design"
                type="email"
                placeholder="johndoe@domain.com"
                value={email}
                onChange={handleChange}
                id="email"
                name="email"
              />
              </div>
            <div className="input-alignment">
              <label htmlFor="phone">Contact:</label>
              <input
                className="input-design"
                placeholder="1234567890"
                type="tel"
                onChange={handleChange}
                value={phone}
                id="phone"
                name="phone"
              />
            </div>
            <div className="input-alignment">
              <label htmlFor="dob">Date of Birth:</label>
              <input
                className="input-design"
                type="date"
                value={dob}
                onChange={handleChange}
                id="dob"
                name="dob"
              />
              </div>
            <div className="input-alignment">
              <label htmlFor="country">Country: </label>
              <select
                className="select-input-design"
                name="country"
                id="country"
                onChange={handleChange}
              >
                <option
                  value="0"
                  label="Select a country ... "
                  selected={country ? false : true}
                >
                  Select a country ...{" "}
                </option>
                <optgroup id="country-optgroup-Africa" label="Africa">
                  <option
                    value="DZ"
                    label="Algeria"
                    selected={country === "DZ"}
                  >
                    Algeria
                  </option>
                  <option value="AO" label="Angola" selected={country === "AO"}>
                    Angola
                  </option>
                  <option value="BJ" label="Benin" selected={country === "BJ"}>
                    Benin
                  </option>
                  <option
                    value="BW"
                    label="Botswana"
                    selected={country === "BW"}
                  >
                    Botswana
                  </option>
                  <option
                    value="BF"
                    label="Burkina Faso"
                    selected={country === "BF"}
                  >
                    Burkina Faso
                  </option>
                  <option
                    value="BI"
                    label="Burundi"
                    selected={country === "BI"}
                  >
                    Burundi
                  </option>
                  <option
                    value="CM"
                    label="Cameroon"
                    selected={country === "CM"}
                  >
                    Cameroon
                  </option>
                  <option
                    value="CV"
                    label="Cape Verde"
                    selected={country === "CV"}
                  >
                    Cape Verde
                  </option>
                  <option
                    value="CF"
                    label="Central African Republic"
                    selected={country === "CF"}
                  >
                    Central African Republic
                  </option>
                  <option value="TD" label="Chad" selected={country === "TD"}>
                    Chad
                  </option>
                  <option
                    value="KM"
                    label="Comoros"
                    selected={country === "KM"}
                  >
                    Comoros
                  </option>
                  <option
                    value="CG"
                    label="Congo - Brazzaville"
                    selected={country === "CG"}
                  >
                    Congo - Brazzaville
                  </option>
                  <option
                    value="CD"
                    label="Congo - Kinshasa"
                    selected={country === "CD"}
                  >
                    Congo - Kinshasa
                  </option>
                  <option
                    value="CI"
                    label="Côte d’Ivoire"
                    selected={country === "CI"}
                  >
                    Côte d’Ivoire
                  </option>
                  <option
                    value="DJ"
                    label="Djibouti"
                    selected={country === "DJ"}
                  >
                    Djibouti
                  </option>
                  <option value="EG" label="Egypt" selected={country === "EG"}>
                    Egypt
                  </option>
                  <option
                    value="GQ"
                    label="Equatorial Guinea"
                    selected={country === "GQ"}
                  >
                    Equatorial Guinea
                  </option>
                  <option
                    value="ER"
                    label="Eritrea"
                    selected={country === "ER"}
                  >
                    Eritrea
                  </option>
                  <option
                    value="ET"
                    label="Ethiopia"
                    selected={country === "ET"}
                  >
                    Ethiopia
                  </option>
                  <option value="GA" label="Gabon" selected={country === "GA"}>
                    Gabon
                  </option>
                  <option value="GM" label="Gambia" selected={country === "GM"}>
                    Gambia
                  </option>
                  <option value="GH" label="Ghana" selected={country === "GH"}>
                    Ghana
                  </option>
                  <option value="GN" label="Guinea" selected={country === "GN"}>
                    Guinea
                  </option>
                  <option
                    value="GW"
                    label="Guinea-Bissau"
                    selected={country === "GW"}
                  >
                    Guinea-Bissau
                  </option>
                  <option value="KE" label="Kenya" selected={country === "KE"}>
                    Kenya
                  </option>
                  <option
                    value="LS"
                    label="Lesotho"
                    selected={country === "LS"}
                  >
                    Lesotho
                  </option>
                  <option
                    value="LR"
                    label="Liberia"
                    selected={country === "LR"}
                  >
                    Liberia
                  </option>
                  <option value="LY" label="Libya" selected={country === "LY"}>
                    Libya
                  </option>
                  <option
                    value="MG"
                    label="Madagascar"
                    selected={country === "MG"}
                  >
                    Madagascar
                  </option>
                  <option value="MW" label="Malawi" selected={country === "MW"}>
                    Malawi
                  </option>
                  <option value="ML" label="Mali" selected={country === "ML"}>
                    Mali
                  </option>
                  <option
                    value="MR"
                    label="Mauritania"
                    selected={country === "MR"}
                  >
                    Mauritania
                  </option>
                  <option
                    value="MU"
                    label="Mauritius"
                    selected={country === "MU"}
                  >
                    Mauritius
                  </option>
                  <option
                    value="YT"
                    label="Mayotte"
                    selected={country === "YT"}
                  >
                    Mayotte
                  </option>
                  <option
                    value="MA"
                    label="Morocco"
                    selected={country === "MA"}
                  >
                    Morocco
                  </option>
                  <option
                    value="MZ"
                    label="Mozambique"
                    selected={country === "MZ"}
                  >
                    Mozambique
                  </option>
                  <option
                    value="NA"
                    label="Namibia"
                    selected={country === "NA"}
                  >
                    Namibia
                  </option>
                  <option value="NE" label="Niger" selected={country === "NE"}>
                    Niger
                  </option>
                  <option
                    value="NG"
                    label="Nigeria"
                    selected={country === "NG"}
                  >
                    Nigeria
                  </option>
                  <option value="RW" label="Rwanda" selected={country === "RW"}>
                    Rwanda
                  </option>
                  <option
                    value="RE"
                    label="Réunion"
                    selected={country === "RE"}
                  >
                    Réunion
                  </option>
                  <option
                    value="SH"
                    label="Saint Helena"
                    selected={country === "SH"}
                  >
                    Saint Helena
                  </option>
                  <option
                    value="SN"
                    label="Senegal"
                    selected={country === "SN"}
                  >
                    Senegal
                  </option>
                  <option
                    value="SC"
                    label="Seychelles"
                    selected={country === "SC"}
                  >
                    Seychelles
                  </option>
                  <option
                    value="SL"
                    label="Sierra Leone"
                    selected={country === "SL"}
                  >
                    Sierra Leone
                  </option>
                  <option
                    value="SO"
                    label="Somalia"
                    selected={country === "SO"}
                  >
                    Somalia
                  </option>
                  <option
                    value="ZA"
                    label="South Africa"
                    selected={country === "ZA"}
                  >
                    South Africa
                  </option>
                  <option value="SD" label="Sudan" selected={country === "SD"}>
                    Sudan
                  </option>
                  <option
                    value="SZ"
                    label="Swaziland"
                    selected={country === "SZ"}
                  >
                    Swaziland
                  </option>
                  <option
                    value="ST"
                    label="São Tomé and Príncipe"
                    selected={country === "ST"}
                  >
                    São Tomé and Príncipe
                  </option>
                  <option
                    value="TZ"
                    label="Tanzania"
                    selected={country === "TZ"}
                  >
                    Tanzania
                  </option>
                  <option value="TG" label="Togo" selected={country === "TG"}>
                    Togo
                  </option>
                  <option
                    value="TN"
                    label="Tunisia"
                    selected={country === "TN"}
                  >
                    Tunisia
                  </option>
                  <option value="UG" label="Uganda" selected={country === "UG"}>
                    Uganda
                  </option>
                  <option
                    value="EH"
                    label="Western Sahara"
                    selected={country === "EH"}
                  >
                    Western Sahara
                  </option>
                  <option value="ZM" label="Zambia" selected={country === "ZM"}>
                    Zambia
                  </option>
                  <option
                    value="ZW"
                    label="Zimbabwe"
                    selected={country === "ZW"}
                  >
                    Zimbabwe
                  </option>
                </optgroup>
                <optgroup id="country-optgroup-Americas" label="Americas">
                  <option
                    value="AI"
                    label="Anguilla"
                    selected={country === "AI"}
                  >
                    Anguilla
                  </option>
                  <option
                    value="AG"
                    label="Antigua and Barbuda"
                    selected={country === "AG"}
                  >
                    Antigua and Barbuda
                  </option>
                  <option
                    value="AR"
                    label="Argentina"
                    selected={country === "AR"}
                  >
                    Argentina
                  </option>
                  <option value="AW" label="Aruba" selected={country === "AW"}>
                    Aruba
                  </option>
                  <option
                    value="BS"
                    label="Bahamas"
                    selected={country === "BS"}
                  >
                    Bahamas
                  </option>
                  <option
                    value="BB"
                    label="Barbados"
                    selected={country === "BB"}
                  >
                    Barbados
                  </option>
                  <option value="BZ" label="Belize" selected={country === "BZ"}>
                    Belize
                  </option>
                  <option
                    value="BM"
                    label="Bermuda"
                    selected={country === "BM"}
                  >
                    Bermuda
                  </option>
                  <option
                    value="BO"
                    label="Bolivia"
                    selected={country === "BO"}
                  >
                    Bolivia
                  </option>
                  <option value="BR" label="Brazil" selected={country === "BR"}>
                    Brazil
                  </option>
                  <option
                    value="VG"
                    label="British Virgin Islands"
                    selected={country === "VG"}
                  >
                    British Virgin Islands
                  </option>
                  <option value="CA" label="Canada" selected={country === "CA"}>
                    Canada
                  </option>
                  <option
                    value="KY"
                    label="Cayman Islands"
                    selected={country === "KY"}
                  >
                    Cayman Islands
                  </option>
                  <option value="CL" label="Chile" selected={country === "CL"}>
                    Chile
                  </option>
                  <option
                    value="CO"
                    label="Colombia"
                    selected={country === "CO"}
                  >
                    Colombia
                  </option>
                  <option
                    value="CR"
                    label="Costa Rica"
                    selected={country === "CR"}
                  >
                    Costa Rica
                  </option>
                  <option value="CU" label="Cuba" selected={country === "CU"}>
                    Cuba
                  </option>
                  <option
                    value="DM"
                    label="Dominica"
                    selected={country === "DM"}
                  >
                    Dominica
                  </option>
                  <option
                    value="DO"
                    label="Dominican Republic"
                    selected={country === "DO"}
                  >
                    Dominican Republic
                  </option>
                  <option
                    value="EC"
                    label="Ecuador"
                    selected={country === "EC"}
                  >
                    Ecuador
                  </option>
                  <option
                    value="SV"
                    label="El Salvador"
                    selected={country === "SV"}
                  >
                    El Salvador
                  </option>
                  <option
                    value="FK"
                    label="Falkland Islands"
                    selected={country === "FK"}
                  >
                    Falkland Islands
                  </option>
                  <option
                    value="GF"
                    label="French Guiana"
                    selected={country === "GF"}
                  >
                    French Guiana
                  </option>
                  <option
                    value="GL"
                    label="Greenland"
                    selected={country === "GL"}
                  >
                    Greenland
                  </option>
                  <option
                    value="GD"
                    label="Grenada"
                    selected={country === "GD"}
                  >
                    Grenada
                  </option>
                  <option
                    value="GP"
                    label="Guadeloupe"
                    selected={country === "GP"}
                  >
                    Guadeloupe
                  </option>
                  <option
                    value="GT"
                    label="Guatemala"
                    selected={country === "GT"}
                  >
                    Guatemala
                  </option>
                  <option value="GY" label="Guyana" selected={country === "GY"}>
                    Guyana
                  </option>
                  <option value="HT" label="Haiti" selected={country === "HT"}>
                    Haiti
                  </option>
                  <option
                    value="HN"
                    label="Honduras"
                    selected={country === "HN"}
                  >
                    Honduras
                  </option>
                  <option
                    value="JM"
                    label="Jamaica"
                    selected={country === "JM"}
                  >
                    Jamaica
                  </option>
                  <option
                    value="MQ"
                    label="Martinique"
                    selected={country === "MQ"}
                  >
                    Martinique
                  </option>
                  <option value="MX" label="Mexico" selected={country === "MX"}>
                    Mexico
                  </option>
                  <option
                    value="MS"
                    label="Montserrat"
                    selected={country === "MS"}
                  >
                    Montserrat
                  </option>
                  <option
                    value="AN"
                    label="Netherlands Antilles"
                    selected={country === "AN"}
                  >
                    Netherlands Antilles
                  </option>
                  <option
                    value="NI"
                    label="Nicaragua"
                    selected={country === "NI"}
                  >
                    Nicaragua
                  </option>
                  <option value="PA" label="Panama" selected={country === "PA"}>
                    Panama
                  </option>
                  <option
                    value="PY"
                    label="Paraguay"
                    selected={country === "PY"}
                  >
                    Paraguay
                  </option>
                  <option value="PE" label="Peru" selected={country === "PE"}>
                    Peru
                  </option>
                  <option
                    value="PR"
                    label="Puerto Rico"
                    selected={country === "PR"}
                  >
                    Puerto Rico
                  </option>
                  <option
                    value="BL"
                    label="Saint Barthélemy"
                    selected={country === "BL"}
                  >
                    Saint Barthélemy
                  </option>
                  <option
                    value="KN"
                    label="Saint Kitts and Nevis"
                    selected={country === "KN"}
                  >
                    Saint Kitts and Nevis
                  </option>
                  <option
                    value="LC"
                    label="Saint Lucia"
                    selected={country === "LC"}
                  >
                    Saint Lucia
                  </option>
                  <option
                    value="MF"
                    label="Saint Martin"
                    selected={country === "MF"}
                  >
                    Saint Martin
                  </option>
                  <option
                    value="PM"
                    label="Saint Pierre and Miquelon"
                    selected={country === "PM"}
                  >
                    Saint Pierre and Miquelon
                  </option>
                  <option
                    value="VC"
                    label="Saint Vincent and the Grenadines"
                    selected={country === "VC"}
                  >
                    Saint Vincent and the Grenadines
                  </option>
                  <option
                    value="SR"
                    label="Suriname"
                    selected={country === "SR"}
                  >
                    Suriname
                  </option>
                  <option
                    value="TT"
                    label="Trinidad and Tobago"
                    selected={country === "TT"}
                  >
                    Trinidad and Tobago
                  </option>
                  <option
                    value="TC"
                    label="Turks and Caicos Islands"
                    selected={country === "TC"}
                  >
                    Turks and Caicos Islands
                  </option>
                  <option
                    value="VI"
                    label="U.S. Virgin Islands"
                    selected={country === "VI"}
                  >
                    U.S. Virgin Islands
                  </option>
                  <option
                    value="US"
                    label="United States"
                    selected={country === "US"}
                  >
                    United States
                  </option>
                  <option
                    value="UY"
                    label="Uruguay"
                    selected={country === "UY"}
                  >
                    Uruguay
                  </option>
                  <option
                    value="VE"
                    label="Venezuela"
                    selected={country === "VE"}
                  >
                    Venezuela
                  </option>
                </optgroup>
                <optgroup id="country-optgroup-Asia" label="Asia">
                  <option
                    value="AF"
                    label="Afghanistan"
                    selected={country === "AF"}
                  >
                    Afghanistan
                  </option>
                  <option
                    value="AM"
                    label="Armenia"
                    selected={country === "AM"}
                  >
                    Armenia
                  </option>
                  <option
                    value="AZ"
                    label="Azerbaijan"
                    selected={country === "AZ"}
                  >
                    Azerbaijan
                  </option>
                  <option
                    value="BH"
                    label="Bahrain"
                    selected={country === "BH"}
                  >
                    Bahrain
                  </option>
                  <option
                    value="BD"
                    label="Bangladesh"
                    selected={country === "BD"}
                  >
                    Bangladesh
                  </option>
                  <option value="BT" label="Bhutan" selected={country === "BT"}>
                    Bhutan
                  </option>
                  <option value="BN" label="Brunei" selected={country === "BN"}>
                    Brunei
                  </option>
                  <option
                    value="KH"
                    label="Cambodia"
                    selected={country === "KH"}
                  >
                    Cambodia
                  </option>
                  <option value="CN" label="China" selected={country === "CN"}>
                    China
                  </option>
                  <option
                    value="GE"
                    label="Georgia"
                    selected={country === "GE"}
                  >
                    Georgia
                  </option>
                  <option
                    value="HK"
                    label="Hong Kong SAR China"
                    selected={country === "HK"}
                  >
                    Hong Kong SAR China
                  </option>
                  <option value="IN" label="India" selected={country === "IN"}>
                    India
                  </option>
                  <option
                    value="ID"
                    label="Indonesia"
                    selected={country === "ID"}
                  >
                    Indonesia
                  </option>
                  <option value="IR" label="Iran" selected={country === "IR"}>
                    Iran
                  </option>
                  <option value="IQ" label="Iraq" selected={country === "IQ"}>
                    Iraq
                  </option>
                  <option value="IL" label="Israel" selected={country === "IL"}>
                    Israel
                  </option>
                  <option value="JP" label="Japan" selected={country === "JP"}>
                    Japan
                  </option>
                  <option value="JO" label="Jordan" selected={country === "JO"}>
                    Jordan
                  </option>
                  <option
                    value="KZ"
                    label="Kazakhstan"
                    selected={country === "KZ"}
                  >
                    Kazakhstan
                  </option>
                  <option value="KW" label="Kuwait" selected={country === "KW"}>
                    Kuwait
                  </option>
                  <option
                    value="KG"
                    label="Kyrgyzstan"
                    selected={country === "KG"}
                  >
                    Kyrgyzstan
                  </option>
                  <option value="LA" label="Laos" selected={country === "LA"}>
                    Laos
                  </option>
                  <option
                    value="LB"
                    label="Lebanon"
                    selected={country === "LB"}
                  >
                    Lebanon
                  </option>
                  <option
                    value="MO"
                    label="Macau SAR China"
                    selected={country === "MO"}
                  >
                    Macau SAR China
                  </option>
                  <option
                    value="MY"
                    label="Malaysia"
                    selected={country === "MY"}
                  >
                    Malaysia
                  </option>
                  <option
                    value="MV"
                    label="Maldives"
                    selected={country === "MV"}
                  >
                    Maldives
                  </option>
                  <option
                    value="MN"
                    label="Mongolia"
                    selected={country === "MN"}
                  >
                    Mongolia
                  </option>
                  <option
                    value="MM"
                    label="Myanmar [Burma]"
                    selected={country === "MM"}
                  >
                    Myanmar [Burma]
                  </option>
                  <option value="NP" label="Nepal" selected={country === "NP"}>
                    Nepal
                  </option>
                  <option
                    value="NT"
                    label="Neutral Zone"
                    selected={country === "NT"}
                  >
                    Neutral Zone
                  </option>
                  <option
                    value="KP"
                    label="North Korea"
                    selected={country === "KP"}
                  >
                    North Korea
                  </option>
                  <option value="OM" label="Oman" selected={country === "OM"}>
                    Oman
                  </option>
                  <option
                    value="PK"
                    label="Pakistan"
                    selected={country === "PK"}
                  >
                    Pakistan
                  </option>
                  <option
                    value="PS"
                    label="Palestinian Territories"
                    selected={country === "PS"}
                  >
                    Palestinian Territories
                  </option>
                  <option
                    value="YD"
                    label="People's Democratic Republic of Yemen"
                    selected={country === "YD"}
                  >
                    People's Democratic Republic of Yemen
                  </option>
                  <option
                    value="PH"
                    label="Philippines"
                    selected={country === "PH"}
                  >
                    Philippines
                  </option>
                  <option value="QA" label="Qatar" selected={country === "QA"}>
                    Qatar
                  </option>
                  <option
                    value="SA"
                    label="Saudi Arabia"
                    selected={country === "SA"}
                  >
                    Saudi Arabia
                  </option>
                  <option
                    value="SG"
                    label="Singapore"
                    selected={country === "SG"}
                  >
                    Singapore
                  </option>
                  <option
                    value="KR"
                    label="South Korea"
                    selected={country === "KR"}
                  >
                    South Korea
                  </option>
                  <option
                    value="LK"
                    label="Sri Lanka"
                    selected={country === "LK"}
                  >
                    Sri Lanka
                  </option>
                  <option value="SY" label="Syria" selected={country === "SY"}>
                    Syria
                  </option>
                  <option value="TW" label="Taiwan" selected={country === "TW"}>
                    Taiwan
                  </option>
                  <option
                    value="TJ"
                    label="Tajikistan"
                    selected={country === "TJ"}
                  >
                    Tajikistan
                  </option>
                  <option
                    value="TH"
                    label="Thailand"
                    selected={country === "TH"}
                  >
                    Thailand
                  </option>
                  <option
                    value="TL"
                    label="Timor-Leste"
                    selected={country === "TL"}
                  >
                    Timor-Leste
                  </option>
                  <option value="TR" label="Turkey" selected={country === "TR"}>
                    Turkey
                  </option>
                  <option
                    value="TM"
                    label="Turkmenistan"
                    selected={country === "TM"}
                  >
                    Turkmenistan
                  </option>
                  <option
                    value="AE"
                    label="United Arab Emirates"
                    selected={country === "AE"}
                  >
                    United Arab Emirates
                  </option>
                  <option
                    value="UZ"
                    label="Uzbekistan"
                    selected={country === "UZ"}
                  >
                    Uzbekistan
                  </option>
                  <option
                    value="VN"
                    label="Vietnam"
                    selected={country === "VN"}
                  >
                    Vietnam
                  </option>
                  <option value="YE" label="Yemen" selected={country === "YE"}>
                    Yemen
                  </option>
                </optgroup>
                <optgroup id="country-optgroup-Europe" label="Europe">
                  <option
                    value="AL"
                    label="Albania"
                    selected={country === "AL"}
                  >
                    Albania
                  </option>
                  <option
                    value="AD"
                    label="Andorra"
                    selected={country === "AD"}
                  >
                    Andorra
                  </option>
                  <option
                    value="AT"
                    label="Austria"
                    selected={country === "AT"}
                  >
                    Austria
                  </option>
                  <option
                    value="BY"
                    label="Belarus"
                    selected={country === "BY"}
                  >
                    Belarus
                  </option>
                  <option
                    value="BE"
                    label="Belgium"
                    selected={country === "BE"}
                  >
                    Belgium
                  </option>
                  <option
                    value="BA"
                    label="Bosnia and Herzegovina"
                    selected={country === "BA"}
                  >
                    Bosnia and Herzegovina
                  </option>
                  <option
                    value="BG"
                    label="Bulgaria"
                    selected={country === "BG"}
                  >
                    Bulgaria
                  </option>
                  <option
                    value="HR"
                    label="Croatia"
                    selected={country === "HR"}
                  >
                    Croatia
                  </option>
                  <option value="CY" label="Cyprus" selected={country === "CY"}>
                    Cyprus
                  </option>
                  <option
                    value="CZ"
                    label="Czech Republic"
                    selected={country === "CZ"}
                  >
                    Czech Republic
                  </option>
                  <option
                    value="DK"
                    label="Denmark"
                    selected={country === "DK"}
                  >
                    Denmark
                  </option>
                  <option
                    value="DD"
                    label="East Germany"
                    selected={country === "DD"}
                  >
                    East Germany
                  </option>
                  <option
                    value="EE"
                    label="Estonia"
                    selected={country === "EE"}
                  >
                    Estonia
                  </option>
                  <option
                    value="FO"
                    label="Faroe Islands"
                    selected={country === "FO"}
                  >
                    Faroe Islands
                  </option>
                  <option
                    value="FI"
                    label="Finland"
                    selected={country === "FI"}
                  >
                    Finland
                  </option>
                  <option value="FR" label="France" selected={country === "FR"}>
                    France
                  </option>
                  <option
                    value="DE"
                    label="Germany"
                    selected={country === "DE"}
                  >
                    Germany
                  </option>
                  <option
                    value="GI"
                    label="Gibraltar"
                    selected={country === "GI"}
                  >
                    Gibraltar
                  </option>
                  <option value="GR" label="Greece" selected={country === "GR"}>
                    Greece
                  </option>
                  <option
                    value="GG"
                    label="Guernsey"
                    selected={country === "GG"}
                  >
                    Guernsey
                  </option>
                  <option
                    value="HU"
                    label="Hungary"
                    selected={country === "HU"}
                  >
                    Hungary
                  </option>
                  <option
                    value="IS"
                    label="Iceland"
                    selected={country === "IS"}
                  >
                    Iceland
                  </option>
                  <option
                    value="IE"
                    label="Ireland"
                    selected={country === "IE"}
                  >
                    Ireland
                  </option>
                  <option
                    value="IM"
                    label="Isle of Man"
                    selected={country === "IM"}
                  >
                    Isle of Man
                  </option>
                  <option value="IT" label="Italy" selected={country === "IT"}>
                    Italy
                  </option>
                  <option value="JE" label="Jersey" selected={country === "JE"}>
                    Jersey
                  </option>
                  <option value="LV" label="Latvia" selected={country === "LV"}>
                    Latvia
                  </option>
                  <option
                    value="LI"
                    label="Liechtenstein"
                    selected={country === "LI"}
                  >
                    Liechtenstein
                  </option>
                  <option
                    value="LT"
                    label="Lithuania"
                    selected={country === "LT"}
                  >
                    Lithuania
                  </option>
                  <option
                    value="LU"
                    label="Luxembourg"
                    selected={country === "LU"}
                  >
                    Luxembourg
                  </option>
                  <option
                    value="MK"
                    label="Macedonia"
                    selected={country === "MK"}
                  >
                    Macedonia
                  </option>
                  <option value="MT" label="Malta" selected={country === "MT"}>
                    Malta
                  </option>
                  <option
                    value="FX"
                    label="Metropolitan France"
                    selected={country === "FX"}
                  >
                    Metropolitan France
                  </option>
                  <option
                    value="MD"
                    label="Moldova"
                    selected={country === "MD"}
                  >
                    Moldova
                  </option>
                  <option value="MC" label="Monaco" selected={country === "MC"}>
                    Monaco
                  </option>
                  <option
                    value="ME"
                    label="Montenegro"
                    selected={country === "ME"}
                  >
                    Montenegro
                  </option>
                  <option
                    value="NL"
                    label="Netherlands"
                    selected={country === "NL"}
                  >
                    Netherlands
                  </option>
                  <option value="NO" label="Norway" selected={country === "NO"}>
                    Norway
                  </option>
                  <option value="PL" label="Poland" selected={country === "PL"}>
                    Poland
                  </option>
                  <option
                    value="PT"
                    label="Portugal"
                    selected={country === "PT"}
                  >
                    Portugal
                  </option>
                  <option
                    value="RO"
                    label="Romania"
                    selected={country === "RO"}
                  >
                    Romania
                  </option>
                  <option value="RU" label="Russia" selected={country === "RU"}>
                    Russia
                  </option>
                  <option
                    value="SM"
                    label="San Marino"
                    selected={country === "SM"}
                  >
                    San Marino
                  </option>
                  <option value="RS" label="Serbia" selected={country === "RS"}>
                    Serbia
                  </option>
                  <option
                    value="CS"
                    label="Serbia and Montenegro"
                    selected={country === "CS"}
                  >
                    Serbia and Montenegro
                  </option>
                  <option
                    value="SK"
                    label="Slovakia"
                    selected={country === "SK"}
                  >
                    Slovakia
                  </option>
                  <option
                    value="SI"
                    label="Slovenia"
                    selected={country === "SI"}
                  >
                    Slovenia
                  </option>
                  <option value="ES" label="Spain" selected={country === "ES"}>
                    Spain
                  </option>
                  <option
                    value="SJ"
                    label="Svalbard and Jan Mayen"
                    selected={country === "SJ"}
                  >
                    Svalbard and Jan Mayen
                  </option>
                  <option value="SE" label="Sweden" selected={country === "SE"}>
                    Sweden
                  </option>
                  <option
                    value="CH"
                    label="Switzerland"
                    selected={country === "CH"}
                  >
                    Switzerland
                  </option>
                  <option
                    value="UA"
                    label="Ukraine"
                    selected={country === "UA"}
                  >
                    Ukraine
                  </option>
                  <option
                    value="SU"
                    label="Union of Soviet Socialist Republics"
                    selected={country === "SU"}
                  >
                    Union of Soviet Socialist Republics
                  </option>
                  <option
                    value="GB"
                    label="United Kingdom"
                    selected={country === "GB"}
                  >
                    United Kingdom
                  </option>
                  <option
                    value="VA"
                    label="Vatican City"
                    selected={country === "VA"}
                  >
                    Vatican City
                  </option>
                  <option
                    value="AX"
                    label="Åland Islands"
                    selected={country === "AX"}
                  >
                    Åland Islands
                  </option>
                </optgroup>
                <optgroup id="country-optgroup-Oceania" label="Oceania">
                  <option
                    value="AS"
                    label="American Samoa"
                    selected={country === "AS"}
                  >
                    American Samoa
                  </option>
                  <option
                    value="AQ"
                    label="Antarctica"
                    selected={country === "AQ"}
                  >
                    Antarctica
                  </option>
                  <option
                    value="AU"
                    label="Australia"
                    selected={country === "AU"}
                  >
                    Australia
                  </option>
                  <option
                    value="BV"
                    label="Bouvet Island"
                    selected={country === "BV"}
                  >
                    Bouvet Island
                  </option>
                  <option
                    value="IO"
                    label="British Indian Ocean Territory"
                    selected={country === "IO"}
                  >
                    British Indian Ocean Territory
                  </option>
                  <option
                    value="CX"
                    label="Christmas Island"
                    selected={country === "CX"}
                  >
                    Christmas Island
                  </option>
                  <option
                    value="CC"
                    label="Cocos [Keeling] Islands"
                    selected={country === "CC"}
                  >
                    Cocos [Keeling] Islands
                  </option>
                  <option
                    value="CK"
                    label="Cook Islands"
                    selected={country === "CK"}
                  >
                    Cook Islands
                  </option>
                  <option value="FJ" label="Fiji" selected={country === "FJ"}>
                    Fiji
                  </option>
                  <option
                    value="PF"
                    label="French Polynesia"
                    selected={country === "PF"}
                  >
                    French Polynesia
                  </option>
                  <option
                    value="TF"
                    label="French Southern Territories"
                    selected={country === "TF"}
                  >
                    French Southern Territories
                  </option>
                  <option value="GU" label="Guam" selected={country === "GU"}>
                    Guam
                  </option>
                  <option
                    value="HM"
                    label="Heard Island and McDonald Islands"
                    selected={country === "HM"}
                  >
                    Heard Island and McDonald Islands
                  </option>
                  <option
                    value="KI"
                    label="Kiribati"
                    selected={country === "KI"}
                  >
                    Kiribati
                  </option>
                  <option
                    value="MH"
                    label="Marshall Islands"
                    selected={country === "MH"}
                  >
                    Marshall Islands
                  </option>
                  <option
                    value="FM"
                    label="Micronesia"
                    selected={country === "FM"}
                  >
                    Micronesia
                  </option>
                  <option value="NR" label="Nauru" selected={country === "NR"}>
                    Nauru
                  </option>
                  <option
                    value="NC"
                    label="New Caledonia"
                    selected={country === "NC"}
                  >
                    New Caledonia
                  </option>
                  <option
                    value="NZ"
                    label="New Zealand"
                    selected={country === "NZ"}
                  >
                    New Zealand
                  </option>
                  <option value="NU" label="Niue" selected={country === "NU"}>
                    Niue
                  </option>
                  <option
                    value="NF"
                    label="Norfolk Island"
                    selected={country === "NF"}
                  >
                    Norfolk Island
                  </option>
                  <option
                    value="MP"
                    label="Northern Mariana Islands"
                    selected={country === "MP"}
                  >
                    Northern Mariana Islands
                  </option>
                  <option value="PW" label="Palau" selected={country === "PW"}>
                    Palau
                  </option>
                  <option
                    value="PG"
                    label="Papua New Guinea"
                    selected={country === "PG"}
                  >
                    Papua New Guinea
                  </option>
                  <option
                    value="PN"
                    label="Pitcairn Islands"
                    selected={country === "PN"}
                  >
                    Pitcairn Islands
                  </option>
                  <option value="WS" label="Samoa" selected={country === "WS"}>
                    Samoa
                  </option>
                  <option
                    value="SB"
                    label="Solomon Islands"
                    selected={country === "SB"}
                  >
                    Solomon Islands
                  </option>
                  <option
                    value="GS"
                    label="South Georgia and the South Sandwich Islands"
                    selected={country === "GS"}
                  >
                    South Georgia and the South Sandwich Islands
                  </option>
                  <option
                    value="TK"
                    label="Tokelau"
                    selected={country === "TK"}
                  >
                    Tokelau
                  </option>
                  <option value="TO" label="Tonga" selected={country === "TO"}>
                    Tonga
                  </option>
                  <option value="TV" label="Tuvalu" selected={country === "TV"}>
                    Tuvalu
                  </option>
                  <option
                    value="UM"
                    label="U.S. Minor Outlying Islands"
                    selected={country === "UM"}
                  >
                    U.S. Minor Outlying Islands
                  </option>
                  <option
                    value="VU"
                    label="Vanuatu"
                    selected={country === "VU"}
                  >
                    Vanuatu
                  </option>
                  <option
                    value="WF"
                    label="Wallis and Futuna"
                    selected={country === "WF"}
                  >
                    Wallis and Futuna
                  </option>
                </optgroup>
              </select>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "50px" }}>
          {/* <button onClick={handleContactSubmit}>Send</button> */}
          
          <BlueBtn btnName="Send" clickEvent={handleContactSubmit} />
        </div>
      </form>
    </div>
  );
};

export default AddPeople;
