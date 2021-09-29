import React, { PureComponent } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import tw from 'twin.macro'
import styled from 'styled-components'

const Chart = ({ title, data, dataKey, grid }) => {
    console.log(data);
  return (
      <Container>
      <h3 className='title'>{title}</h3>
      <ResponsiveContainer width='100%' aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey='name' stroke='#5550bd' />
          <Line type='monotone' dataKey={dataKey} stroke='#5550bd' />
          <Tooltip />
          {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />}
        </LineChart>
      </ResponsiveContainer>
    </Container>
  )
}

const Container = styled.div`
  ${tw`
    w-full
    py-4
    px-10
    bg-white
    shadow-sm
    flex
    flex-col
  `}

  .title {
    ${tw`
        md:text-lg
        lg:text-xl
    `}
  }
`

const TContainer = styled.div`
  ${tw``}
`

export default Chart
