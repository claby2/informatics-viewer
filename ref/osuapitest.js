function getRank(username){
    return fetch('https://osu.ppy.sh/api/get_user?u=' + username + '&k=b7668bc0ea2f4ebb47b741b074ea6969095aab39')
    .then(res=>res.json())
    .then(data=>data[0])
}

function getPlays(username){
    return fetch('https://osu.ppy.sh/api/get_user_best?u=' + username + '&k=b7668bc0ea2f4ebb47b741b074ea6969095aab39')
    .then(res=>res.json())
    .then(data=>data)
}

function getBeatmapInformation(beatmapid){
    return fetch('https://osu.ppy.sh/api/get_beatmaps?b=' + beatmapid + '&k=b7668bc0ea2f4ebb47b741b074ea6969095aab39')
    .then(res=>res.json())
    .then(data=>data)
}

let countrycodes = {
    "AF" : "Afghanistan",
    "AX" : "Aland Islands",
    "AL" : "Albania",
    "DZ" : "Algeria",
    "AS" : "American Samoa",
    "AD" : "Andorra",
    "AO" : "Angola",
    "AI" : "Anguilla",
    "AQ" : "Antarctica",
    "AG" : "Antigua And Barbuda",
    "AR" : "Argentina",
    "AM" : "Armenia",
    "AW" : "Aruba",
    "AU" : "Australia",
    "AT" : "Austria",
    "AZ" : "Azerbaijan",
    "BS" : "Bahamas",
    "BH" : "Bahrain",
    "BD" : "Bangladesh",
    "BB" : "Barbados",
    "BY" : "Belarus",
    "BE" : "Belgium",
    "BZ" : "Belize",
    "BJ" : "Benin",
    "BM" : "Bermuda",
    "BT" : "Bhutan",
    "BO" : "Bolivia",
    "BA" : "Bosnia And Herzegovina",
    "BW" : "Botswana",
    "BV" : "Bouvet Island",
    "BR" : "Brazil",
    "IO" : "British Indian Ocean Territory",
    "BN" : "Brunei Darussalam",
    "BG" : "Bulgaria",
    "BF" : "Burkina Faso",
    "BI" : "Burundi",
    "KH" : "Cambodia",
    "CM" : "Cameroon",
    "CA" : "Canada",
    "CV" : "Cape Verde",
    "KY" : "Cayman Islands",
    "CF" : "Central African Republic",
    "TD" : "Chad",
    "CL" : "Chile",
    "CN" : "China",
    "CX" : "Christmas Island",
    "CC" : "Cocos (Keeling) Islands",
    "CO" : "Colombia",
    "KM" : "Comoros",
    "CG" : "Congo",
    "CD" : "Congo, Democratic Republic",
    "CK" : "Cook Islands",
    "CR" : "Costa Rica",
    "CI" : "Cote D\"Ivoire",
    "HR" : "Croatia",
    "CU" : "Cuba",
    "CY" : "Cyprus",
    "CZ" : "Czech Republic",
    "DK" : "Denmark",
    "DJ" : "Djibouti",
    "DM" : "Dominica",
    "DO" : "Dominican Republic",
    "EC" : "Ecuador",
    "EG" : "Egypt",
    "SV" : "El Salvador",
    "GQ" : "Equatorial Guinea",
    "ER" : "Eritrea",
    "EE" : "Estonia",
    "ET" : "Ethiopia",
    "FK" : "Falkland Islands (Malvinas)",
    "FO" : "Faroe Islands",
    "FJ" : "Fiji",
    "FI" : "Finland",
    "FR" : "France",
    "GF" : "French Guiana",
    "PF" : "French Polynesia",
    "TF" : "French Southern Territories",
    "GA" : "Gabon",
    "GM" : "Gambia",
    "GE" : "Georgia",
    "DE" : "Germany",
    "GH" : "Ghana",
    "GI" : "Gibraltar",
    "GR" : "Greece",
    "GL" : "Greenland",
    "GD" : "Grenada",
    "GP" : "Guadeloupe",
    "GU" : "Guam",
    "GT" : "Guatemala",
    "GG" : "Guernsey",
    "GN" : "Guinea",
    "GW" : "Guinea-Bissau",
    "GY" : "Guyana",
    "HT" : "Haiti",
    "HM" : "Heard Island & Mcdonald Islands",
    "VA" : "Holy See (Vatican City State)",
    "HN" : "Honduras",
    "HK" : "Hong Kong",
    "HU" : "Hungary",
    "IS" : "Iceland",
    "IN" : "India",
    "ID" : "Indonesia",
    "IR" : "Iran, Islamic Republic Of",
    "IQ" : "Iraq",
    "IE" : "Ireland",
    "IM" : "Isle Of Man",
    "IL" : "Israel",
    "IT" : "Italy",
    "JM" : "Jamaica",
    "JP" : "Japan",
    "JE" : "Jersey",
    "JO" : "Jordan",
    "KZ" : "Kazakhstan",
    "KE" : "Kenya",
    "KI" : "Kiribati",
    "KR" : "Korea",
    "KW" : "Kuwait",
    "KG" : "Kyrgyzstan",
    "LA" : "Lao People\"s Democratic Republic",
    "LV" : "Latvia",
    "LB" : "Lebanon",
    "LS" : "Lesotho",
    "LR" : "Liberia",
    "LY" : "Libyan Arab Jamahiriya",
    "LI" : "Liechtenstein",
    "LT" : "Lithuania",
    "LU" : "Luxembourg",
    "MO" : "Macao",
    "MK" : "Macedonia",
    "MG" : "Madagascar",
    "MW" : "Malawi",
    "MY" : "Malaysia",
    "MV" : "Maldives",
    "ML" : "Mali",
    "MT" : "Malta",
    "MH" : "Marshall Islands",
    "MQ" : "Martinique",
    "MR" : "Mauritania",
    "MU" : "Mauritius",
    "YT" : "Mayotte",
    "MX" : "Mexico",
    "FM" : "Micronesia, Federated States Of",
    "MD" : "Moldova",
    "MC" : "Monaco",
    "MN" : "Mongolia",
    "ME" : "Montenegro",
    "MS" : "Montserrat",
    "MA" : "Morocco",
    "MZ" : "Mozambique",
    "MM" : "Myanmar",
    "NA" : "Namibia",
    "NR" : "Nauru",
    "NP" : "Nepal",
    "NL" : "Netherlands",
    "AN" : "Netherlands Antilles",
    "NC" : "New Caledonia",
    "NZ" : "New Zealand",
    "NI" : "Nicaragua",
    "NE" : "Niger",
    "NG" : "Nigeria",
    "NU" : "Niue",
    "NF" : "Norfolk Island",
    "MP" : "Northern Mariana Islands",
    "NO" : "Norway",
    "OM" : "Oman",
    "PK" : "Pakistan",
    "PW" : "Palau",
    "PS" : "Palestinian Territory, Occupied",
    "PA" : "Panama",
    "PG" : "Papua New Guinea",
    "PY" : "Paraguay",
    "PE" : "Peru",
    "PH" : "Philippines",
    "PN" : "Pitcairn",
    "PL" : "Poland",
    "PT" : "Portugal",
    "PR" : "Puerto Rico",
    "QA" : "Qatar",
    "RE" : "Reunion",
    "RO" : "Romania",
    "RU" : "Russian Federation",
    "RW" : "Rwanda",
    "BL" : "Saint Barthelemy",
    "SH" : "Saint Helena",
    "KN" : "Saint Kitts And Nevis",
    "LC" : "Saint Lucia",
    "MF" : "Saint Martin",
    "PM" : "Saint Pierre And Miquelon",
    "VC" : "Saint Vincent And Grenadines",
    "WS" : "Samoa",
    "SM" : "San Marino",
    "ST" : "Sao Tome And Principe",
    "SA" : "Saudi Arabia",
    "SN" : "Senegal",
    "RS" : "Serbia",
    "SC" : "Seychelles",
    "SL" : "Sierra Leone",
    "SG" : "Singapore",
    "SK" : "Slovakia",
    "SI" : "Slovenia",
    "SB" : "Solomon Islands",
    "SO" : "Somalia",
    "ZA" : "South Africa",
    "GS" : "South Georgia And Sandwich Isl.",
    "ES" : "Spain",
    "LK" : "Sri Lanka",
    "SD" : "Sudan",
    "SR" : "Suriname",
    "SJ" : "Svalbard And Jan Mayen",
    "SZ" : "Swaziland",
    "SE" : "Sweden",
    "CH" : "Switzerland",
    "SY" : "Syrian Arab Republic",
    "TW" : "Taiwan",
    "TJ" : "Tajikistan",
    "TZ" : "Tanzania",
    "TH" : "Thailand",
    "TL" : "Timor-Leste",
    "TG" : "Togo",
    "TK" : "Tokelau",
    "TO" : "Tonga",
    "TT" : "Trinidad And Tobago",
    "TN" : "Tunisia",
    "TR" : "Turkey",
    "TM" : "Turkmenistan",
    "TC" : "Turks And Caicos Islands",
    "TV" : "Tuvalu",
    "UG" : "Uganda",
    "UA" : "Ukraine",
    "AE" : "United Arab Emirates",
    "GB" : "United Kingdom",
    "US" : "United States",
    "UM" : "United States Outlying Islands",
    "UY" : "Uruguay",
    "UZ" : "Uzbekistan",
    "VU" : "Vanuatu",
    "VE" : "Venezuela",
    "VN" : "Viet Nam",
    "VG" : "Virgin Islands, British",
    "VI" : "Virgin Islands, U.S.",
    "WF" : "Wallis And Futuna",
    "EH" : "Western Sahara",
    "YE" : "Yemen",
    "ZM" : "Zambia",
    "ZW" : "Zimbabwe"
}

