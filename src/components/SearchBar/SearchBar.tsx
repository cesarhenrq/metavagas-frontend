import { useLocation } from 'react-router-dom';

import Text from './../Text';
import InputWithIcon from './../InputWithIcon';
import Button from './../Button';

import useField from '@hooks/useField';
import useRecentSearches from '@hooks/useRecentSearches';
import useSearchHandling from '@hooks/useSearchHandling';
import SaveSearches from '@components/SaveSearches';

import * as S from './styles';
import { useContext } from 'react';
import { userContext } from '@contexts/user';

const SearchBar = () => {
  const [location] = useField('text', 'location');
  const [positionOrTech, , setPositionOrTech] = useField('text', 'magnifier');

  const { pathname } = useLocation();

  const [recentSearches, addRecentSearch] = useRecentSearches();

  const { user } = useContext(userContext);

  const handleSearch = useSearchHandling(
    positionOrTech.value,
    location.value,
    addRecentSearch,
  );

  const handleRecentSearch = (value: string) => {
    setPositionOrTech(value);
  };

  const calculateBackgroundColor = (search: string) => {
    if (search === positionOrTech.value) {
      return 'yellow';
    } else if (pathname === '/vacancies') {
      return 'purple-dark';
    } else {
      return 'white';
    }
  };

  const calculateBorderColor = (search: string) => {
    if (search === positionOrTech.value && pathname === '/vacancies') {
      return 'white';
    } else if (search === positionOrTech.value && pathname === '/') {
      return 'yellow';
    } else if (pathname === '/') {
      return 'purple-light';
    } else {
      return 'purple-light';
    }
  };

  return (
    <S.Container className="search-bar" data-cy="search-bar">
      <div className="search-form">
        <div className="form-group">
          <label htmlFor="magnifier">
            <Text label="O quê você procura?" fontWeight="600" />
          </label>
          <InputWithIcon
            icon="magnifier"
            placeholder="Cargo, tecnologia ou palavra-chave"
            {...positionOrTech}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">
            <Text label="Onde?" fontWeight="600" />
          </label>
          <InputWithIcon
            icon="location"
            placeholder="Localização"
            {...location}
          />
        </div>
        <Button
          label="Buscar vagas"
          onClick={handleSearch}
          backgroundColor="yellow"
          fontWeight="600"
        />
      </div>
      {recentSearches && (
        <div className="recent-search">
          {pathname === '/vacancies' ? null : (
            <Text label="Buscas mais recentes:" fontSize="small" />
          )}
          <div className="search">
            {recentSearches.map(search => (
              <Button
                label={search}
                onClick={() => handleRecentSearch(search)}
                key={search}
                fontSize="small"
                fontColor={
                  search === positionOrTech.value ? 'white' : 'purple-light'
                }
                backgroundColor={calculateBackgroundColor(search)}
                borderColor={calculateBorderColor(search)}
              />
            ))}
          </div>
        </div>
      )}
      {user && pathname === '/vacancies' && <SaveSearches />}
    </S.Container>
  );
};

export default SearchBar;
