import React, { useEffect, useState } from 'react';
import "./InputTy.css"
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faX, faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

export default function InputTy() {
  const [t, i18n] = useTranslation();
  const [showSearch, setShowSearch] = useState(false);
  const [formData, setFormData] = useState({ text: '' });
  const [filteredData, setFilteredData] = useState([]);
  const [soraList, setSoraList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const getFromApi = async () => {
    try {
      const res = await fetch("http://api.alquran.cloud/v1/surah");
      const data = await res.json();
      setSoraList(data?.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getFromApi();
  }, []);

  const removeDiacritics = (text) => {
    return text.normalize('NFD').replace(/[\u064B-\u065F]/g, '');
  };

  const handleSearch = () => {
    if (formData.text) {
      const searchText = removeDiacritics(formData.text.toLowerCase());
      const filtered = soraList.filter(sora => 
        sora.englishName.toLowerCase().includes(searchText) || 
        removeDiacritics(sora.name.toLowerCase()).includes(searchText)
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  };
const trueSearch = () => {
  setShowSearch(true)
}
const cliseSearch = () => {
  setShowSearch(false)
}
  return (
    <>
      <form className="forminput d-flex" role="search" onSubmit={e => e.preventDefault()}>
        <button type="button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <input
          className="form-control me-2"
          type="search"
          placeholder="ماذا تريد ان تقرأ"
          aria-label="Search"
          name="text"
          value={formData.text}
          onChange={handleChange}
          onClick={trueSearch}
        />
      </form>

      {showSearch && (
        <div className="overlaye">
          <div className="alerteyy">
            <div className="gfhghghjgyj">
              <button className="buttunExClose" onClick={() => setShowSearch(false)}>
                <FontAwesomeIcon icon={faX} />
              </button>
            </div>

            <h3>{t('seq')}</h3>
            <div className="btnalertee">
              <input
                type="text"
                name="text"
                value={formData.text}
                onChange={handleChange}
              />
              <button onClick={handleSearch}>
              <FontAwesomeIcon icon={faPlay} />
              </button>
            </div>

            <div className="boxSurahName">
              {filteredData.map((item, index) => (
                <Link to={`/${item.number}`} ><button onClick={cliseSearch} key={index}> ({item.name})</button></Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
