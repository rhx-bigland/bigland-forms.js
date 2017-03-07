const countries_map = {
"AF": { "code": "AF", "label": "Afeganistão" },
"ZA": { "code": "ZA", "label": "África do Sul" },
"AX": { "code": "AX", "label": "Ilhas Åland" },
"AL": { "code": "AL", "label": "Albânia" },
"DE": { "code": "DE", "label": "Alemanha" },
"AD": { "code": "AD", "label": "Andorra" },
"AO": { "code": "AO", "label": "Angola" },
"AI": { "code": "AI", "label": "Anguilla" },
"AQ": { "code": "AQ", "label": "Antártida" },
"AG": { "code": "AG", "label": "Antígua e Barbuda" },
"SA": { "code": "SA", "label": "Arábia Saudita" },
"DZ": { "code": "DZ", "label": "Argélia" },
"AR": { "code": "AR", "label": "Argentina" },
"AM": { "code": "AM", "label": "Armênia" },
"AW": { "code": "AW", "label": "Aruba" },
"AU": { "code": "AU", "label": "Austrália" },
"AT": { "code": "AT", "label": "Áustria" },
"AZ": { "code": "AZ", "label": "Azerbaijão" },
"BS": { "code": "BS", "label": "Bahamas" },
"BH": { "code": "BH", "label": "Bahrein" },
"BD": { "code": "BD", "label": "Bangladesh" },
"BB": { "code": "BB", "label": "Barbados" },
"BE": { "code": "BE", "label": "Bélgica" },
"BZ": { "code": "BZ", "label": "Belize" },
"BJ": { "code": "BJ", "label": "Benim" },
"BM": { "code": "BM", "label": "Bermudas" },
"BY": { "code": "BY", "label": "Bielorrússia" },
"BO": { "code": "BO", "label": "Bolívia" },
"BQ": { "code": "BQ", "label": "Países Baixos Caribenhos" },
"BA": { "code": "BA", "label": "Bósnia e Herzegovina" },
"BW": { "code": "BW", "label": "Botswana" },
"BV": { "code": "BV", "label": "Ilha Bouvet" },
"BR": { "code": "BR", "label": "Brasil" },
"BN": { "code": "BN", "label": "Brunei" },
"BG": { "code": "BG", "label": "Bulgária" },
"BF": { "code": "BF", "label": "Burkina Faso" },
"BI": { "code": "BI", "label": "Burundi" },
"BT": { "code": "BT", "label": "Butão" },
"CV": { "code": "CV", "label": "Cabo Verde" },
"KH": { "code": "KH", "label": "Camboja" },
"CM": { "code": "CM", "label": "Camarões" },
"CA": { "code": "CA", "label": "Canadá" },
"KY": { "code": "KY", "label": "Ilhas Cayman" },
"KZ": { "code": "KZ", "label": "Cazaquistão" },
"CF": { "code": "CF", "label": "República Centro-Africana" },
"TD": { "code": "TD", "label": "Chade" },
"CZ": { "code": "CZ", "label": "República Checa" },
"CL": { "code": "CL", "label": "Chile" },
"CN": { "code": "CN", "label": "China" },
"CY": { "code": "CY", "label": "Chipre" },
"CX": { "code": "CX", "label": "Ilha do Natal" },
"CC": { "code": "CC", "label": "Ilhas Cocos (Keeling)" },
"CO": { "code": "CO", "label": "Colômbia" },
"KM": { "code": "KM", "label": "Comores" },
"CG": { "code": "CG", "label": "República do Congo" },
"CD": { "code": "CD", "label": "República Democrática do Congo" },
"CK": { "code": "CK", "label": "Ilhas Cook" },
"KR": { "code": "KR", "label": "Coreia do Sul" },
"KP": { "code": "KP", "label": "Coreia do Norte" },
"CI": { "code": "CI", "label": "Costa do Marfim" },
"CR": { "code": "CR", "label": "Costa Rica" },
"HR": { "code": "HR", "label": "Croácia" },
"CU": { "code": "CU", "label": "Cuba" },
"CW": { "code": "CW", "label": "Curaçao" },
"DK": { "code": "DK", "label": "Dinamarca" },
"DJ": { "code": "DJ", "label": "Djibouti" },
"DM": { "code": "DM", "label": "Dominica" },
"DO": { "code": "DO", "label": "República Dominicana" },
"EG": { "code": "EG", "label": "Egito" },
"SV": { "code": "SV", "label": "El Salvador" },
"AE": { "code": "AE", "label": "Emirados Árabes Unidos" },
"EC": { "code": "EC", "label": "Equador" },
"ER": { "code": "ER", "label": "Eritreia" },
"SK": { "code": "SK", "label": "Eslováquia" },
"SI": { "code": "SI", "label": "Eslovênia" },
"ES": { "code": "ES", "label": "Espanha" },
"US": { "code": "US", "label": "Estados Unidos" },
"EE": { "code": "EE", "label": "Estónia" },
"ET": { "code": "ET", "label": "Etiópia" },
"FO": { "code": "FO", "label": "Ilhas Feroé" },
"FJ": { "code": "FJ", "label": "Fiji" },
"PH": { "code": "PH", "label": "Filipinas" },
"FI": { "code": "FI", "label": "Finlândia" },
"FR": { "code": "FR", "label": "França" },
"GA": { "code": "GA", "label": "Gabão" },
"GM": { "code": "GM", "label": "Gâmbia" },
"GH": { "code": "GH", "label": "Gana" },
"GE": { "code": "GE", "label": "Geórgia" },
"GS": { "code": "GS", "label": "Ilhas Geórgia do Sul e Sandwich do Sul" },
"GI": { "code": "GI", "label": "Gibraltar" },
"GR": { "code": "GR", "label": "Grécia" },
"GD": { "code": "GD", "label": "Granada" },
"GL": { "code": "GL", "label": "Gronelândia" },
"GP": { "code": "GP", "label": "Guadalupe" },
"GU": { "code": "GU", "label": "Guam" },
"GT": { "code": "GT", "label": "Guatemala" },
"GG": { "code": "GG", "label": "Guernsey" },
"GY": { "code": "GY", "label": "Guiana" },
"GF": { "code": "GF", "label": "Guiana Francesa" },
"GW": { "code": "GW", "label": "Guiné-Bissau" },
"GN": { "code": "GN", "label": "Guiné" },
"GQ": { "code": "GQ", "label": "Guiné Equatorial" },
"HT": { "code": "HT", "label": "Haiti" },
"HM": { "code": "HM", "label": "Ilha Heard e Ilhas McDonald" },
"HN": { "code": "HN", "label": "Honduras" },
"HK": { "code": "HK", "label": "Hong Kong" },
"HU": { "code": "HU", "label": "Hungria" },
"YE": { "code": "YE", "label": "Iêmen" },
"IN": { "code": "IN", "label": "Índia" },
"ID": { "code": "ID", "label": "Indonésia" },
"IQ": { "code": "IQ", "label": "Iraque" },
"IR": { "code": "IR", "label": "Irão" },
"IE": { "code": "IE", "label": "Irlanda" },
"IS": { "code": "IS", "label": "Islândia" },
"IL": { "code": "IL", "label": "Israel" },
"IT": { "code": "IT", "label": "Itália" },
"JM": { "code": "JM", "label": "Jamaica" },
"JP": { "code": "JP", "label": "Japão" },
"JE": { "code": "JE", "label": "Jersey" },
"JO": { "code": "JO", "label": "Jordânia" },
"KI": { "code": "KI", "label": "Kiribati" },
"KW": { "code": "KW", "label": "Kuwait" },
"LA": { "code": "LA", "label": "Laos" },
"LS": { "code": "LS", "label": "Lesoto" },
"LV": { "code": "LV", "label": "Letônia" },
"LB": { "code": "LB", "label": "Líbano" },
"LR": { "code": "LR", "label": "Libéria" },
"LY": { "code": "LY", "label": "Líbia" },
"LI": { "code": "LI", "label": "Liechtenstein" },
"LT": { "code": "LT", "label": "Lituânia" },
"LU": { "code": "LU", "label": "Luxemburgo" },
"MO": { "code": "MO", "label": "Macau" },
"MK": { "code": "MK", "label": "Macedônia" },
"MG": { "code": "MG", "label": "Madagáscar" },
"MY": { "code": "MY", "label": "Malásia" },
"MW": { "code": "MW", "label": "Malawi" },
"MV": { "code": "MV", "label": "Maldivas" },
"ML": { "code": "ML", "label": "Mali" },
"MT": { "code": "MT", "label": "Malta" },
"FK": { "code": "FK", "label": "Ilhas Malvinas" },
"IM": { "code": "IM", "label": "Ilha de Man" },
"MP": { "code": "MP", "label": "Marianas Setentrionais" },
"MA": { "code": "MA", "label": "Marrocos" },
"MH": { "code": "MH", "label": "Ilhas Marshall" },
"MQ": { "code": "MQ", "label": "Martinica" },
"MU": { "code": "MU", "label": "Maurícia" },
"MR": { "code": "MR", "label": "Mauritânia" },
"YT": { "code": "YT", "label": "Mayotte" },
"UM": { "code": "UM", "label": "Ilhas Menores Distantes dos Estados Unidos" },
"MX": { "code": "MX", "label": "México" },
"MM": { "code": "MM", "label": "Mianmar" },
"FM": { "code": "FM", "label": "Estados Federados da Micronésia" },
"MZ": { "code": "MZ", "label": "Moçambique" },
"MD": { "code": "MD", "label": "Moldávia" },
"MC": { "code": "MC", "label": "Mónaco" },
"MN": { "code": "MN", "label": "Mongólia" },
"ME": { "code": "ME", "label": "Montenegro" },
"MS": { "code": "MS", "label": "Montserrat" },
"NA": { "code": "NA", "label": "Namíbia" },
"NR": { "code": "NR", "label": "Nauru" },
"NP": { "code": "NP", "label": "Nepal" },
"NI": { "code": "NI", "label": "Nicarágua" },
"NE": { "code": "NE", "label": "Níger" },
"NG": { "code": "NG", "label": "Nigéria" },
"NU": { "code": "NU", "label": "Niue" },
"NF": { "code": "NF", "label": "Ilha Norfolk" },
"NO": { "code": "NO", "label": "Noruega" },
"NC": { "code": "NC", "label": "Nova Caledônia" },
"NZ": { "code": "NZ", "label": "Nova Zelândia" },
"OM": { "code": "OM", "label": "Omã" },
"NL": { "code": "NL", "label": "Países Baixos" },
"PW": { "code": "PW", "label": "Palau" },
"PS": { "code": "PS", "label": "Palestina" },
"PA": { "code": "PA", "label": "Panamá" },
"PG": { "code": "PG", "label": "Papua-Nova Guiné" },
"PK": { "code": "PK", "label": "Paquistão" },
"PY": { "code": "PY", "label": "Paraguai" },
"PE": { "code": "PE", "label": "Peru" },
"PN": { "code": "PN", "label": "Pitcairn" },
"PF": { "code": "PF", "label": "Polinésia Francesa" },
"PL": { "code": "PL", "label": "Polónia" },
"PR": { "code": "PR", "label": "Porto Rico" },
"PT": { "code": "PT", "label": "Portugal" },
"QA": { "code": "QA", "label": "Catar" },
"KE": { "code": "KE", "label": "Quênia" },
"KG": { "code": "KG", "label": "Quirguistão" },
"GB": { "code": "GB", "label": "Reino Unido" },
"RE": { "code": "RE", "label": "Reunião" },
"RO": { "code": "RO", "label": "Romênia" },
"RW": { "code": "RW", "label": "Ruanda" },
"RU": { "code": "RU", "label": "Rússia" },
"EH": { "code": "EH", "label": "Saara Ocidental" },
"AS": { "code": "AS", "label": "Samoa Americana" },
"WS": { "code": "WS", "label": "Samoa" },
"PM": { "code": "PM", "label": "Saint-Pierre e Miquelon" },
"SB": { "code": "SB", "label": "Ilhas Salomão" },
"SM": { "code": "SM", "label": "San Marino" },
"SH": { "code": "SH", "label": "Santa Helena, Ascensão e Tristão da Cunha" },
"LC": { "code": "LC", "label": "Santa Lúcia" },
"BL": { "code": "BL", "label": "São Bartolomeu" },
"KN": { "code": "KN", "label": "São Cristóvão e Nevis" },
"SX": { "code": "SX", "label": "Sint Maarten" },
"MF": { "code": "MF", "label": "São Martinho" },
"ST": { "code": "ST", "label": "São Tomé e Príncipe" },
"VC": { "code": "VC", "label": "São Vicente e Granadinas" },
"SN": { "code": "SN", "label": "Senegal" },
"SL": { "code": "SL", "label": "Serra Leoa" },
"RS": { "code": "RS", "label": "Sérvia" },
"SC": { "code": "SC", "label": "Seicheles" },
"SG": { "code": "SG", "label": "Singapura" },
"SY": { "code": "SY", "label": "Síria" },
"SO": { "code": "SO", "label": "Somália" },
"LK": { "code": "LK", "label": "Sri Lanka" },
"SZ": { "code": "SZ", "label": "Suazilândia" },
"SD": { "code": "SD", "label": "Sudão" },
"SS": { "code": "SS", "label": "Sudão do Sul" },
"SE": { "code": "SE", "label": "Suécia" },
"CH": { "code": "CH", "label": "Suíça" },
"SR": { "code": "SR", "label": "Suriname" },
"SJ": { "code": "SJ", "label": "Svalbard e Jan Mayen" },
"TH": { "code": "TH", "label": "Tailândia" },
"TW": { "code": "TW", "label": "Taiwan" },
"TJ": { "code": "TJ", "label": "Tajiquistão" },
"TZ": { "code": "TZ", "label": "Tanzânia" },
"TF": { "code": "TF", "label": "Terras Austrais e Antárticas Francesas" },
"IO": { "code": "IO", "label": "Território Britânico do Oceano Índico" },
"TL": { "code": "TL", "label": "Timor-Leste" },
"TG": { "code": "TG", "label": "Togo" },
"TK": { "code": "TK", "label": "Toquelau" },
"TO": { "code": "TO", "label": "Tonga" },
"TT": { "code": "TT", "label": "Trinidad e Tobago" },
"TN": { "code": "TN", "label": "Tunísia" },
"TC": { "code": "TC", "label": "Turks e Caicos" },
"TM": { "code": "TM", "label": "Turquemenistão" },
"TR": { "code": "TR", "label": "Turquia" },
"TV": { "code": "TV", "label": "Tuvalu" },
"UA": { "code": "UA", "label": "Ucrânia" },
"UG": { "code": "UG", "label": "Uganda" },
"UY": { "code": "UY", "label": "Uruguai" },
"UZ": { "code": "UZ", "label": "Uzbequistão" },
"VU": { "code": "VU", "label": "Vanuatu" },
"VA": { "code": "VA", "label": "Vaticano" },
"VE": { "code": "VE", "label": "Venezuela" },
"VN": { "code": "VN", "label": "Vietnã" },
"VI": { "code": "VI", "label": "Ilhas Virgens Americanas" },
"VG": { "code": "VG", "label": "Ilhas Virgens Britânicas" },
"WF": { "code": "WF", "label": "Wallis e Futuna" },
"ZM": { "code": "ZM", "label": "Zâmbia" },
"ZW": { "code": "ZW", "label": "Zimbabwe" }
};

const countries_collection = Object.keys(countries_map).map(
  key => countries_map[key] );

export {
  countries_map as map,
  countries_collection as collection
};