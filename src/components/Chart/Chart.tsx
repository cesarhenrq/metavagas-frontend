/* eslint-disable indent */
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import Text from '@components/Text';

import * as S from './styles';

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

type Data = {
  name: string;
  qtd: number;
};

type ChartProps = {
  data: Data[];
  label: React.ReactElement;
};

const Chart = ({ data, label }: ChartProps) => {
  return (
    <S.Chart>
      <Text label={label} />
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={data} margin={{ top: 24 }}>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            allowDataOverflow
          />
          <YAxis axisLine={false} tickLine={false} allowDataOverflow />
          <Bar
            dataKey="qtd"
            fill="#6950A1"
            barSize={20}
            shape={<RoundedTopBar />}
          />
        </BarChart>
      </ResponsiveContainer>
    </S.Chart>
  );
};

export default Chart;
