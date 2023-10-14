/* eslint-disable indent */
import { useContext } from 'react';

import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import Text from '@components/Text';
import Button from '@components/Button';

import { userContext } from '@contexts/user';

import * as S from './styles';

type Data = {
  name: string;
  qty: number;
};

type ChartProps = {
  data: Data[];
  label: React.ReactElement;
};

const Chart = ({ data, label }: ChartProps) => {
  const { user } = useContext(userContext);

  return (
    <S.ChartWrapper>
      <S.Chart isLogged={Boolean(user)}>
        <Text label={label} />
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 24 }}>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              allowDataOverflow
            />
            <YAxis axisLine={false} tickLine={false} allowDataOverflow />
            <Bar
              dataKey="qty"
              fill="#6950A1"
              barSize={20}
              shape={<RoundedTopBar />}
            />
          </BarChart>
        </ResponsiveContainer>
      </S.Chart>
      {!user && <Button label="Cadastre-se para visualizar" />}
    </S.ChartWrapper>
  );
};

type RoundedTopBarProps = {
  fill?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
};

const RoundedTopBar = (props: RoundedTopBarProps) => {
  const { fill, x, y, width, height } = props;
  const borderRadius = 5;

  return (
    <path
      d={`M${x},${(y as number) + (height as number)}
         L${x},${(y as number) + borderRadius} 
         Q${x},${y} ${(x as number) + borderRadius},${y} 
         L${(x as number) + (width as number) - borderRadius},${y} 
         Q${(x as number as number) + (width as number)},${y} ${
        (x as number) + (width as number)
      },${(y as number) + borderRadius} 
         L${(x as number) + (width as number)},${
        (y as number) + (height as number)
      } 
         Z`}
      stroke="none"
      fill={fill}
    />
  );
};

export default Chart;