function getCountryName (countryCode) {
    if (countrycodes.hasOwnProperty(countryCode)) {
        return countrycodes[countryCode];
    } else {
        return countryCode;
    }
}

profile_stats = document.getElementById("profile-stats-id");
beatmaps = document.getElementById("beatmaps-id");
beatmap_backgrounds = document.getElementsByClassName("beatmap-background");


function profileGet(name){
    getRank(name).then(rank=>{
        let profile_picture = document.getElementById("profilepic")
        profile_picture.src = 'https://a.ppy.sh/' + rank.user_id;
        let n = document.getElementById("username");
        n.innerText = rank.username;
        let r = document.getElementById("rank");
        r.innerText = "#" + rank.pp_rank;
        let pp = document.getElementById("pp")
        pp.innerText = rank.pp_raw + "pp";
        let country = document.getElementById("country");
        country.innerText = getCountryName(rank.country);
    })

    getPlays(name).then(play=>{
        for(let i = 0; i < 5; i++){
            getBeatmapInformation(play[i].beatmap_id).then(beatmap=>{
                console.log(beatmap);
                let title = document.createElement('h5');
                title.innerText = beatmap[0].title;
                let version = document.createElement('h6');
                version.innerText = beatmap[0].version;
                starValue = Math.floor(parseFloat(beatmap[0].difficultyrating), 3)
                star = starValue.toString() + " stars";
                let difficulty = document.createElement('p');
                difficulty.innerText = star;

                beatmaps.childNodes[2*i+1].appendChild(title);
                beatmaps.childNodes[2*i+1].appendChild(version);
                // beatmaps.childNodes[2*i+1].appendChild(difficulty);

                let rank  = document.createElement('img');
                r = play[i].rank.replace(/H/img, '+').replace(/X/img, 'SS').replace(/D/img, 'F');

                rank.src = `https://osu.ppy.sh/images/badges/score-ranks-v2/${r}.png`
                rank.alt = r
        
                let received  = document.createElement('p');
                received.innerText = play[i].pp + "pp";
        
                beatmaps.childNodes[2*i+1].appendChild(received)
                beatmaps.childNodes[2*i+1].appendChild(rank)
                beatmaps.childNodes[2*i+1].appendChild(received)     
                beatmaps.childNodes[2*i+1].appendChild(received)
                beatmaps.childNodes[2*i+1].style.backgroundImage = 'url(https://assets.ppy.sh/beatmaps/' + beatmap[0].beatmapset_id + '/covers/cover.jpg)';
            })

        }

    })

}

profileGet("claby2");

// https://assets.ppy.sh/beatmaps/671293/covers/cover.jpg

///https://assets.ppy.sh/images/flags/SG.png