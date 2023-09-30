import Text from './../Text';
import InputWithIcon from './../InputWithIcon';
import Button from './../Button';

import useField from '@hooks/useField';
import useRecentSearches from '@hooks/useRecentSearches';

import * as S from './styles';

const SearchBar = () => {
  const [location] = useField('text', 'location');
  const [positionOrTech, , setPositionOrTech] = useField('text', 'magnifier');

  const [recentSearches, addRecentSearch] = useRecentSearches();

  const handleOnSearch = () => {
    positionOrTech.value && addRecentSearch(positionOrTech.value);
  };

  const handleRecentSearch = (value: string) => {
    setPositionOrTech(value);
  };

  return (
    <S.Container className="search-bar">
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
          onClick={handleOnSearch}
          backgroundColor="yellow"
          fontWeight="600"
        />
      </div>
      {recentSearches && (
        <div className="recent-search">
          <Text label="Buscas mais recentes:" fontSize="small" />
          <div className="search">
            {recentSearches.map(search => (
              <Button
                label={search}
                onClick={() => handleRecentSearch(search)}
                fontSize="small"
                fontColor="purple-light"
                backgroundColor="white"
                borderColor="purple-light"
              />
            ))}
          </div>
        </div>
      )}
    </S.Container>
  );
};

export default SearchBar;
