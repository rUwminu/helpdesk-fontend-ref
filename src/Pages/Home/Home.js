import React, { useState, useEffect, useMemo } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { gql, useQuery } from '@apollo/client'

import { Chart } from '../../Components/index'

const GET_TICKET_STATS = gql`
  query {
    getTicketStats {
      _id
      total
    }
  }
`

const GET_ALL_TICKET = gql`
  query {
    getTickets {
      isResolved
    }
  }
`

const Home = () => {
  const Months = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  )
  const [ticketStats, setTicketStats] = useState([])

  const { data: notResolve, loading: notResolveLoading } = useQuery(GET_ALL_TICKET)
  const { data, loading } = useQuery(GET_TICKET_STATS)

  const getStats = () => {
    if (data) {
      const statList = data.getTicketStats.sort(function (a, b) {
        return a._id - b._id
      })

      statList.map((item) =>
        setTicketStats((prev) => [
          ...prev,
          { name: Months[item._id - 1], 'New Ticket': item.total },
        ])
      )
    }
  }

  useEffect(() => {
    getStats()
  }, [Months, data])
    

  return (
    <Container>
      {!loading && data && (
        <Chart
          data={ticketStats}
          title='Ticket Analytic'
          dataKey='New Ticket'
          grid
        />
      )}
    </Container>
  )
}

const Container = styled.div`
  ${tw`
    mx-auto
    pt-28
    pb-10
    px-4
    xl:px-0
    w-full
    max-w-5xl
    flex-grow
    overflow-hidden
    overflow-y-auto
    scrollbar-hide
  `}
`

const HomeWidget = styled.div`
  ${tw`
    mt-6
    w-full
    flex
    flex-col-reverse
    md:flex-row
    items-start
    justify-center
  `}
`

export default Home
