import Grid from "@material-tailwind/react"
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

import CardStatisticsVerticalComponent from "../admin/@core/components/card-statistics/card-stats-vertical"

// ** Styled Component Import
import ApexChartWrapper from '../admin/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from "../admin/views/dashboard/Table"
import Trophy from '../admin/views/dashboard/Trophy'
import TotalEarning from '../admin/views/dashboard/TotalEarning'
import StatisticsCard from '../admin/views/dashboard/StatisticsCard'
import WeeklyOverview from '../admin/views/dashboard/WeeklyOverview'
import DepositWithdraw from '../admin/views/dashboard/DepositWithdraw'
import SalesByCountries from '../admin/views/dashboard/SalesByCountries'
import Head from 'next/head'
import { Router } from 'next/router'
import NProgress from 'nprogress'
import { CacheProvider } from '@emotion/react'
import themeConfig from "../admin/configs/themeConfig"
import UserLayout from '../admin/layouts/UserLayout'
import ThemeComponent from '../admin/@core/theme/ThemeComponent'
import { SettingsConsumer, SettingsProvider } from '../admin/@core/context/settingsContext'
import { createEmotionCache } from '../admin/@core/utils/create-emotion-cache'

import 'react-perfect-scrollbar/dist/css/styles.css'

const clientSideEmotionCache = createEmotionCache()

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

const Dashboard = () => {
  return (
    <CacheProvider value={emotionCache}>
  <SettingsProvider>
  <SettingsConsumer>
     <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Trophy />
        </Grid>
        <Grid item xs={12} md={8}>
          <StatisticsCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <WeeklyOverview />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TotalEarning />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='$25.6k'
                icon={<Poll />}
                color='success'
                trendNumber='+42%'
                title='Total Profit'
                subtitle='Weekly Profit'
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='$78'
                title='Refunds'
                trend='negative'
                color='secondary'
                trendNumber='-15%'
                subtitle='Past Month'
                icon={<CurrencyUsd />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='862'
                trend='negative'
                trendNumber='-18%'
                title='New Project'
                subtitle='Yearly Project'
                icon={<BriefcaseVariantOutline />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='15'
                color='warning'
                trend='negative'
                trendNumber='-18%'
                subtitle='Last Week'
                title='Sales Queries'
                icon={<HelpCircleOutline />}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SalesByCountries />
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <DepositWithdraw />
        </Grid>
        <Grid item xs={12}>
          <Table />
        </Grid>
      </Grid>
     </ApexChartWrapper>
     </SettingsConsumer>
     </SettingsProvider>
   </CacheProvider>
  )
}

export default Dashboard
