import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { useQuery } from "react-query";
import { updateGeneralBooleans } from "../../redux/generalBooleansSlice";
import { compareStrings } from "../../utils/utilsFuncs";

export default function CountryFlags() {
    const [countryCodes, setCountryCodes] = useState<string []>([]);
    const [countrySearch, setCountrySearch] = useState('');
    const [flagUrl, setFlagUrl] = useState('');
    const [topMessage, setTopMessage] = useState('');

    const dispatch = useDispatch();

    const arraySizes = [20,40,80,160,320,640,1280,2560];

    const { data } = useQuery('countries',async () => {
        const result = await fetch('https://flagcdn.com/fr/codes.json');
        return result.json();
    })

    const changeIntoArray = () => {
        const keysArray = Object.keys(data);
        const newArray = keysArray.map(e => {
            const tempObj = {
                name: data[e],
                short: e
            };
            return tempObj;
        });
        setCountryCodes(newArray);
    }

    useEffect(() => {
      data && changeIntoArray();
    }, [data]);

    const searchCountry = word => {
        const country = countryCodes.find(e => compareStrings(word,e.name));
        country ? setFlagUrl(`https://flagcdn.com/w640/${country.short}.png`) : setTopMessage('Pas de pays trouvé');
    }

    const handleInput = (e:ChangeEvent) => {
        flagUrl && setFlagUrl('');
        const target = e.target as HTMLInputElement;
        const countryName = target.value;
        setCountrySearch(countryName);
    }

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        console.log(e);
        
        const countryEntered = e.target[0].value;
        searchCountry(countryEntered);
    }

    useEffect(() => {
      dispatch(updateGeneralBooleans({darkMode:true}));
    }, []);

    useEffect(() => {
      topMessage && setTimeout(() => {
        setTopMessage('');
      }, 3000);
    }, [topMessage]);
        
    
  return (
    <main className="flags-page">
        <form onSubmit={handleSubmit}>
            <label htmlFor="country">Pays : </label>
            <input type="text" name="country" id="country" onChange={handleInput} value={countrySearch} />
            <button type="submit">drapeau</button>
        </form>
        {topMessage ? <h2>{topMessage}</h2> : <></>}
        {flagUrl ? 
            <div className="flag-container">
            <div className="flag-image">
                <img src={flagUrl} alt="drapeau" />
            </div>
            </div> : 
        <></>}
    </main>
  )
}
