import React, {
  useState,
  useEffect,
  useContext,
  ChangeEvent,
  createRef,
} from 'react';

import Text from '@components/Text';
import Button from '@components/Button';

import { filtersContext, actions } from '@contexts/filters';

import * as S from './styles';

const technologies = [
  'JavaScript',
  'Python',
  'Java',
  'C#',
  'Ruby',
  'PHP',
  'TypeScript',
  'Swift',
  'Go',
  'Kotlin',
  'Rust',
];
const vacancyTypes = ['Remoto', 'Presencial', 'Híbrido'];
const workArrangements = ['CLT', 'PJ'];
const companySizes = ['Pequena', 'Média', 'Grande'];
const levels = ['Júnior', 'Pleno', 'Sênior'];

const initialVisibleTechCount = 8;

const Filter = () => {
  const [minSalary, setMinSalary] = useState(1000);
  const [maxSalary, setMaxSalary] = useState(30000);
  const [visibleTechCount, setVisibleTechCount] = useState(
    initialVisibleTechCount,
  );

  const checkboxRefs: { [key: string]: React.RefObject<HTMLInputElement> } = {};

  const { filters, filtersDispatch } = useContext(filtersContext);

  useEffect(() => {
    technologies.slice(0, visibleTechCount).forEach(tech => {
      if (filters.technologies.includes(tech)) {
        const checkboxRef = checkboxRefs[tech];
        if (checkboxRef && checkboxRef.current) {
          checkboxRef.current.checked = true;
        }
      }
    });

    filtersDispatch(actions.addMinWage(String(minSalary)));
    filtersDispatch(actions.addMaxWage(String(maxSalary)));
  }, [filters.technologies, visibleTechCount]);

  const handleRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'min-salary') {
      setMinSalary(+e.target.value);
      filtersDispatch(actions.addMinWage(e.target.value));
    } else if (e.target.id === 'max-salary') {
      filtersDispatch(actions.addMaxWage(e.target.value));
      setMaxSalary(+e.target.value);
    }
  };

  const handleCheckBoxChange = (
    e: ChangeEvent<HTMLInputElement>,
    actionType: string,
  ) => {
    const value = e.target.id;

    const action = e.target.checked
      ? `add${actionType}`
      : `remove${actionType}`;

    filtersDispatch(actions[action as keyof typeof actions](value));
  };

  const handleReset = () => {
    Object.keys(checkboxRefs).forEach(key => {
      const checkboxRef = checkboxRefs[key];
      if (checkboxRef && checkboxRef.current) {
        checkboxRef.current.checked = false;
      }
    });

    setMinSalary(1000);
    setMaxSalary(30000);

    filtersDispatch(actions.resetFilters());
  };

  const showMoreTechnologies = () => {
    setVisibleTechCount(technologies.length);
  };

  const showLessTechnologies = () => {
    setVisibleTechCount(initialVisibleTechCount);
  };

  return (
    <S.Filter data-cy="filter">
      <S.TitleContainer data-cy="title-container">
        <Text label="Filtre sua busca" fontSize="medium" fontWeight="bold" />
        <S.Reset onClick={handleReset} data-cy="reset-button">
          Limpar
        </S.Reset>
      </S.TitleContainer>

      <S.Filters data-cy="filters">
        <Text label="Tecnologia" fontWeight="500" />
        <S.FilterType data-cy="filter-technology">
          {technologies.slice(0, visibleTechCount).map(tech => {
            checkboxRefs[tech] = createRef();

            return (
              <S.FilterContainer
                key={tech}
                data-cy="checkbox-technology-container"
              >
                <input
                  type="checkbox"
                  id={tech}
                  ref={checkboxRefs[tech]}
                  onChange={e => handleCheckBoxChange(e, 'Technology')}
                />
                <label htmlFor={tech}>{tech}</label>
              </S.FilterContainer>
            );
          })}

          {visibleTechCount < technologies.length ? (
            <S.ShowOrHide onClick={showMoreTechnologies} data-cy="show-more">
              Ver mais...
            </S.ShowOrHide>
          ) : (
            <S.ShowOrHide onClick={showLessTechnologies} data-cy="show-less">
              Ver menos...
            </S.ShowOrHide>
          )}
        </S.FilterType>

        <Text label="Tipo de vaga" fontWeight="500" />
        <S.FilterType data-cy="filter-vacancy-type">
          {vacancyTypes.map(type => {
            checkboxRefs[type] = createRef();

            return (
              <S.FilterContainer
                key={type}
                data-cy="checkbox-vacancy-type-container"
              >
                <input
                  type="checkbox"
                  ref={checkboxRefs[type]}
                  id={type}
                  onChange={e => handleCheckBoxChange(e, 'VacancyType')}
                />
                <label htmlFor={type}>{type}</label>
              </S.FilterContainer>
            );
          })}
        </S.FilterType>

        <Text label="Regime de trabalho" fontWeight="500" />
        <S.FilterType data-cy="filter-work-arrangement">
          {workArrangements.map(work => {
            checkboxRefs[work] = createRef();

            return (
              <S.FilterContainer
                key={work}
                data-cy="checkbox-work-arrangement-container"
              >
                <input
                  type="checkbox"
                  ref={checkboxRefs[work]}
                  id={work}
                  onChange={e => handleCheckBoxChange(e, 'WorkArrangement')}
                />
                <label htmlFor={work}>{work}</label>
              </S.FilterContainer>
            );
          })}
        </S.FilterType>

        <Text label="Tamanho da empresa" fontWeight="500" />
        <S.FilterType data-cy="filter-company-size">
          {companySizes.map(size => {
            checkboxRefs[size] = createRef();

            return (
              <S.FilterContainer
                key={size}
                data-cy="checkbox-company-size-container"
              >
                <input
                  type="checkbox"
                  ref={checkboxRefs[size]}
                  id={size}
                  onChange={e => handleCheckBoxChange(e, 'CompanySize')}
                />
                <label htmlFor={size}>{size}</label>
              </S.FilterContainer>
            );
          })}
        </S.FilterType>

        <Text label="Faixa salarial" fontWeight="500" />
        <S.FilterType data-cy="filter-wage-range">
          <Text
            label={`R$ ${minSalary} - R$ ${maxSalary}`}
            fontSize="small"
            fontColor="gray"
          />
          <S.RangeContainer data-cy="wage-range-container">
            <input
              type="range"
              id="min-salary"
              min="1000"
              max="15500"
              value={minSalary}
              onChange={handleRangeChange}
              data-cy="min-wage"
            />
            <input
              type="range"
              id="max-salary"
              min="15501"
              max="30000"
              value={maxSalary}
              onChange={handleRangeChange}
              data-cy="max-wage"
            />
          </S.RangeContainer>
        </S.FilterType>

        <Text label="Nível de experiência" fontWeight="500" />
        <S.FilterType data-cy="filter-level">
          {levels.map(level => {
            checkboxRefs[level] = createRef();

            return (
              <S.FilterContainer key={level} data-cy="checkbox-level-container">
                <input
                  type="checkbox"
                  ref={checkboxRefs[level]}
                  id={level}
                  onChange={e => handleCheckBoxChange(e, 'Level')}
                />
                <label htmlFor={level}>{level}</label>
              </S.FilterContainer>
            );
          })}
        </S.FilterType>
      </S.Filters>
      <Button label="Filtrar" fontWeight="500" />
    </S.Filter>
  );
};

export default Filter;
