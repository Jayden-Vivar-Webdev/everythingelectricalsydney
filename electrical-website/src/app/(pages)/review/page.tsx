import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: 'https://www.google.com.au/search?client=safari&sca_esv=7c7dba3f1b01f245&channel=iphone_bm&sxsrf=AE3TifOUXNp_DUeFOzHT7YTl9dFlgTgYIQ:1753966196677&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E_BrlSgmRx-EOxuNNUDKdhET4PZUGcqygSqS6sTRD_9MT86C9S3RqYZirX2hmj7h7LsK4g6onPmnybh8WryNLoJMidzoeH2T1qsHJ26iIXePQyaPpw%3D%3D&q=Everything+Electrical+Sydney+Reviews&sa=X&ved=2ahUKEwi_kuegkeeOAxVezzQHHb83B5AQ0bkNegQIMRAD&biw=1366&bih=917&dpr=2#',
      permanent: false,
    },
  }
}

const ReviewRedirectPage = () => {
  return null
}

export default ReviewRedirectPage
