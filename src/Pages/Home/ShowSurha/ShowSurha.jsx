import React, { useEffect, useState } from 'react';
import style from './ShowSurha.module.css';
import surahs from '../../../surahs.json';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ScrollToTopButton from '../../ScrollToTopButton/ScrollToTopButton';

const revelationTypes = {
  Meccan: 'مكية',
  Medinan: 'مدنية'
};

const numberInSurah = {
  '0': '٠',
  '1': '١',
  '2': '٢',
  '3': '٣',
  '4': '٤',
  '5': '٥',
  '6': '٦',
  '7': '٧',
  '8': '٨',
  '9': '٩',
  '10': '١٠',
  '11': '١١',
  '12': '١٢',
  '13': '١٣',
  '14': '١٤',
  '15': '١٥',
  '16': '١٦',
  '17': '١٧',
  '18': '١٨',
  '19': '١٩',
  '20': '٢٠',
  '21': '٢١',
  '22': '٢٢',
  '23': '٢٣',
  '24': '٢٤',
  '25': '٢٥',
  '26': '٢٦',
  '27': '٢٧',
  '28': '٢٨',
  '29': '٢٩',
  '30': '٣٠',
  '31': '٣١',
  '32': '٣٢',
  '33': '٣٣',
  '34': '٣٤',
  '35': '٣٥',
  '36': '٣٦',
  '37': '٣٧',
  '38': '٣٨',
  '39': '٣٩',
  '40': '٤٠',
  '41': '٤١',
  '42': '٤٢',
  '43': '٤٣',
  '44': '٤٤',
  '45': '٤٥',
  '46': '٤٦',
  '47': '٤٧',
  '48': '٤٨',
  '49': '٤٩',
  '50': '٥٠',
  '51': '٥١',
  '52': '٥٢',
  '53': '٥٣',
  '54': '٥٤',
  '55': '٥٥',
  '56': '٥٦',
  '57': '٥٧',
  '58': '٥٨',
  '59': '٥٩',
  '60': '٦٠',
  '61': '٦١',
  '62': '٦٢',
  '63': '٦٣',
  '64': '٦٤',
  '65': '٦٥',
  '66': '٦٦',
  '67': '٦٧',
  '68': '٦٨',
  '69': '٦٩',
  '70': '٧٠',
  '71': '٧١',
  '72': '٧٢',
  '73': '٧٣',
  '74': '٧٤',
  '75': '٧٥',
  '76': '٧٦',
  '77': '٧٧',
  '78': '٧٨',
  '79': '٧٩',
  '80': '٨٠',
  '81': '٨١',
  '82': '٨٢',
  '83': '٨٣',
  '84': '٨٤',
  '85': '٨٥',
  '86': '٨٦',
  '87': '٨٧',
  '88': '٨٨',
  '89': '٨٩',
  '90': '٩٠',
  '91': '٩١',
  '92': '٩٢',
  '93': '٩٣',
  '94': '٩٤',
  '95': '٩٥',
  '96': '٩٦',
  '97': '٩٧',
  '98': '٩٨',
  '99': '٩٩',
  '100': '١٠٠',
  '101': '١٠١',
  '102': '١٠٢',
  '103': '١٠٣',
  '104': '١٠٤',
  '105': '١٠٥',
  '106': '١٠٦',
  '107': '١٠٧',
  '108': '١٠٨',
  '109': '١٠٩',
  '110': '١١٠',
  '111': '١١١',
  '112': '١١٢',
  '113': '١١٣',
  '114': '١١٤',
  '115': '١١٥',
  '116': '١١٦',
  '117': '١١٧',
  '118': '١١٨',
  '119': '١١٩',
  '120': '١٢٠',
  '121': '١٢١',
  '122': '١٢٢',
  '123': '١٢٣',
  '124': '١٢٤',
  '125': '١٢٥',
  '126': '١٢٦',
  '127': '١٢٧',
  '128': '١٢٨',
  '129': '١٢٩',
  '130': '١٣٠',
  '131': '١٣١',
  '132': '١٣٢',
  '133': '١٣٣',
  '134': '١٣٤',
  '135': '١٣٥',
  '136': '١٣٦',
  '137': '١٣٧',
  '138': '١٣٨',
  '139': '١٣٩',
  '140': '١٤٠',
  '141': '١٤١',
  '142': '١٤٢',
  '143': '١٤٣',
  '144': '١٤٤',
  '145': '١٤٥',
  '146': '١٤٦',
  '147': '١٤٧',
  '148': '١٤٨',
  '149': '١٤٩',
  '150': '١٥٠',
  '151': '١٥١',
  '152': '١٥٢',
  '153': '١٥٣',
  '154': '١٥٤',
  '155': '١٥٥',
  '156': '١٥٦',
  '157': '١٥٧',
  '158': '١٥٨',
  '159': '١٥٩',
  '160': '١٦٠',
  '161': '١٦١',
  '162': '١٦٢',
  '163': '١٦٣',
  '164': '١٦٤',
  '165': '١٦٥',
  '166': '١٦٦',
  '167': '١٦٧',
  '168': '١٦٨',
  '169': '١٦٩',
  '170': '١٧٠',
  '171': '١٧١',
  '172': '١٧٢',
  '173': '١٧٣',
  '174': '١٧٤',
  '175': '١٧٥',
  '176': '١٧٦',
  '177': '١٧٧',
  '178': '١٧٨',
  '179': '١٧٩',
  '180': '١٨٠',
  '181': '١٨١',
  '182': '١٨٢',
  '183': '١٨٣',
  '184': '١٨٤',
  '185': '١٨٥',
  '186': '١٨٦',
  '187': '١٨٧',
  '188': '١٨٨',
  '189': '١٨٩',
  '190': '١٩٠',
  '191': '١٩١',
  '192': '١٩٢',
  '193': '١٩٣',
  '194': '١٩٤',
  '195': '١٩٥',
  '196': '١٩٦',
  '197': '١٩٧',
  '198': '١٩٨',
  '199': '١٩٩',
  '200': '٢٠٠',
  '201': '٢٠١',
  '202': '٢٠٢',
  '203': '٢٠٣',
  '204': '٢٠٤',
  '205': '٢٠٥',
  '206': '٢٠٦',
  '207': '٢٠٧',
  '208': '٢٠٨',
  '209': '٢٠٩',
  '210': '٢١٠',
  '211': '٢١١',
  '212': '٢١٢',
  '213': '٢١٣',
  '214': '٢١٤',
  '215': '٢١٥',
  '216': '٢١٦',
  '217': '٢١٧',
  '218': '٢١٨',
  '219': '٢١٩',
  '220': '٢٢٠',
  '221': '٢٢١',
  '222': '٢٢٢',
  '223': '٢٢٣',
  '224': '٢٢٤',
  '225': '٢٢٥',
  '226': '٢٢٦',
  '227': '٢٢٧',
  '228': '٢٢٨',
  '229': '٢٢٩',
  '230': '٢٣٠',
  '231': '٢٣١',
  '232': '٢٣٢',
  '233': '٢٣٣',
  '234': '٢٣٤',
  '235': '٢٣٥',
  '236': '٢٣٦',
  '237': '٢٣٧',
  '238': '٢٣٨',
  '239': '٢٣٩',
  '240': '٢٤٠',
  '241': '٢٤١',
  '242': '٢٤٢',
  '243': '٢٤٣',
  '244': '٢٤٤',
  '245': '٢٤٥',
  '246': '٢٤٦',
  '247': '٢٤٧',
  '248': '٢٤٨',
  '249': '٢٤٩',
  '250': '٢٥٠',
  '251': '٢٥١',
  '252': '٢٥٢',
  '253': '٢٥٣',
  '254': '٢٥٤',
  '255': '٢٥٥',
  '256': '٢٥٦',
  '257': '٢٥٧',
  '258': '٢٥٨',
  '259': '٢٥٩',
  '260': '٢٦٠',
  '261': '٢٦١',
  '262': '٢٦٢',
  '263': '٢٦٣',
  '264': '٢٦٤',
  '265': '٢٦٥',
  '266': '٢٦٦',
  '267': '٢٦٧',
  '268': '٢٦٨',
  '269': '٢٦٩',
  '270': '٢٧٠',
  '271': '٢٧١',
  '272': '٢٧٢',
  '273': '٢٧٣',
  '274': '٢٧٤',
  '275': '٢٧٥',
  '276': '٢٧٦',
  '277': '٢٧٧',
  '278': '٢٧٨',
  '279': '٢٧٩',
  '280': '٢٨٠',
  '281': '٢٨١',
  '282': '٢٨٢',
  '283': '٢٨٣',
  '284': '٢٨٤',
  '285': '٢٨٥',
  '286': '٢٨٦',
  '287': '٢٨٧',
  '288': '٢٨٨',
  '289': '٢٨٩',
  '290': '٢٩٠',
  '291': '٢٩١',
  '292': '٢٩٢',
  '293': '٢٩٣',
  '294': '٢٩٤',
  '295': '٢٩٥',
  '296': '٢٩٦',
  '297': '٢٩٧',
  '298': '٢٩٨',
  '299': '٢٩٩',
  '300': '٣٠٠'
};

export default function ShowSurha() {
  const { t, i18n } = useTranslation();
  const { number } = useParams();
  const [filterItem, setFilterItem] = useState({});
  const [filayahs, setFilayahs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleCategoryFilter = async (surnumber) => {
      try {
        const filteredSurah = surahs.data.surahs.find(
          (surah) => surah.number == surnumber
        );
        if (filteredSurah) {
          setFilterItem(filteredSurah);
          setFilayahs(filteredSurah.ayahs);
          setLoading(false);
          setError(null);
        } else {
          setLoading(false);
          setError(new Error('Surah not found'));
        }
      } catch (error) {
        console.error('Error fetching surah data:', error);
        setLoading(false);
        setError(new Error('Failed to fetch surah data'));
      }
    };

    handleCategoryFilter(number);
  }, [number]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const translateRevelationType = (type) => {
    return revelationTypes[type] || type;
  };

  const translateRevelationNumber = (type) => {
    return numberInSurah[type] || type;
  };

  return (
    <>
      <section className={style.seconesurha}>
        <nav className="w-75 m-auto m-sm-100 border-bottom border-secondary d-flex flex-row justify-content-around align-items-center">
          <div className="d-flex justify-content-center align-items-center rounded-pill">
            <p className={style.lengthSurahs}>
              {filterItem.ayahs.length} :{' '}
              <span className="text-secondary">عدد الايات</span>
            </p>
          </div>
          <div>
            <h6 className={style.nameOfSurahss}>{filterItem.name}</h6>
          </div>
          <div>
            <p>{translateRevelationType(filterItem.revelationType)}</p>
          </div>
        </nav>
        <h1 className={style.honebasmala}> {t('basm')} </h1>
        <div className={style.divdatasurha}>
          {filterItem.ayahs.map((ayah, index) => (
            <p className={style.contetOfAyahs} key={index}>
              {ayah.text}
              <span className={style.numberayahs}>
                {translateRevelationNumber(ayah.numberInSurah)}
              </span>{' '}
            </p>
          ))}
        </div>
      </section>
      <ScrollToTopButton />
    </>
  );
}

